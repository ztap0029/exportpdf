var express = require('express');
var bodyParser = require('body-parser');
var server = express();
var later = require('later');
var rp = require('request-promise');
var fs = require('fs');
var async = require('async');
var multer = require('multer');
var DIR = './uploads/';
var upload = multer({dest: DIR}).single('photo');
var download = require('download-file');
var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
//var morgan = require('morgan');
var cors = require('cors');
//var routes = require('./routes/routes');
var port = process.env.PORT || 3000;
var autoTimer;
var textSched;
var startRow = 0;
var maxRows = 5;
var table;
var tables = [];
var itrateTables = [];
var autoToggle = true;
var fileName;

if(localStorage.getItem('tables') && localStorage.getItem('tables') != null){
  tables = JSON.parse(localStorage.getItem('tables'));
  itrateTables = JSON.parse(localStorage.getItem('tables'));
}

//auto start when app load
if(localStorage.getItem('scheduledTime') && localStorage.getItem('scheduledTime') != null){
  var time = JSON.parse(localStorage.getItem('scheduledTime'));
  textSched = later.parse.text(time);
  autoTimer = later.setInterval(togglePdfService, textSched);
}

server.use(bodyParser.json({extended: true,limit:'5gb'}));
server.use(bodyParser.urlencoded({extended:true}));
//server.use(morgan('dev'));
server.use(cors());


//routes(server);
server.use('/api/set-user-data',function(req,res,next){
  console.log("set-credentials");
  localStorage.setItem("user",JSON.stringify(req.body));
  console.log(localStorage.getItem('user'));
  res.status(200).send({data:"Credentials has been set successfully!!",statusCode:200});
});

server.use('/api/set-url',function(req,res,next){
  console.log("url set");
  if(req && req.body && req.body.url){
    localStorage.setItem("mainurl",JSON.stringify(req.body.url));
  }
  console.log(localStorage.getItem('mainurl'));
  res.status(200).send({data:"URL has been set successfully!!",statusCode:200});
});

server.use('/api/set-tables',function(req,res,next){
  console.log("set-tables");
  console.log(req.body.tables);
  if(req && req.body && req.body.tables){
    localStorage.setItem("tables",JSON.stringify(req.body.tables));
    tables = JSON.parse(localStorage.getItem('tables'));
    itrateTables = JSON.parse(localStorage.getItem('tables'));
  }
  console.log(localStorage.getItem('tables'));
  res.status(200).send({data:"Tables has been set successfully!!",statusCode:200});
});

server.use('/api/set-column',function(req,res,next){
  console.log("set-column");
  console.log(req.body.column);
  if(req && req.body && req.body.column){
    localStorage.setItem("column",JSON.stringify(req.body.column));
  }
  console.log(localStorage.getItem('column'));
  res.status(200).send({data:"Column has been set successfully!!",statusCode:200});
});

server.use('/api/set-directory',function(req,res,next){
  console.log("set-directory");
  localStorage.setItem("directory",JSON.stringify(req.body.directory));
  console.log(localStorage.getItem('directory'));
  res.status(200).send({data:"Directory has been set successfully!!",statusCode:200});
});

server.use('/api/set-time',function(req,res,next){
  console.log("Time has been scheduled");
  localStorage.setItem("scheduledTime",JSON.stringify(req.body.time));
  console.log(localStorage.getItem('scheduledTime'));
  res.status(200).send({data:"Timing has been set successfully!!",statusCode:200});
});

server.use('/api/service/start',function(req,res,next){
  console.log("service: started");
  // localStorage.setItem('mainurl','');
  //   localStorage.setItem('tables','');
  //     localStorage.setItem('directory','');
  //       localStorage.setItem('scheduledTime','');

    if(localStorage.getItem('mainurl') && localStorage.getItem('mainurl') != null){
      if(localStorage.getItem('tables') && localStorage.getItem('tables') != null){
         if(localStorage.getItem('column') && localStorage.getItem('column') != null){
           if(localStorage.getItem('directory') && localStorage.getItem('directory') != null){
             if(localStorage.getItem('scheduledTime') && localStorage.getItem('scheduledTime') != null){
               var time = JSON.parse(localStorage.getItem('scheduledTime'));
               console.log(time);
               autoToggle = true;
               textSched = later.parse.text(time);
               autoTimer = later.setInterval(togglePdfService, textSched);
               togglePdfService();
               res.status(200).send({data:"Auto export started successfully!!"});
             }else{
               res.status(402).send({data:"Schedule time is not configure yet, please configure schedule time!!",statusCode:402});
             }
           }else{
             res.status(402).send({data:"Directory is not configure yet, please configure export directory!!",statusCode:402});
           }
         }else{
            res.status(402).send({data:"Column is not configure yet, please configure export column!!",statusCode:402});
         }
      }else{
        res.status(402).send({data:"Tables are not configure yet, please configure the export tables!!",statusCode:402});
      }
    }else{
      res.status(402).send({data:"URL is not configure yet, please configure the URL!!",statusCode:402});
    }

});

