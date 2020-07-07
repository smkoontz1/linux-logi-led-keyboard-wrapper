const { ipcRenderer } = require('electron');

let qKey = document.getElementById('key-q');

qKey.addEventListener('click', function() {
    let color = document.getElementById('color-selector').value;

    qKey.setAttribute('style', `background-color: ${color}`);

    let rgb = color.replace('#', '');

    ipcRenderer.send('change-key-color', rgb, "q");
});