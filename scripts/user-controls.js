document.addEventListener('keydown', function (ev) {
    switch(ev.keyCode){
        case 65:
            LEFT_PRESSED = true;
            break;
        case 87:
            UP_PRESSED = true;
            break;
        case 68:
            RIGHT_PRESSED = true;
            break;
        case 83:
            DOWN_PRESSED = true;
            break''
    }
}, false);

document.addEventListener('keyup', function (ev) {
    switch(ev.keyCode){

    }
})