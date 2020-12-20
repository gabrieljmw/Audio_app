//TODO: fix audio counter to display normally

let audio1 = new Audio('audio/taa-pet.mp3');
let play = document.querySelector('.play');
let pause = document.querySelector('.pause');

play.addEventListener('click', () => {
    audio1.play();
    let playIcon = document.querySelector('.tool.play');
    let pauseIcon = document.querySelector('.tool.pause');
    playIcon.classList.add("hidden");
    pauseIcon.classList.remove("hidden");
    audio1.addEventListener('timeupdate', () => {
        let progress = document.querySelector('progress');
        progress.setAttribute("value", audio1.currentTime);
        progress.setAttribute("max", audio1.duration);
        let currentTimeVal = document.querySelector('.progress-text .currentTime');
        let maxDuration = document.querySelector('.progress-text .duration');
        let s = (audio1.currentTime % 60);
        let m = (audio1.currentTime / 60);
        let durationVal = Math.floor(audio1.duration / 60) + ":" + Math.ceil(audio1.duration % 60);
        currentTimeVal.innerHTML = `${Math.floor(m)}:${Math.ceil(s)}`;
        maxDuration.innerHTML = durationVal;

    })
});

pause.addEventListener('click', () => {
    document.querySelector('.tool.pause').classList.add("hidden");
    document.querySelector('.tool.play').classList.remove("hidden");
    audio1.pause();
});