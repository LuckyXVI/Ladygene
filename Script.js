const countdown = document.getElementById("countdown");
const lockScreen = document.getElementById("lockScreen");
const mainContent = document.getElementById("mainContent");
const openLetterBtn = document.getElementById("openLetterBtn");
const letterModal = document.getElementById("letterModal");
const closeLetter = document.getElementById("closeLetter");
const typingText = document.getElementById("typingText");
const music = document.getElementById("bgMusic");

// ✨ CAMBIA ESTA FECHA
const targetDate = new Date("May 20, 2026 00:00:00").getTime();

const interval = setInterval(() => {

    const now = new Date().getTime();
    const distance = targetDate - now;

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML =
    `${String(hours).padStart(2, '0')}:`
    + `${String(minutes).padStart(2, '0')}:`
    + `${String(seconds).padStart(2, '0')}`;


    if(distance <= 0){

        clearInterval(interval);

        lockScreen.classList.add("hidden");
        mainContent.classList.remove("hidden");

        music.play().catch(() => {});
    }

}, 1000);


// LETTER

const message = `
En este día tan distinguido, todo el reino celebra la existencia de un alma verdaderamente extraordinaria.

Una dama poseedora de una dulzura incomparable,
de un corazón tan noble como encantador,
y de una sonrisa capaz de transformar los instantes más ordinarios en recuerdos eternos.

Que este nuevo capítulo de vuestra vida llegue colmado de dicha,
de delicadas melodías, de sueños cumplidos con gracia y fortuna,
y de adorables felinos que acompañen cada una de vuestras aventuras.

Pues entre todos los salones, jardines y rincones del reino…
jamás ha existido alguien tan singular como vos.

Feliz cumpleaños, Lady Gene.✨

Con la más alta admiración,
**Aleskai Gethsemane**

`;


openLetterBtn.addEventListener("click", () => {

    letterModal.style.display = "flex";

    createPetals();

    typeWriter();

});

closeLetter.addEventListener("click", () => {
    letterModal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if(e.target === letterModal){
        letterModal.style.display = "none";
    }
});


// TYPEWRITER

let i = 0;

function typeWriter(){

    typingText.innerHTML = "";
    i = 0;

    function typing(){

        if(i < message.length){
            typingText.innerHTML += message.charAt(i);
            i++;
            setTimeout(typing, 35);
        }
    }

    typing();
}


// PETALS

function createPetals(){

    for(let i = 0; i < 80; i++){

        const petal = document.createElement("div");

        petal.classList.add("petal");

        petal.innerHTML = Math.random() > .5 ? "🌸" : "🌺";

        petal.style.left = Math.random() * 100 + "vw";

        petal.style.animationDuration = (Math.random() * 5 + 5) + "s";

        petal.style.opacity = Math.random();

        petal.style.fontSize = (Math.random() * 18 + 10) + "px";

        document.body.appendChild(petal);

        setTimeout(() => {
            petal.remove();
        }, 10000);
    }
}