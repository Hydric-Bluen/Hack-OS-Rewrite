const electron = require('electron');
const fs = require('fs');
const { app, BrowserWindow } = electron;

let mainWindow;

// if(saving) {
//   let data = `{"emailTimer": ${emailTimer}, "emails": ${emails}, "emailCount": ${emailCount}, "newEmailCount": ${newEmailCount}, "acceptedEmails": ${acceptedEmails}, "acceptedEmailCount": ${acceptedEmailCount}, "shopItems": ${shopItems}, "backDoorHackQuantity": ${shopItems[0].quantity}, "wifiCrackerBought": ${shopItems[1].bought}, "passwordCrackerBought": ${shopItems[2].bought}, "PHPInjectorBought": ${shopItems[3].bought}, "networkScannerBought": ${shopItems[4].bought}, "dayJobsCooldown": ${dayJobsCooldown}, "backDoorHackTimer": ${backDoorHackTimer}, "wallet": ${wallet}, "volume": ${volume}}`
//   fs.writeFile('./saves/save.json', data, (error) => { if(error) throw err; })
//   return;
// }

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
