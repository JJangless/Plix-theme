import jump from './jump.module.js';

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const modalcon = document.getElementById('modal-content');
const modal = document.getElementById('modal');
const modalclosebutton = document.getElementById('modalclose');
const blob = document.getElementById('blob');

let scrollTrackingEnabled = false;

button2.addEventListener('click', () => {
    jump('#section3');
})
button3.addEventListener('click', () => {
    jump('#section3');
})


button4.addEventListener('click', () => {
    scrollTrackingEnabled = true;
    jump('#section1');
});



window.onscroll = () => {
    if (!scrollTrackingEnabled) return; 
    if (window.scrollY == "0") {
        blob.classList.remove("blobanimatetrigger");
        void blob.offsetWidth;
        blob.classList.add("blobanimatetrigger");
        blob.addEventListener('animationend', (event) => {
            scrollTrackingEnabled = false;
        });
    }
};

function showmodal() {
    document.body.style.overflow = "hidden";
    modal.style.display = "flex";
    modalcon.style.opacity = 0;
    modalcon.style.transform = "scale(0.8)";
    modalcon.style.transition = "none"; 
    void modalcon.offsetHeight;
    modalcon.style.transition = "all 0.22s ease";
    modalcon.style.opacity = 1;
    modalcon.style.transform = "scale(1)";
    modal.style.animation = "letitblur .22s ease-in-out forwards"
}

function hidemodal() {
    document.body.style.overflow = "auto";
    modal.style.display = "none";
}

button1.addEventListener("click", () => {
    showmodal();
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        hidemodal();
    }
});

document.addEventListener("keyup", (e) => {
    if (e.key === "Escape") {
        hidemodal();
    }
})

modalclosebutton.addEventListener('click', () => {
    hidemodal();
})


