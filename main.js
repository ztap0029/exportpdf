var server = require('./server');
const electron = require('electron');
const {autoUpdater} = require('electron-updater');
const ProgressBar = require('electron-progressbar');
const {dialog} = require('electron')
const isDev = require('electron-is-dev');
const app = electron.app;
//autoUpdater.requestHeaders = { "PRIVATE-TOKEN": "Personal access Token" };
autoUpdater.autoDownload = false;
autoUpdater.autoInstallOnAppQuit = false;
//autoUpdater.setFeedURL('http://localhost:3000/dist/');
// this should be placed at top of main.js to handle setup events quickly
if (handleSquirrelEvent(app)) {
    // squirrel event handled and app will exit in 1000ms, so don't do anything else
    return;
}
const path = require('path');
const url = require('url');
const BrowserWindow = electron.BrowserWindow;
var mainWindow = null;
var progressBar = null;
var totalFileSize = 0;

  if (isDev) {
    if(process.platform === 'win32'){
      console.log('----window platform----'+process.platform);
      autoUpdater.on('update-available', (info) => {
        //sendStatusToWindow('Update available.');
        console.log(info);
        totalFileSize = info.files[0].size;
        console.log("totalFileSize: "+totalFileSize);
        var rex = /(<([^>]+)>)/ig;
        var releaseNotes = info.releaseNotes.replace(rex , "");

        const dialogOpts = {
            type: 'info',
            buttons: ['Install', 'Later'],
            cancelId: 1,
            title: 'Application Update',
            message: 'New version is available!',
            detail: 'Version: '+info.version+'\nReleaseDate: '+info.releaseDate+'\nReleaseName: '+info.releaseName+'\nReleaseNotes: '+releaseNotes+'\n\nTo install the latest updates, Please choose "Install" or else you can choose "Later" option!'
          }

          dialog.showMessageBox(dialogOpts, (response) => {
            console.log("Continue: "+response);
            if (response === 0){
              const dialogOptions = {
                  type: 'info',
                  buttons: ['Ok'],
                  title: 'Continue',
                  message: 'Info',
                  detail: "The downloading process will continue in background, it won't halt your work while downloading!\n\nOnce it is done, application will restart automatically!"
                }
                dialog.showMessageBox(dialogOptions, (response) => {
                  autoUpdater.downloadUpdate();
                  progressBar = new ProgressBar({
                  indeterminate: false,
                  text: 'Downloading latest updates...',
                  detail: 'Wait...'
                  });
                  autoUpdater.on('download-progress', (progressObj) => {
                    console.log('progress start...');
                    console.log(progressObj);
                    let log_message = "Download speed: " + progressObj.bytesPerSecond;
                    log_message = log_message + ' - Downloaded ' + progressObj.percent + '%';
                    log_message = log_message + ' (' + progressObj.transferred + "/" + progressObj.total + ')';
                    progressBar
                        .on('completed', function() {
                          console.info('completed...');
                          progressBar.detail = 'Download completed.';
                        })
                        .on('aborted', function(value) {
                          console.info('aborted... ${value}');
                        })
                        .on('progress', function(value) {
                          progressBar.detail = log_message;
                        });
                      progressBar.value = progressObj.percent;

                  })
                  autoUpdater.on('update-downloaded', function (event, releaseNotes, releaseName) {
                    console.log('------------xxxxxxxxxx-------');
                    progressBar.close();
                    const dialogOpts = {
                        type: 'info',
                        buttons: ['Restart', 'Later'],
                        title: 'Application Updated',
                        message: 'New version has been downloaded!',
                        detail: 'To reflect the latest updates, Please choose "Restart" or else you can choose "Later" option!'
                      }

                      dialog.showMessageBox(dialogOpts, (response) => {
                        console.log("Continue: "+response);
                        if (response === 0) autoUpdater.quitAndInstall()
                      })
                  })
                })

            }else {
              console.log('no need to update');
            }
          })
      })

      autoUpdater.on('error', message => {
        console.log('There was a problem updating the application');
        console.log(message);
        const dialogOpts = {
            type: 'error',
            buttons: ['Ok'],
            title: 'Application Error',
            message: 'There was a problem updating the application',
            detail: message
          }

          dialog.showMessageBox(dialogOpts, (response) => {
            console.log("Continue: "+response);
            if (response === 0) autoUpdater.quitAndInstall()
          })
      })

    }else{
      console.log('---not window platform----');
    }

    } else {
    	console.log('Running in production');
      if(process.platform === 'win32'){
        console.log('----window platform----'+process.platform);
        autoUpdater.on('update-available', (info) => {
          //sendStatusToWindow('Update available.');
          console.log(info);
          totalFileSize = info.files[0].size;
          console.log("totalFileSize: "+totalFileSize);
          var rex = /(<([^>]+)>)/ig;
          var releaseNotes = info.releaseNotes.replace(rex , "");

          const dialogOpts = {
              type: 'info',
              buttons: ['Install', 'Later'],
              cancelId: 1,
              title: 'Application Update',
              message: 'New version is available!',
              detail: 'Version: '+info.version+'\nReleaseDate: '+info.releaseDate+'\nReleaseName: '+info.releaseName+'\nReleaseNotes: '+releaseNotes+'\n\nTo install the latest updates, Please choose "Install" or else you can choose "Later" option!'
            }

            dialog.showMessageBox(dialogOpts, (response) => {
              console.log("Continue: "+response);
              if (response === 0){
                const dialogOptions = {
                    type: 'info',
                    buttons: ['Ok'],
                    title: 'Continue',
                    message: 'Info',
                    detail: "The downloading process will continue in background, it won't halt your work while downloading!\n\nOnce it is done, application will restart automatically!"
                  }
                  dialog.showMessageBox(dialogOptions, (response) => {
                    autoUpdater.downloadUpdate();
                    progressBar = new ProgressBar({
                    indeterminate: false,
                    text: 'Downloading latest updates...',
                    detail: 'Wait...'
                    });
                    autoUpdater.on('download-progress', (progressObj) => {
                      console.log('progress start...');
                      console.log(progressObj);
                      let log_message = "Download speed: " + progressObj.bytesPerSecond;
                      log_message = log_message + ' - Downloaded ' + progressObj.percent + '%';
                      log_message = log_message + ' (' + progressObj.transferred + "/" + progressObj.total + ')';
                      progressBar
                          .on('completed', function() {
                            console.info('completed...');
                            progressBar.detail = 'Download completed.';
                          })
                          .on('aborted', function(value) {
                            console.info('aborted... ${value}');
                          })
                          .on('progress', function(value) {
                            progressBar.detail = log_message;
                          });
                        progressBar.value = progressObj.percent;

                    })
                    autoUpdater.on('update-downloaded', function (event, releaseNotes, releaseName) {
                      progressBar.close();
                      console.log('------------xxxxxxxxxx-------');
                      const dialogOpts = {
                          type: 'info',
                          buttons: ['Restart', 'Later'],
                          title: 'Application Updated',
                          message: 'New version has been downloaded!',
                          detail: 'To reflect the latest updates, Please choose "Restart" or else you can choose "Later" option!'
                        }

                        dialog.showMessageBox(dialogOpts, (response) => {
                          console.log("Continue: "+response);
                          if (response === 0) autoUpdater.quitAndInstall()
                        })
                    })
                  })

              }else {
                console.log('no need to update');
              }
            })
        })

        autoUpdater.on('error', message => {
          console.log('There was a problem updating the application');
          console.log(message);
          const dialogOpts = {
              type: 'error',
              buttons: ['Ok'],
              title: 'Application Error',
              message: 'There was a problem updating the application',
              detail: message
            }

            dialog.showMessageBox(dialogOpts, (response) => {
              console.log("Continue: "+response);
            })
        })

      }else{
          console.log('---not window platform----');
      }
  }

