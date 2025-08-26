import * as THREE from './three.module.js'
import { dotmat, terrainmat } from './fgcanvas.js';
import state from './state.js'

const body = document.body;
const loader = document.getElementById("preloader");
const sitename = document.getElementById('logo-text');
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
const blobwrap = document.getElementById('blob-wrapper');
const blobprewin = document.getElementById('blobprewin');
const blobwin = document.getElementById('blobwin');
const blobsaf = document.getElementById('blobsaf');
const char1win = document.getElementById('char1win');
const char2win = document.getElementById('char2win');
const char1saf = document.getElementById('char1saf');
const char2saf = document.getElementById('char2saf');
const clientswrapper = document.getElementById('clients-wrapper');

function isSafari() {
    const ua = navigator.userAgent;
    return /^((?!chrome|android|crios|fxios|edg).)*safari/i.test(ua);
}


if (isSafari()) {
    blobprewin.style.display = "none";
    blobwin.style.display = "none";
    char1saf.style.display = "block";
    char2saf.style.display = "block";
    char1win.style.display = "none";
    char2win.style.display = "none";
    blobsaf.style.display = "flex";
} else {
    blobprewin.style.display = "flex";
    blobwin.style.display = "flex";
    char1saf.style.display = "none";
    char2saf.style.display = "none";
    char1win.style.display = "block";
    char2win.style.display = "block";
    blobsaf.style.display = "none";
}

function handleTilt() {
    if (window.innerWidth <= 768) {
        if (clientswrapper.vanillaTilt) {
            clientswrapper.vanillaTilt.destroy();
        }
    } else {
        if (!clientswrapper.vanillaTilt) {
            VanillaTilt.init(clientswrapper, {
                max: 25,
                speed: 150,
                glare: true,
                "max-glare": 0
            });
        }
    }
}
handleTilt();

document.addEventListener('mousemove', e => {
    window.addEventListener('pointerdown', (e) => {
        if (e.pointerType === 'mouse') {
            clientarrow.src = 'PLIX/resource/arrow1.png';

        } else if (e.pointerType === 'touch') {
            customcursor.style.opacity = "0";
            document.body.style.cursor = "inherit";
            clientarrow.src = 'PLIX/resource/touch.png';
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
    blobwrap.style.animation = "blobscaleup 2.5s 1.5s forwards";
    fgcanvas.style.animation = "showcanvas 3.5s forwards ease-in-out";
})


document.querySelector('.copyright').innerHTML = "©" + " " + copyrightyear + " " + "GeoffreyCreations"


lightclient.addEventListener('mouseover', () => {
    state.lighthover = true;
    char1win.style.animation = "char1moveleft 2s forwards"
    char1saf.style.animation = "char1moveleft 2s forwards"
    char1win.play();
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
    blobwrap.style.filter = "grayscale(100%)"
    document.body.style.animation = "lettherebelight .4s forwards"
    terrainmat.color = new THREE.Color(0xe4e4e4)
    dotmat.color = new THREE.Color(0x585858)

    light.style.animation = "lightclienthover .4s forwards"
    light.style.zIndex = "8"
    dark.style.zIndex = "7"

})

char1win.addEventListener('animationend', (event) => {
    char1win.style.animationName = ""
    char1win.currentTime = 0;
});


char2win.addEventListener('animationend', (event) => {
    char2win.style.animationName = ""
    char2win.currentTime = 0;
});


char1saf.addEventListener('animationend', (event) => {
    char1saf.style.animationName = ""
    char1saf.currentTime = 0;
});


char2saf.addEventListener('animationend', (event) => {
    char2saf.style.animationName = ""
    char2saf.currentTime = 0;
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
    blobwrap.style.filter = "unset"
    document.body.style.animation = "lettherebedarkness .4s forwards"
    dotmat.color = new THREE.Color(0x1d1d1d)
    terrainmat.color = new THREE.Color(0x000000)
    light.style.animation = "lightclient .4s forwards"
})

darkclient.addEventListener('mouseover', () => {
    char2win.style.animation = "char2moveright 2s forwards"
    char2saf.style.animation = "char2moveright 2s forwards"
    char2win.play()
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
    clientscontainer.style.animationPlayState = "paused";
    clientarrow.style.animation = "arrowfadeout .5s forwards ease-in-out"

})

clientscontainer.addEventListener('mouseleave', () => {
    state.clienthover = false;
    document.body.style.overflow = "visible"
    document.body.style.overflowX = "hidden"
    clientscontainer.style.animationPlayState = "running";
    clientarrow.style.animation = "arrowfadein .5s forwards ease-in-out"
})