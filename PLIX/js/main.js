import * as THREE from './three.module.js'
import { dotmat, terrainmat } from './fgcanvas.js';
import state from './state.js'

var sboffset = window.innerWidth - 22;
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
const header = document.querySelector('header');
const content1text1 = document.getElementById('content1text1');
const content1text2 = document.getElementById('content1text2');
const blob = document.getElementById('blob');
const blobcon = document.getElementById('blobcontainer');


window.addEventListener("load", function () {
    loader.style.display = "none";
    clientscontainer.style.animation = "clientsappear 2s forwards, levitate 1.1s 1s infinite alternate forwards ease-in-out"
    blobcon.style.animation = "blobscaleup 2.5s 1.5s forwards";
    fgcanvas.style.animation = "showcanvas 2s forwards ease-in-out";
})

blobcon.addEventListener('animationend', (event) => {
    console.log('Animation finished for:', event.target);
    blob.play();
});



document.body.addEventListener("wheel", e => {
    customcursor.setAttribute("style", "top: " + (e.pageY + 18 - scrollY) + "px; left: " + (e.pageX + 16) + "px")
});


function func1(e) {
    if (e.pageX > sboffset) {
        console.log("The cursor changed to the default");
        customcursor.style.opacity = "0"
        document.body.style.cursor = "inherit"
    }
    else {
        customcursor.style.opacity = "100%"
        document.body.style.cursor = "none"
    }

    customcursor.setAttribute("style", "top: " + (e.pageY + 18 - scrollY) + "px; left: " + (e.pageX + 16) + "px")
}



document.addEventListener('mousemove', func1);

document.body.addEventListener('mouseleave', () => {
    customcursor.style.opacity = "0"
})


document.addEventListener('mouseup', e => {
    if (e.button == 1) {
        document.removeEventListener('mousemove', func1);
        customcursor.style.opacity = "0"
        document.body.style.cursor = "inherit"
    }
    else if (e.button == 0) {
        customcursor.setAttribute("style", "top: " + (e.pageY + 18 - scrollY) + "px; left: " + (e.pageX + 16) + "px")
        document.addEventListener('mousemove', func1);
        customcursor.style.opacity = "100%"
        document.body.style.cursor = "none"

    }
    else if (e.button == 2) {
        document.removeEventListener('mousemove', func1);
        customcursor.style.opacity = "0"
        document.body.style.cursor = "inherit"
    }
})


link1.addEventListener('mouseover', () => {
    document.getElementById("cursor").src = "PLIX/resource/link.png";
})

link1.addEventListener('mouseleave', () => {
    document.getElementById("cursor").src = "PLIX/resource/cursor.png";
})

document.querySelector('.copyright').innerHTML = "©" + " " + copyrightyear + " " + "GeoffreyCreations"


lightclient.addEventListener('mouseover', () => {
    state.lighthover = true;
    char1.style.animation = "char1moveleft 2s forwards"
    // char1.play()
    // faviconimage.href = "./PLIX/resource/favicon2.png"
    content1text1.style.backgroundColor = "var(--offwhite)"
    content1text1.style.color = "var(--gray)"
    content1text2.style.backgroundColor = "var(--offwhite)"
    content1text2.style.color = "var(--gray)"
    button3.style.setProperty('--button3border', 'dimgray')
    button3.style.setProperty('--button3bg', 'white')
    button3.style.setProperty('--button3circle', 'dimgray')
    sitename.style.color = "var(--gray)"
    button1.style.color = "var(--blue6)"
    button2.style.color = "var(--gray)"
    logo.src = "PLIX/resource/logo2.png"
    blobcon.style.filter = "grayscale(100%)"
    document.body.style.animation = "lettherebelight .4s forwards"
    terrainmat.color = new THREE.Color(0xe4e4e4)
    dotmat.color = new THREE.Color(0x585858)

    light.style.animation = "lightclienthover .4s forwards"
    light.style.zIndex = "8"
    dark.style.zIndex = "7"

})

lightclient.addEventListener('mouseleave', () => {
    state.lighthover = false;
    char1.style.animationName = ""
    char1.currentTime = 0;
    char2.style.animationName = ""
    char2.currentTime = 0;
    // faviconimage.href = "./PLIX/resource/favicon1.png"
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
    blobcon.style.filter = "unset"
    document.body.style.animation = "lettherebedarkness .4s forwards"
    dotmat.color = new THREE.Color(0x1d1d1d)
    terrainmat.color = new THREE.Color(0x000000)
    light.style.animation = "lightclient .4s forwards"
})

darkclient.addEventListener('mouseover', () => {
    char2.style.animation = "char2moveright 2s forwards"
    // char2.play()
    dotmat.color = new THREE.Color(0x585858)
    dark.style.animation = "darkclienthover .4s forwards"
    light.style.zIndex = "7"
    dark.style.zIndex = "8"
})


darkclient.addEventListener('mouseleave', () => {
    char2.style.animationName = ""
    char2.currentTime = 0;
    char1.style.animationName = ""
    // char1.currentTime = 0;
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