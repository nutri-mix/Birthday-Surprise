window.bgMusic = document.getElementById("bgMusic");

const playlist = [
    "assets/music/song1.mp3",
    "assets/music/song2.mp3",
    "assets/music/song3.mp3",
    "assets/music/song4.mp3"
];

let currentSong = 0;

bgMusic.src = playlist[currentSong];

bgMusic.addEventListener("ended", () => {

    currentSong++;

    if(currentSong < playlist.length){

        bgMusic.src = playlist[currentSong];
        bgMusic.play();

    }

});