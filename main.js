var server = require('./server');
const electron = require('electron');
const {autoUpdater} = require('electron-updater');
const {dialog} = require('electron')
const isDev = require('electron-is-dev');
const app = electron.app;
//autoUpdater.requestHeaders = { "PRIVATE-TOKEN": "Personal access Token" };
autoUpdater.autoDownload = false;
// this should be placed at top of main.js to handle setup events quickly
if (handleSquirrelEvent(app)) {
    // squirrel event handled and app will exit in 1000ms, so don't do anything else
    return;
}
const path = require('path');
const url = require('url');
const BrowserWindow = electron.BrowserWindow;
var mainWindow = null;


  if (isDev) {
    // autoUpdater.on('checking-for-update', () => {
    //   console.log('-------checking-for-update------');
    //     //console.log("ok:"+res);
    //   });



    } else {
    	console.log('Running in production');
      autoUpdater.on('update-available', (info) => {
        //sendStatusToWindow('Update available.');
        console.log('-------update available------');
      })
      autoUpdater.on('update-not-available', (info) => {
      //  sendStatusToWindow('Update not available.');
        console.log('-------update not available------');
      })
      autoUpdater.on('error', (err) => {
        //sendStatusToWindow('Error in auto-updater. ' + err);
        console.log('errrrrrr');
      })
      autoUpdater.on('download-progress', (progressObj) => {
        let log_message = "Download speed: " + progressObj.bytesPerSecond;
        log_message = log_message + ' - Downloaded ' + progressObj.percent + '%';
        log_message = log_message + ' (' + progressObj.transferred + "/" + progressObj.total + ')';
        sendStatusToWindow(log_message);
      })
      // autoUpdater.on('update-downloaded', (info) => {
      //   sendStatusToWindow('Update downloaded,  will install in 1 seconds');
      //   console.log('will install----------');
      // });

      autoUpdater.on('update-downloaded', function (event, releaseNotes, releaseName) {
        // const dialogOpts = {
        //    type: 'info',
        //    buttons: ['Restart', 'Later'],
        //    title: 'Application Update',
        //    message: process.platform === 'win32' ? releaseNotes : releaseName,
        //    detail: 'A new version has been downloaded. Restart the application to apply the updates.'
        //   }
        //
        //   dialog.showMessageBox(dialogOpts, (response) => {
        //    if (response === 0) autoUpdater.quitAndInstall()
        //   })
        const dialogOpts = {
            type: 'info',
            buttons: ['Restart', 'Later'],
            title: 'Application Update',
            message: 'New version of the app is available!',
            detail: 'To install the latest updates, Please choose "Restart" or else you can choose "Later" option!'
          }

          dialog.showMessageBox(dialogOpts, (response) => {
            console.log("Continue: "+response);
            if (response === 0) autoUpdater.quitAndInstall()
          })
      });

      autoUpdater.checkForUpdates();

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
  //mainWindow.webContents.openDevTools();

  // notify user if update is available
   autoUpdater.checkForUpdatesAndNotify();
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
