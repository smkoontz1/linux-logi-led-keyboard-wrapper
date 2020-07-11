const { ipcRenderer } = require('electron');

window.onload = (event) => {
    ipcRenderer.send('main-window-loaded');
}

ipcRenderer.on('keyboard', (event, keyboard) => {
    loadKeyboard(keyboard);
});

loadKeyboard = (keyboard) => {
    console.log(keyboard);

    let keyboardElement = document.getElementById('keyboard');

    for (let rowIndex = 0; rowIndex < keyboard.keyRows.length; rowIndex++) {
        console.log('inside loop');
        let keyRow = keyboard.keyRows[rowIndex];
        console.log(keyRow);

        // create the row
        let rowElement = document.createElement('div');
        rowElement.classList.add('keyboard-row');
    
        // append the key
        keyRow.forEach(key => {
            let keyElement = document.createElement('span');
            keyElement.classList.add('key');
            keyElement.setAttribute('style', `background-color: #${key.keyColor}`);
            keyElement.id = `key-${key.keyId}`;
            keyElement.innerText = key.keyDisplay;
    
            // add a click event
            keyElement.addEventListener('click', () => {
                let selectedColor = document.getElementById('color-selector').value;
    
                keyElement.setAttribute('style', `background-color: ${selectedColor}`);
    
                let hexValue = selectedColor.replace('#', '');
    
                // update keyboard object
                key.keyColor = hexValue;
    
                // change color of hardware
                ipcRenderer.send('change-key-color', hexValue, rowIndex, key.keyId);
    
            });
    
            rowElement.appendChild(keyElement);
        });
    
        // append the row
        keyboardElement.appendChild(rowElement);
    }
}