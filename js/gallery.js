// ===============================
// PHOTO GALLERY
// ===============================

const slide = document.getElementById("slideImage");
const slideshow = document.getElementById("slideshow");

// ---------- Song 1 Photos ----------

const song1Photos = [

"assets/photos/solo1.png",
"assets/photos/solo2.png",
"assets/photos/solo3.png",
"assets/photos/solo4.png",
"assets/photos/solo5.png",
"assets/photos/solo6.png",
"assets/photos/solo7.png",
"assets/photos/solo8.png",
"assets/photos/solo9.png",
"assets/photos/solo10.png",
"assets/photos/solo11.png",
"assets/photos/solo12.png",
"assets/photos/solo13.png",
"assets/photos/solo14.png",
"assets/photos/solo15.png",
"assets/photos/solo16.png",
"assets/photos/solo17.png",
"assets/photos/solo18.png",
"assets/photos/solo19.png",
"assets/photos/solo20.png"

];

// ---------- Song 2 Photos ----------

const song2Photos = [

"assets/couple/couple1.png",
"assets/couple/couple2.png",
"assets/couple/couple3.png",
"assets/couple/couple4.png",
"assets/couple/couple5.png",
"assets/couple/couple6.png",
"assets/couple/couple7.png",
"assets/couple/couple8.png",
"assets/couple/couple9.png",
"assets/couple/couple10.png",
"assets/couple/couple11.png",
"assets/couple/couple12.png",
"assets/couple/couple13.png",
"assets/couple/couple14.png",
"assets/couple/couple15.png"

];

// Preload

[...song1Photos, ...song2Photos].forEach(src => {

    const img = new Image();
    img.src = src;

});

let currentArray = song1Photos;

let currentIndex = 0;

function showPhoto(){

    slide.style.opacity = 0;

    setTimeout(()=>{

        slide.style.animation = "none";

        slide.src = currentArray[currentIndex];

        slide.onload = ()=>{

            slide.style.opacity = 1;

            void slide.offsetWidth;

            slide.style.animation = "kenBurns 2.4s ease forwards";

        };

        currentIndex++;

    },300);

}

showPhoto();

const galleryInterval = setInterval(()=>{

    // Song 1 finished

    if(currentArray === song1Photos &&
       currentIndex >= song1Photos.length){

        currentArray = song2Photos;

        currentIndex = 0;

    }

    // Song 2 finished

    else if(currentArray === song2Photos &&
            currentIndex >= song2Photos.length){

        clearInterval(galleryInterval);

       slideshow.style.display = "none";

bgMusic.pause();

document.getElementById("continuePopup").style.display = "flex";

        return;

    }

    showPhoto();

},2500);