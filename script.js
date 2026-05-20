const countdown = document.getElementById("countdown");
const lockScreen = document.getElementById("lockScreen");
const mainContent = document.getElementById("mainContent");
const openLetterBtn = document.getElementById("openLetterBtn");
const letterModal = document.getElementById("letterModal");
const closeLetter = document.getElementById("closeLetter");
const typingText = document.getElementById("typingText");
const music = document.getElementById("bgMusic");
const enterButton = document.getElementById("enterButton");


// ✨ FECHA DEL CUMPLE
const targetDate = new Date("May 21, 2026 00:00:00").getTime();


// 🔒 BOTÓN BLOQUEADO AL INICIO
enterButton.disabled = true;


// COUNTDOWN
const interval = setInterval(() => {

    const now = new Date().getTime();
    const distance = targetDate - now;

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    countdown.innerHTML =
        `${String(hours).padStart(2, '0')}:`
        + `${String(minutes).padStart(2, '0')}:`
        + `${String(seconds).padStart(2, '0')}`;


    // ✨ CUANDO LLEGA A MEDIANOCHE
    if(distance <= 0){

        clearInterval(interval);

        countdown.innerHTML = "00:00:00";

        document.querySelector(".countdownBox h1").innerHTML =
        "El Salón está abierto ✨";

        // 🔓 DESBLOQUEAR BOTÓN
        enterButton.disabled = false;

        enterButton.innerHTML =
        "Entrar al Salón 🎻";

    }

}, 1000);




// ✨ ENTRAR A LA EXPERIENCIA
enterButton.addEventListener("click", () => {

    // 🚫 SI SIGUE BLOQUEADO NO HACE NADA
    if(enterButton.disabled) return;


    // 🎼 MÚSICA CON FADE
    music.volume = 0;

    music.play();

    let vol = 0;

    const fade = setInterval(() => {

        if(vol < 0.4){

            vol += 0.02;

            music.volume = vol;

        }else{

            clearInterval(fade);

        }

    }, 200);


    // ✨ CAMBIO DE PANTALLA
    lockScreen.classList.add("hidden");

    mainContent.classList.remove("hidden");

});




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

Feliz cumpleaños, Lady Gene ✨

Con la más alta admiración,

Aleskai Gethsemane
`;




// ✨ ABRIR CARTA
openLetterBtn.addEventListener("click", () => {

    letterModal.style.display = "flex";

    createPetals();

    typeWriter();

});




// ✨ CERRAR CARTA
closeLetter.addEventListener("click", () => {

    letterModal.style.display = "none";

});


window.addEventListener("click", (e) => {

    if(e.target === letterModal){

        letterModal.style.display = "none";

    }

});




// ✨ TYPEWRITER
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




// ✨ PETALS
function createPetals(){

    for(let i = 0; i < 80; i++){

        const petal = document.createElement("div");

        petal.classList.add("petal");

        petal.innerHTML =
        Math.random() > .5 ? "🌸" : "🌺";

        petal.style.left =
        Math.random() * 100 + "vw";

        petal.style.animationDuration =
        (Math.random() * 5 + 5) + "s";

        petal.style.opacity =
        Math.random();

        petal.style.fontSize =
        (Math.random() * 18 + 10) + "px";

        document.body.appendChild(petal);

        setTimeout(() => {

            petal.remove();

        }, 10000);

    }

}