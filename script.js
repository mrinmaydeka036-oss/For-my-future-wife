const envelope = document.getElementById("envelope");
const envelopePage = document.getElementById("envelopePage");
const letterPage = document.getElementById("letterPage");
const questionPage = document.getElementById("questionPage");
const videoPage = document.getElementById("videoPage");
const finalPage = document.getElementById("finalPage");

const flap = document.querySelector(".flap");
const seal = document.querySelector(".seal");
const preview = document.querySelector(".letterPreview");

const music = document.getElementById("bgMusic");
const typing = document.getElementById("typingText");
const continueBtn = document.getElementById("continueBtn");
const yesBtn = document.getElementById("yesBtn");
const video = document.getElementById("myVideo");

const letter = `If you're reading this,

Then maybe destiny finally smiled at us.

Every heartbeat,
every prayer,
every dream...

was slowly bringing me closer to you.

You are my peace,
my happiness,
my forever.

I promise to love you,
care for you,
and stay beside you forever.

❤️`;

let i = 0;

envelope.onclick = () => {

    seal.style.opacity = "0";

    flap.style.transform = "rotateX(180deg)";

    preview.style.opacity = "1";

    preview.style.transform = "translate(-50%,-140%)";

    music.currentTime = 0;
    music.play().catch(()=>{});

    setTimeout(() => {

        envelopePage.classList.remove("active");
        letterPage.classList.add("active");

        typeLetter();

    },1800);

};

function typeLetter(){

    if(i < letter.length){

        typing.innerHTML += letter.charAt(i);

        i++;

        setTimeout(typeLetter,45);

    }else{

        music.pause();
        music.currentTime = 0;

        continueBtn.style.display = "inline-block";

    }

               }
continueBtn.onclick = () => {

    letterPage.classList.remove("active");
    questionPage.classList.add("active");

};

yesBtn.onclick = () => {

    questionPage.classList.remove("active");
    videoPage.classList.add("active");

    video.currentTime = 0;

    video.play().catch(()=>{});

};

video.onended = () => {

    videoPage.classList.remove("active");
    finalPage.classList.add("active");

};