server.use('/api/service/stop',function(req,res,next){
  console.log("service: stopped ");
  if(autoTimer){
      autoTimer.clear();
      autoToggle = false;
      localStorage.setItem("scheduledTime",'');
      res.status(200).send({data:"Auto export stopped successfully!!"});
  }else{
    res.status(402).send({data:"Auto export not started yet!!",statusCode:402});
  }

})

server.use('/api/upload/logo',function(req,res,next){
  console.log("upload logo ----api---");
//  console.log(req.file);
  var path = '';
     upload(req, res, function (err) {
        if (err) {
          // An error occurred when uploading
          console.log(err);
          return res.status(422).send({data:"An Error occured",statusCode:422});
        }
       // No error occured.
        path = req.file.path;
        path = path.replace("\\", "/");
        path = './'+path;
        return res.status(200).send({data:path,statusCode:200});
      })
  })

  server.use('/api/fetch-logo',function(req,res,next){
    //uploads/e391f7ec05424c66b3329608eb25258a
    const path = require('path');
    if(req.query){
    console.log(req.query.path);
     const UPLOAD_PATH = path.resolve(__dirname,req.query.path);
     try{
        fs.createReadStream(path.resolve(UPLOAD_PATH)).pipe(res);
     }catch(e){
       console.log(e);
       res.status(422).send({data:"not found",statusCode:422});
     }
   }else{
     res.status(422).send({data:"not found",statusCode:422});
   }
  })

  process.on('uncaughtException', function (error) {
      // Handle the error
      console.log("uncaughtException");
      console.log(error);
  });

server.listen(port,function(){
  console.log("server is running on port:"+port);
})

async function togglePdfService(){
  startRow = 0;
  tables = JSON.parse(localStorage.getItem('tables'));
  itrateTables = JSON.parse(localStorage.getItem('tables'));
  startAutoService();
}

const waitFor = (ms) => new Promise(r => setTimeout(r, ms));

async function startAutoService(){
   console.log(".....auo called..:.... ");
  //console.log("yes called in every minutes");
  if(localStorage.getItem('user') && localStorage.getItem('user') != null){
    var userObj = JSON.parse(localStorage.getItem('user'));
    //console.log(userObj);
    var toggle = false;
    if(tables != '' && itrateTables != ''){
      //console.log(".....ttttt..:.... "+tables);
      tables.forEach(async (tab1)=>{
        itrateTables.forEach(async (tab2)=>{
          if(tab1.table === tab2.table){
            toggle = true;
            table = tab2.table;
          }
        })
      })
      if(toggle == true){
        console.log(toggle);
        console.log(table);
        await autoRunForAllTables(table);
      }
    }
  }
}

