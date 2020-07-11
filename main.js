const path = require('path');
const { app, ipcMain } = require('electron');
const { exec } = require('child_process');

const Store = require('./classes/Store');
const Window = require('./classes/Window');
const Keyboard = require('./classes/Keyboard');

const store = new Store({
  configName: 'user-preferences',
  defaults: {
  }
});

let keyboard;

main = () => {
  let mainWindow = new Window({
    file: path.join('renderer', 'index.html')
  });

  // try to load keyboard data
  let keyboardData = store.get('keyboard-data');

  this.keyboard = new Keyboard(keyboardData);
  
  // events
  ipcMain.on('main-window-loaded', (event) => {
    console.log('event received, sending keyboard');
    mainWindow.send('keyboard', this.keyboard);
  });

  ipcMain.on('change-key-color', (event, hex, rowIndex, keyId) => {
    let keyRow = this.keyboard.keyRows[rowIndex];
    let key = keyRow.find(key => key.keyId == keyId);
    key.keyColor = hex;

    exec(`g810-led -k ${keyId} ${hex}`, (err, stdout, stderr) => {
      if (err) {
        console.error(err);
      }
    });
  });
}

app.on('ready', main);

// quit when all windows are closed, except on macOS.
app.on('window-all-closed', () => {
  // save the configuration
  store.set('keyboard-data', this.keyboard.keyRows);

  if (process.platform !== 'darwin') {
    app.quit();
  }
});