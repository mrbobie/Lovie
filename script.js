/* MUSIC PLAYER */

const audio = document.getElementById("loveSong");
const playBtn = document.getElementById("playBtn");
const progressBar = document.getElementById("progressBar");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");

function toggleMusic(){

    if(audio.paused){

        audio.play();
        playBtn.innerHTML = "❚❚";

    }else{

        audio.pause();
        playBtn.innerHTML = "▶";
    }
}

/* UPDATE PROGRESS */

audio.addEventListener("timeupdate",()=>{

    const progress =
    (audio.currentTime / audio.duration) * 100;

    progressBar.style.width = progress + "%";

    currentTimeEl.innerHTML =
    formatTime(audio.currentTime);

    durationEl.innerHTML =
    formatTime(audio.duration);
});

/* FORMAT TIME */

function formatTime(time){

    if(isNaN(time)) return "0:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}