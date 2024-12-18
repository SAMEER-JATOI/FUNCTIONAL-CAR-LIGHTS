let head = document.querySelector('.headl');
let tail = document.querySelector('.taill');
let num = 's';
let nu = 'm';

function en() {
    if(num === 's'){
        num='a';
    }else if(num === 'a'){
        num='s';
    }
    
    if(num === 'a'){
    head.classList.add('blink');
    tail.classList.add('blink');
    }else if(num === 's'){
        head.classList.remove('blink');
        tail.classList.remove('blink');
    }
}


function li() {
    if(nu === 'm'){
        nu='e';
    }else if(nu === 'e'){
        nu='m';
    }
    
    if(nu === 'e'){
    head.classList.add('front');
    tail.classList.add('back');
    }else if(nu === 'm'){
        head.classList.remove('front');
        tail.classList.remove('back');
    }
}