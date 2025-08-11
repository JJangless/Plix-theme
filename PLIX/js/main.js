import * as THREE from './three.module.js'
import { dotmat, terrainmat } from './fgcanvas.js';
import state from './state.js'

const body = document.body;
const customcursor = document.getElementById('cursor');
const loader = document.getElementById("preloader");
const sitename = document.getElementById('logo-text');
const char1 = document.getElementById("char1");
const char2 = document.getElementById("char2");
const clientscontainer = document.getElementById("clients");
const light = document.getElementById("lightclient");
const dark = document.getElementById("darkclient");
const clientarrow = document.getElementById("clientarrow");
const copyrightyear = new Date().getFullYear();
const fgcanvas = document.getElementById("fgcanvas");
const logo = document.getElementById('logo');
const icon_dl = document.getElementById('icon_dl');
const icon_in = document.getElementById('icon_in');
const header = document.querySelector('header');
const content1text1 = document.getElementById('content1text1');
const content1text2 = document.getElementById('content1text2');
const blobwin = document.getElementById('blobwin');
const blobios = document.getElementById('blobios');
const blobcon = document.getElementById('blobcontainer');

function updateCursorPosition(e) {
    customcursor.style.top = (e.clientY + 18) + "px";
    customcursor.style.left = (e.clientX + 16) + "px";
}



function isIOS() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
}

if (isIOS()) {
  console.log("User is on iOS");
  blobwin.style.display = "none";
  blobios.style.display = "flex";
} else {
  console.log("User is NOT on iOS");
  blobwin.style.display = "flex";
  blobios.style.display = "none";
}




function handleTilt() {
    if (window.innerWidth <= 768) {
        if (clientscontainer.vanillaTilt) {
            clientscontainer.vanillaTilt.destroy();
        }
    } else {
        if (!clientscontainer.vanillaTilt) {
            VanillaTilt.init(clientscontainer, {
                max: 25,
                speed: 150,
                glare: true,
                "max-glare": 0.5
            });
        }
    }
}
handleTilt();

document.addEventListener('mousemove', e => {
    window.addEventListener('pointerdown', (e) => {
        if (e.pointerType === 'mouse') {
            console.log('User is using a mouse');
            clientarrow.src = 'PLIX/resource/arrow.png';

        } else if (e.pointerType === 'touch') {
            console.log('User is using touch');
            customcursor.style.opacity = "0";
            document.body.style.cursor = "inherit";
            clientarrow.src = 'PLIX/resource/link1.png';
        }
    });

    if (e.button === 1 || e.button === 2) {
        document.removeEventListener('mousemove', func1);
        customcursor.style.opacity = "0";
        document.body.style.cursor = "inherit";
    } else if (e.button === 0) {
        document.addEventListener('mousemove', func1);
        customcursor.style.opacity = "1";
        document.body.style.cursor = "none";
    }
});


window.addEventListener("load", function () {
    loader.style.display = "none";
    setTimeout(() => {
        body.style.overflowY = "visible";
    }, 2450);
    clientscontainer.style.animation = "clientsappear 2s forwards, levitate 1.1s 1s infinite alternate forwards ease-in-out"
    blobcon.style.animation = "blobscaleup 2.5s 1.5s forwards";
    fgcanvas.style.animation = "showcanvas 1s forwards ease-in-out";
})

blobcon.addEventListener('animationend', (event) => {
    blobwin.play();
});




function func1(e) {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const isOverScrollbar = e.clientX >= window.innerWidth - scrollbarWidth;

    if (isOverScrollbar) {
        customcursor.style.opacity = "0";
        document.body.style.cursor = "default";
    } else {
        customcursor.style.opacity = "1";
        document.body.style.cursor = "none";
        updateCursorPosition(e);
    }
}

document.body.addEventListener('mouseleave', () => {
    customcursor.style.opacity = "0";
});



document.body.addEventListener("wheel", e => {
    updateCursorPosition(e);
});


link1.addEventListener("mouseenter", () => {
    customcursor.src = "PLIX/resource/link.png";
});
link1.addEventListener("mouseleave", () => {
    customcursor.src = "PLIX/resource/arrow.png";
});


document.querySelector('.copyright').innerHTML = "©" + " " + copyrightyear + " " + "GeoffreyCreations"


