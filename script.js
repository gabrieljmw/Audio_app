/*TODO: fix audio counter to display normally(implement)
        fix bug where play button appears on like index item
        fix bug where play button disappears on main click*/

let audioList = {
    audio1: new Audio('audio/taa-pet.mp3'),
    audio2: new Audio('audio/jazz-club.mp3'),
    audio3: new Audio('audio/comfort-fit.mp3'),
    audio4: new Audio('audio/nobara.mp3'),
    audio5: new Audio('audio/paper-navy.mp3')
};

let audioListLen = Object.keys(audioList).length;
let playable = document.querySelectorAll('.fas.play');

playable.forEach((item) => {
    item.addEventListener('click', () => {
        for (let i = 0; i < audioListLen; ++i) {
            if (item.getAttribute('data-audio') == Object.keys(audioList)[i]) {
                item.classList.add('hidden');
                document.querySelector('.tool.play').classList.add('hidden');
                document.querySelector(`.fas.pause[data-audio="${Object.keys(audioList)[i]}"]`).classList.remove('hidden');
                document.querySelector(`.tool.pause`).classList.remove('hidden')
                Object.values(audioList)[i].play();
            }
        }
    })
})

let pauseable = document.querySelectorAll('.fas.pause');

pauseable.forEach((item) => {
    item.addEventListener('click', () => {
        for (let i = 0; i < audioListLen; ++i) {
            if (item.getAttribute('data-audio') == Object.keys(audioList)[i]) {
                item.classList.add('hidden');
                document.querySelector(`.tool.play[data-audio="${Object.keys(audioList)[i]}"]`).classList.remove('hidden');
                document.querySelector(`.tool.pause`).classList.add('hidden');
                document.querySelector(`.tool.play`).classList.remove('hidden');
                Object.values(audioList)[i].pause();
            }
        }
    })
})

// this test does work
// let audio1 = new Audio('audio/taa-pet.mp3');

// let play = document.querySelector('.play');
// let pause = document.querySelector('.pause');

// play.addEventListener('click', () => {
//     audio1.play();
//     let playIcon = document.querySelector('.tool.play');
//     let pauseIcon = document.querySelector('.tool.pause');
//     playIcon.classList.add("hidden");
//     pauseIcon.classList.remove("hidden");
//     audio1.addEventListener('timeupdate', () => {
//         let progress = document.querySelector('progress');
//         progress.setAttribute("value", audio1.currentTime);
//         progress.setAttribute("max", audio1.duration);
//         let currentTimeVal = document.querySelector('.progress-text .currentTime');
//         let maxDuration = document.querySelector('.progress-text .duration');
//         let s = (audio1.currentTime % 60);
//         let m = (audio1.currentTime / 60);
//         let durationVal = Math.floor(audio1.duration / 60) + ":" + Math.ceil(audio1.duration % 60);
//         currentTimeVal.innerHTML = `${Math.floor(m)}:${Math.ceil(s)}`;
//         maxDuration.innerHTML = durationVal;

//     })
// });