app.on('ready',function(){
  mainWindow = new BrowserWindow({width:1024,height:768,backgroundColor:'#2e2c29',icon: path.join(__dirname,'./app/assets/images/icon.png')});
  //mainWindow.loadURL('https://github.com');
  mainWindow.loadURL(url.format({
    pathname:path.join(__dirname,'./app/dist/index.html'),
    protocol:'file',
    slashes:true
  }));

  // Open the DevTools
  mainWindow.webContents.openDevTools();

  // notify user if update is available
   autoUpdater.checkForUpdates();
  // Emitted when the window is closed.
    mainWindow.on('closed', function() {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });

    //this below function can be used to autobackup
    electron.powerMonitor.on('resume', () => {
      console.log("power on");
        log.info('computer awake: refresh schedule for ${scheduledFor}')
        rescheduleRandomNote(scheduledFor)
     })
});

// Quit when all windows are closed.
app.on('window-all-closed', function() {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform != 'darwin') {
         app.quit();
    }
});

process.on('uncaughtException', function (error) {
    // Handle the error
    console.log("uncaughtException");
});

function rescheduleRandomNote (scheduleVal) {
  scheduleInstance.cancel()
  console.log("power on");
  log.info('reschedule-notes-to: ${scheduleVal}')
  scheduleInstance = scheduleRandomNote(scheduleVal)
}

function handleSquirrelEvent(application) {
    if (process.argv.length === 1) {
        return false;
    }

    const ChildProcess = require('child_process');
    const path = require('path');

    const appFolder = path.resolve(process.execPath, '..');
    const rootAtomFolder = path.resolve(appFolder, '..');
    const updateDotExe = path.resolve(path.join(rootAtomFolder, 'Update.exe'));
    const exeName = path.basename(process.execPath);

    const spawn = function(command, args) {
        let spawnedProcess, error;

        try {
            spawnedProcess = ChildProcess.spawn(command, args, {
                detached: true
            });
        } catch (error) {}

        return spawnedProcess;
    };

    const spawnUpdate = function(args) {
        return spawn(updateDotExe, args);
    };

    const squirrelEvent = process.argv[1];
    switch (squirrelEvent) {
        case '--squirrel-install':
        case '--squirrel-updated':
            // Optionally do things such as:
            // - Add your .exe to the PATH
            // - Write to the registry for things like file associations and
            //   explorer context menus

            // Install desktop and start menu shortcuts
            spawnUpdate(['--createShortcut', exeName]);

            setTimeout(application.quit, 1000);
            return true;

        case '--squirrel-uninstall':
            // Undo anything you did in the --squirrel-install and
            // --squirrel-updated handlers

            // Remove desktop and start menu shortcuts
            spawnUpdate(['--removeShortcut', exeName]);

            setTimeout(application.quit, 1000);
            return true;

        case '--squirrel-obsolete':
            // This is called on the outgoing version of your app before
            // we update to the new version - it's the opposite of
            // --squirrel-updated

            application.quit();
            return true;
    }
};
