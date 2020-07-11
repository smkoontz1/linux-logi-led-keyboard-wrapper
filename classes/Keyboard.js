const Key = require('./Key');

class Keyboard {
    constructor(keyRows) {
        if (keyRows != undefined) {
            this.keyRows = keyRows;
        } else {
            this.keyRows = [
                [
                    new Key('tilde', '~`', '0000ff' ),
                    new Key('1', '1', '0000ff'),
                    new Key('2', '2', '0000ff'),
                    new Key('3', '3', '0000ff'),
                    new Key('4', '4', '0000ff'),
                    new Key('5', '5', '0000ff'),
                    new Key('6', '6', '0000ff'),
                    new Key('7', '7', '0000ff'),
                    new Key('8', '8', '0000ff'),
                    new Key('9', '9', '0000ff'),
                    new Key('0', '0', '0000ff'),
                    new Key('minus', '-_', '0000ff'),
                    new Key('equal', '+=', '0000ff'),
                    new Key('backspace', 'BACKSPACE', '0000ff'),
                ],
                [
                    new Key('tab', 'TAB', '0000ff'),
                    new Key('q', 'Q', '0000ff'),
                    new Key('w', 'W', '0000ff'),
                    new Key('e', 'E', '0000ff'),
                    new Key('r', 'R', '0000ff'),
                    new Key('t', 'T', '0000ff'),
                    new Key('y', 'Y', '0000ff'),
                    new Key('u', 'U', '0000ff'),
                    new Key('i', 'I', '0000ff'),
                    new Key('o', 'O', '0000ff'),
                    new Key('p', 'P', '0000ff'),
                    new Key('open_bracket', '{[', '0000ff'),
                    new Key('close_bracket', '}]', '0000ff'),
                    new Key('backslash', '|\\', '0000ff'),
                ],
                [
                    new Key('caps_lock', 'CAPS', '0000ff'),
                    new Key('a', 'A', '0000ff'),
                    new Key('s', 'S', '0000ff'),
                    new Key('d', 'D', '0000ff'),
                    new Key('f', 'F', '0000ff'),
                    new Key('g', 'G', '0000ff'),
                    new Key('h', 'H', '0000ff'),
                    new Key('j', 'J', '0000ff'),
                    new Key('k', 'K', '0000ff'),
                    new Key('l', 'L', '0000ff'),
                    new Key('semicolon', ':;', '0000ff'),
                    new Key('quote', '\"\'', '0000ff'),
                    new Key('enter', 'ENTER', '0000ff'),
                ],
                [
                    new Key('shift_left', 'SHIFT', '0000ff'),
                    new Key('z', 'Z', '0000ff'),
                    new Key('x', 'X', '0000ff'),
                    new Key('c', 'C', '0000ff'),
                    new Key('v', 'V', '0000ff'),
                    new Key('b', 'B', '0000ff'),
                    new Key('n', 'N', '0000ff'),
                    new Key('m', 'M', '0000ff'),
                    new Key('comma', '&lt;,', '0000ff'),
                    new Key('period', '&gt;.', '0000ff'),
                    new Key('slash', '?/', '0000ff'),
                    new Key('shift_right', 'SHIFT', '0000ff'),
                ],
                [
                    new Key('ctrl_left', 'CTRL', '0000ff'),
                    new Key('win_left', 'SUPER', '0000ff'),
                    new Key('alt_left', 'ALT', '0000ff'),
                    new Key('space', 'SPACE', '0000ff'),
                    new Key('alt_right', 'ALT', '0000ff'),
                    new Key('win_right', 'SUPER', '0000ff'),
                    new Key('menu', 'MENU', '0000ff'),
                    new Key('ctrl_right', 'CTRL', '0000ff'),
                ],
            ];
        }
        
    }
}

module.exports = Keyboard;