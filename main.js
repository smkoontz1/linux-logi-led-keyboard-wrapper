const path = require('path');
const { app, ipcMain } = require('electron');
const { exec } = require('child_process');

const Window = require('./Window');

function main () {
  let mainWindow = new Window({
    file: path.join('renderer', 'index.html')
  });

  ipcMain.on('change-key-color', (event, rgb, key) => {
    exec(`g810-led -k ${key} ${rgb}`, (err, stdout, stderr) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
      }
    });
  });
}

app.on('ready', main);

// quit when all windows are closed, except on macOS.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});