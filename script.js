let audio1 = new Audio('audio/taa-pet.mp3');
let play = document.querySelector('.play');
let pause = document.querySelector('.pause');

play.addEventListener('click', () => {
    audio1.play();
    document.querySelector('.tool.play').classList.add("hidden");
    document.querySelector('.tool.pause').classList.remove("hidden");
    audio1.addEventListener('timeupdate', () => {
        document.querySelector('progress').setAttribute("value", audio1.currentTime);
        document.querySelector('progress').setAttribute("max", audio1.duration);
    })
});

pause.addEventListener('click', () => {
    document.querySelector('.tool.pause').classList.add("hidden");
    document.querySelector('.tool.play').classList.remove("hidden");
    audio1.pause();
});