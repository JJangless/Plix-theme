import jump from './jump.module.js';

var  button1 = document.getElementById('button1');
var  button3 = document.getElementById('button3');
var  button4 = document.getElementById('button4');
var  button5 = document.getElementById('button5');  
// var  button6 = document.getElementById('button6');  
const blob = document.getElementById('blob');
const modalcon = document.getElementById('modal_container');
const modal = document.getElementById('modal');
var  modalclosebutton = document.getElementById('modalclose');
var  overlay = document.getElementById('overlay');

button1.addEventListener('click', () => {
    jump('#sec-3');
})


function hidemodal() {
    document.body.style.overflow = "visible"
    document.body.style.overflowX = "hidden"
    modal.style.animation = "modalscaledown 10s ease-in-out forwards"
    overlay.style.display = "none"
    modalcon.style.display = "none"
}

function showmodal() {
    document.body.style.overflow = "hidden"
    modal.style.animation = "modalscaleup .5s ease-in-out forwards"
    overlay.style.display = "block"
    overlay.style.animation = "letitblur .5s ease-in-out forwards"
    modalcon.style.display = "flex"
}

document.addEventListener("keyup", (e) => {
    if (e.key === "Escape") {
        hidemodal();
    } 
})

overlay.addEventListener('click', () => {
    hidemodal();
   })

   button3.addEventListener('click', () => {
    showmodal();
   })
      modalclosebutton.addEventListener('click', () => {
    hidemodal();
    })
      button4.addEventListener('click', () => {
     jump('#sec-0');
     
      window.onscroll = function() {
    if (window.scrollY == "0") {
        blob.style.animation = "blobpulse 2s";  
    }
}
})
    button5.addEventListener('click', () => {
    jump('#sec-3');
    })