lightclient.addEventListener('mouseover', () => {
    state.lighthover = true;
    char1.style.animation = "char1moveleft 2s forwards"
    char1.play();
    faviconimage.href = "PLIX/resource/ficon2.png";
    content1text1.style.backgroundColor = "var(--offwhite)"
    content1text1.style.color = "var(--gray)"
    content1text2.style.backgroundColor = "var(--offwhite)"
    content1text2.style.color = "var(--gray)"
    button3.style.setProperty('--button3border', 'var(--gray)')
    button3.style.setProperty('--button3bg', 'var(--offwhite)')
    button3.style.setProperty('--button3circle', 'var(--gray)')
    sitename.style.color = "var(--gray)"
    button1.style.color = "var(--blue6)"
    button2.style.color = "var(--gray)"
    logo.src = "PLIX/resource/logo2.png"
    icon_dl.src = "PLIX/resource/download2.png"
    icon_in.src = "PLIX/resource/install2.png"
    blobcon.style.filter = "grayscale(100%)"
    document.body.style.animation = "lettherebelight .4s forwards"
    terrainmat.color = new THREE.Color(0xe4e4e4)
    dotmat.color = new THREE.Color(0x585858)

    light.style.animation = "lightclienthover .4s forwards"
    light.style.zIndex = "8"
    dark.style.zIndex = "7"

})

char1.addEventListener('animationend', (event) => {
    char1.style.animationName = ""
    char1.currentTime = 0;
});


char2.addEventListener('animationend', (event) => {
    char2.style.animationName = ""
    char2.currentTime = 0;
});


let faviconimage = document.querySelector("link[rel*='icon']");

if (!faviconimage) {
    faviconimage = document.createElement("link");
    faviconimage.rel = "icon";
    document.head.appendChild(faviconimage);
}

lightclient.addEventListener('mouseleave', () => {
    state.lighthover = false;
    faviconimage.href = "PLIX/resource/ficon1.png";
    content1text1.style.backgroundColor = "var(--black1)"
    content1text1.style.color = "var(--white)"
    content1text2.style.backgroundColor = "var(--black1)"
    content1text2.style.color = "var(--white)"
    button3.style.setProperty('--button3border', 'white')
    button3.style.setProperty('--button3bg', 'black')
    button3.style.setProperty('--button3circle', 'white')
    sitename.style.color = "var(--white)"
    button1.style.color = "var(--blue2)"
    button2.style.color = "var(--white)"
    logo.src = "PLIX/resource/logo1.png"
    icon_dl.src = "PLIX/resource/download1.png"
    icon_in.src = "PLIX/resource/install1.png"
    blobcon.style.filter = "unset"
    document.body.style.animation = "lettherebedarkness .4s forwards"
    dotmat.color = new THREE.Color(0x1d1d1d)
    terrainmat.color = new THREE.Color(0x000000)
    light.style.animation = "lightclient .4s forwards"
})

darkclient.addEventListener('mouseover', () => {
    char2.style.animation = "char2moveright 2s forwards"
    char2.play()
    dotmat.color = new THREE.Color(0x585858)
    dark.style.animation = "darkclienthover .4s forwards"
    light.style.zIndex = "7"
    dark.style.zIndex = "8"
})


darkclient.addEventListener('mouseleave', () => {
    dotmat.color = new THREE.Color(0x1d1d1d)
    dark.style.animation = "darkclient .4s forwards"
})

clientscontainer.addEventListener('mouseover', () => {
    state.clienthover = true;
    document.body.style.overflow = "hidden"
    header.scrollIntoView();
    clientscontainer.style.animation = "unset"
    clientscontainer.style.opacity = "1"
    clientarrow.style.animation = "fadeout .5s forwards ease-in-out"


})

clientscontainer.addEventListener('mouseleave', () => {
    state.clienthover = false;
    document.body.style.overflow = "visible"
    document.body.style.overflowX = "hidden"
    clientscontainer.style.animation = "levitate 1.1s 1s infinite alternate forwards ease-in-out"
    clientarrow.style.animation = "clientarrowop 2s 1.4s forwards ease-in-out,diagonal 2s infinite forwards ease-in-out"

})