function autoRunForAllTables(table){
if(autoToggle == true){
     console.log("autoToggle: "+autoToggle);
  if(localStorage.getItem('user') && localStorage.getItem('user') != null){
    var userObj = JSON.parse(localStorage.getItem('user'));
  //  console.log(userObj);
  if(localStorage.getItem('column') && localStorage.getItem('column') != null){
    var column = JSON.parse(localStorage.getItem('column'));
    if(column == 'id'){
      var query = 'SELECT id FROM '+table+" WHERE Exported=false";
    }else{
      var query = 'SELECT id,'+column+' FROM '+table+" WHERE Exported=false";
    }
  }else{
      var query = 'SELECT id FROM '+table+" WHERE Exported=false";
  }

  if(localStorage.getItem('mainurl') && localStorage.getItem('mainurl') != null){
    var url = JSON.parse(localStorage.getItem('mainurl'))+"/rest/api/selectQuery?sessionId="+userObj.sessionId+"&startRow="+startRow+"&maxRows="+maxRows+"&query="+query+"&output=json";
    var selectQueryOptions = {
        method: 'GET',
        uri: url,
        body: {
            some: 'payload'
        },
        json: true // Automatically stringifies the body to JSON
    };

    rp(selectQueryOptions)
      .then(function (response) {
        if(response.length === 0){
          // console.log("---zero res---");
          itrateTables.forEach(function(result, index) {
            if(result.table === table) {
              //Remove from array
              itrateTables.splice(index, 1);
            }
          });
          startAutoService();
          return;
        }
          // POST succeeded...
          var iToggle = 0;
           response.forEach(async (value) => {
             //console.log(value[0]);
             var table = 'document1';
             var binaryUrl = JSON.parse(localStorage.getItem('mainurl'))+"/rest/api/getBinaryData?sessionId="+userObj.sessionId+"&id="+value[0]+"&fieldName=file&objName="+table;
             var weekday = new Array(7);
                  weekday[0] =  "Sun";
                  weekday[1] = "Mon";
                  weekday[2] = "Tues";
                  weekday[3] = "Wed";
                  weekday[4] = "Thurs";
                  weekday[5] = "Fri";
                  weekday[6] = "Sat";

            var months = new Array(11);
                months[0] =  "Jan";
                months[1] = "Feb";
                months[2] = "Mar";
                months[3] = "Apr";
                months[4] = "May";
                months[5] = "Jun";
                months[6] = "Jul";
                months[7] = "Aug";
                months[8] = "Sep";
                months[9] = "Oct";
                months[10] = "Nov";
                months[11] = "Dec";

              var date = new Date();
              var day = weekday[date.getDay()];
              var year = date.getFullYear();
              var dateNum = date.getDate();
              var hour = date.getHours();
              var minute = date.getMinutes();
              var month = months[date.getMonth()];
              var final_location = 'brixxs'+'_'+day+'_'+month+'_'+dateNum+'_'+year;
              if(localStorage.getItem('column') && localStorage.getItem('column') != null){
                if(JSON.parse(localStorage.getItem('column')) == 'id'){
                  fileName = value[0];
                }else{
                  fileName = value[1];
                }
              }else{
                fileName = value[0];
              }

             if(localStorage.getItem('directory') != '' && localStorage.getItem('directory') != null){
               var binaryOptions = {
                 directory: JSON.parse(localStorage.getItem('directory'))+"/",
                 filename: fileName+".pdf"
               };
             }else{
               var binaryOptions = {
                 directory: "./export/",
                 filename: fileName+".pdf"
               };
             }

            await download(binaryUrl, binaryOptions, function(err){
                 if (err) throw err
                  iToggle++;
                  var updateUrl = JSON.parse(localStorage.getItem('mainurl'))+'/rest/api/updateRecord?objName='+table+'&id='+value[0]+'&useIds=false&Exported=true&sessionId='+userObj.sessionId+'&output=json';
                  var updateOptions = {
                      method: 'POST',
                      uri: updateUrl,
                      body: {
                          some: 'payload'
                      },
                      json: true // Automatically stringifies the body to JSON
                  };
                  rp(updateOptions)
                    .then(function (response) {
                      console.log(response);
                    })
                    .catch(function(errr){
                      console.log(errr);
                    })
                  if(iToggle === response.length){
                    startRow = startRow+5;
                    console.log("startRow after: "+startRow);
                    autoRunForAllTables(table);
                  }
             })
           })

      })
      .catch(function (err) {
          // failed...
          console.log(err);
          if(err.error.status === 'login'){
            var user = JSON.parse(localStorage.getItem('user'));
            var loginURL = JSON.parse(localStorage.getItem('mainurl'))+"/rest/api/login?output=json";
            var loginOptions = {
                method: 'POST',
                uri: loginURL,
                body: {
                    some: 'payload'
                },
                headers:{'content-type':'application/json','loginName':user.username,'password':user.password},
                json: true // Automatically stringifies the body to JSON
            };
            rp(loginOptions)
              .then(function (loginResponse) {
                console.log(loginResponse);
                var userObj = JSON.parse(localStorage.getItem('user'));
                userObj.sessionId = loginResponse.sessionId;
                localStorage.setItem('user',JSON.stringify(userObj));
              })
              .catch(function(errLogin){
                console.log(errLogin);
              })

          }
      })
    }
  }
 }
}

module.exports = server;
