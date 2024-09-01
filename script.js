console.log('Welcome to Spotify');
let songs = [
    { songname: "Butta Bomma", filename: "1.mpeg" },
    { songname: "Srivalli", filename: "2.mpeg" },
    { songname: "Samajavaragamana", filename: "3.mpeg" },
    { songname: "Ramulo Ramula", filename: "4.mpeg" },
    { songname: "Saami Saami", filename: "5.mpeg" },
    { songname: "Daako Daako Meka", filename: "6.mpeg" },
    { songname: "Oo Antava oo antava", filename: "7.mpeg" },
    { songname: "Eyy Bidda Idhi Naa Adda", filename: "8.mpeg" },
    { songname: "Siri Vennela", filename: "9.mpeg" }
]
let audioelement = new Audio("1.mpeg");
let songindex = 1;
let myprogressbar = document.getElementById('myprogressBar');
let masterplay = document.getElementById('masterplay');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('masterSongName');
const makeallplaysoff = () => {
    Array.from(document.getElementsByClassName('songitemplay')).forEach((e) => {
        e.classList.remove('fa-pause-circle');
        e.classList.add('fa-play-circle');
    })
}
masterplay.addEventListener('click', () => {
    if (audioelement.paused || audioelement.currentTime <= 0) {
        audioelement.play();
        abc = document.getElementById(songindex);
        abc.classList.remove('fa-play-circle');
        abc.classList.add('fa-pause-circle');
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
        console.log('spotify');
    }
    else {
        makeallplaysoff();
        audioelement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});
audioelement.addEventListener('timeupdate', () => {
    progress = parseInt((audioelement.currentTime / audioelement.duration) * 100);
    myprogressbar.value = progress;
});
myprogressbar.addEventListener('change', () => {
    audioelement.currentTime = (myprogressbar.value * audioelement.duration) / 100;
    console.log('spotify');
});
Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('click', (e) => {

        songindex = parseInt(e.target.id);
        audioelement.src = `${songindex}.mpeg`;
        mastersongname.innerText = songs[songindex - 1].songname;
        audioelement.currentTime = 0;
            makeallplaysoff();
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioelement.play();
            gif.style.opacity = 1;
            masterplay.classList.remove('fa-play-circle');
            masterplay.classList.add('fa-pause-circle');
    })
});
document.getElementById('next').addEventListener('click', () => {
    if (songindex >= 9) {
        songindex = 0;
    }
    else {
        songindex += 1;
    }
    makeallplaysoff();
    audioelement.src = `${songindex}.mpeg`;
    audioelement.currentTime = 0;
    abc = document.getElementById(songindex);
    abc.classList.remove('fa-play-circle');
    abc.classList.add('fa-pause-circle');
    mastersongname.innerText = songs[songindex - 1].songname;
    audioelement.play();
    gif.style.opacity = 1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click', () => {
    if (songindex <= 1) {
        songindex = 1;
    }
    else {
        songindex -= 1;
    }
    makeallplaysoff();
    audioelement.src = `${songindex}.mpeg`;
    audioelement.currentTime = 0;
    abc = document.getElementById(songindex);
    abc.classList.remove('fa-play-circle');
    abc.classList.add('fa-pause-circle');
    console.log('runn');
    mastersongname.innerText = songs[songindex - 1].songname;
    audioelement.play();
    gif.style.opacity = 1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})