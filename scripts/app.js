const electron = require('electron');
const { app, BrowserWindow } = electron;

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    resizable: false,
    fullscreen: false
  });

  mainWindow.setTitle("Hack OS Rewrite");
  mainWindow.loadFile("./index.html");
  // mainWindow.setMenu(null);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});
