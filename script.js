// ===== Create Stars =====

const stars = document.getElementById("stars");

for (let i = 0; i < 300; i++) {

    const star = document.createElement("span");

    star.className = "star";

    const size = Math.random() * 3 + 1;

    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.animationDelay = Math.random() * 5 + "s";
    star.style.animationDuration = (2 + Math.random() * 4) + "s";

    stars.appendChild(star);
}
// ===== Sparkles =====

const sparkles = document.getElementById("sparkles");

for (let i = 0; i < 60; i++) {

    const s = document.createElement("span");

    s.className = "sparkle";

    const size = Math.random() * 4 + 2;

    s.style.width = size + "px";
    s.style.height = size + "px";

    s.style.left = Math.random() * 100 + "%";
    s.style.top = Math.random() * 100 + "%";

    s.style.animationDelay = Math.random() * 6 + "s";

    sparkles.appendChild(s);

}
// ===== Shooting Stars =====

const galaxy = document.getElementById("galaxy");

function createMeteor() {

    const meteor = document.createElement("span");

    meteor.className = "meteor";

    meteor.style.top = Math.random() * 35 + "%";
    meteor.style.left = (60 + Math.random() * 35) + "%";

    meteor.style.animationDuration = (1.2 + Math.random()).toFixed(1) + "s";

    galaxy.appendChild(meteor);

    setTimeout(() => {
        meteor.remove();
    }, 2500);

}

setInterval(createMeteor, 1800);
/// ==============================
// START BUTTON
// ==============================

const startBtn = document.getElementById("startBtn");
const loader = document.getElementById("loader");
const app = document.getElementById("app");

startBtn.addEventListener("click", async () => {

    // Double click prevent
    startBtn.disabled = true;

    // Start first song
    try {
        await bgMusic.play();
    } catch (err) {
        console.log("Music couldn't autoplay:", err);
    }

    // Hide loader
    loader.classList.add("hide");

    // Show main app after animation
    setTimeout(() => {

        loader.style.display = "none";

        app.style.display = "block";

    }, 2000);

});
const continuePopup = document.getElementById("continuePopup");

const yesBtn = document.getElementById("yesBtn");

const veryYesBtn = document.getElementById("veryYesBtn");

// ===========================
// LOVE LETTER START
// ===========================

const letter = document.getElementById("loveLetter");

const message = `Dear Ananya ❤️,

From the day you came into my life,
everything became more beautiful.

Your smile makes every bad day better.

Your happiness is the reason
behind my biggest smile.

Thank you for being you.

Happy Birthday My Rasmalai 💙

I Love You Forever ❤️`;

function continueStory(){

    // Popup Hide
    continuePopup.style.display = "none";

    // Song 3 Start
    bgMusic.src = "assets/music/song3.mp3";

    bgMusic.play();

    // Show Love Letter
    letter.style.display = "flex";

    // Start Typing
    typeLetter();

}

// Buttons
yesBtn.addEventListener("click", continueStory);

veryYesBtn.addEventListener("click", continueStory);
// ===========================
// TYPEWRITER EFFECT
// ===========================

const typingText = document.getElementById("typingText");

let letterIndex = 0;

function typeLetter(){

    typingText.innerHTML = "";

    letterIndex = 0;

    const timer = setInterval(() => {

        typingText.innerHTML += message.charAt(letterIndex);

        letterIndex++;

        if(letterIndex >= message.length){

            clearInterval(timer);

            // Wait 3 seconds after typing ends
            setTimeout(showGiftScene, 3000);

        }

    },45);

}
// ===========================
// NEXT SCENE PLACEHOLDER
// ===========================
function showGiftScene(){

    letter.style.display = "none";

    document.getElementById("giftScene").style.display="flex";

}
const openGift=document.getElementById("openGift");

openGift.onclick=function(){

    document.getElementById("giftScene").style.display="none";

    // Cake Scene Next

    showCakeScene();

}
function showCakeScene(){

    bgMusic.src="assets/music/song4.mp3";
    bgMusic.currentTime=0;
    bgMusic.play();

    document.getElementById("cakeScene").style.display="flex";

}
const blowBtn = document.getElementById("blowBtn");

blowBtn.onclick=function(){

    document.getElementById("flame").style.display="none";

    blowBtn.disabled=true;

    blowBtn.innerHTML="Wish Made ❤️";

    document.getElementById("cakeMessage").innerHTML=
    "Time to cut the cake 🎂";

    setTimeout(showKnife,2000);

}
function showKnife(){

    const knife=document.getElementById("knife");

    knife.style.display="block";

    setTimeout(()=>{

        knife.style.left="130px";

    },100);

    knife.onclick=cutCake;

}
function cutCake(){

    document.getElementById("cakeImage").style.transform=
    "scale(.98) rotate(-2deg)";

    document.getElementById("knife").style.transform=
    "translate(140px,40px) rotate(20deg)";

    setTimeout(()=>{

        launchFireworks();

    },1800);

}
function launchFireworks(){

    document.getElementById("cakeScene").style.display="none";

    document.getElementById("fireworksScene").style.display="flex";

    startFireworks();

}
const canvas = document.getElementById("fireworksCanvas");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function startFireworks(){

    setInterval(function(){

        const x = Math.random()*canvas.width;

        const y = Math.random()*canvas.height/2;

        drawExplosion(x,y);

    },500);

}

function drawExplosion(x,y){

    for(let i=0;i<40;i++){

        ctx.beginPath();

        ctx.arc(

            x+(Math.random()-0.5)*150,

            y+(Math.random()-0.5)*150,

            3,

            0,

            Math.PI*2

        );

        ctx.fillStyle=`hsl(${Math.random()*360},100%,60%)`;

        ctx.fill();

    }

    setTimeout(()=>{

        ctx.clearRect(0,0,canvas.width,canvas.height);

    },400);

}
const replayBtn=document.getElementById("replayBtn");

replayBtn.onclick=function(){

    location.reload();

}