let head = document.querySelector('.headl');
let tail = document.querySelector('.taill');
let num = 's';
let nu = 'm';
let b = document.querySelector('#b')
let audi = new Audio('a.mp3')
let audio = new Audio('ind.mp3')

function st() {
  audi.src='sakd'
    b.style.display='None'
    head.classList.remove('blin');
    tail.classList.remove('blin');
}


function siren() {
    audi.src='a.mp3'
    setInterval(function() {
    audi.play()
    },10)
    b.style.display='block'
    head.classList.add('blin');
    tail.classList.add('blin');
}

function en() {
    if(num === 's'){
        num='a';
    }else if(num === 'a'){
        num='s';
    }
    
    if(num === 'a'){
    head.classList.add('blink');
    tail.classList.add('blink');
    audio.src='ind.mp3'
    setInterval(function() {
    audio.play()
    },10)
    }else if(num === 's'){
        audio.src='aklsjfs'
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
    let aud = new Audio('lig.mp3')
    aud.play()
    }else if(nu === 'm'){
        let aud = new Audio('lig.mp3')
        aud.play()
        head.classList.remove('front');
        tail.classList.remove('back');
    }
}