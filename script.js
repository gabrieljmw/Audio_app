/*TODO: fix audio counter to display normally(implement) - COMPLETE
        fix bug where play button appears on similarly indexed item
        fix bug where play button disappears on main click
        fix bug where if song is already playing, shuffle will overlap it
        clean up html classes to reduce error
        implement prev and next buttons functionality
        implement title, artist, and image change on click
        */

window.addEventListener('load', function() {

    let audioList = {
        audio1: new Audio('audio/taa-pet.mp3'),
        audio2: new Audio('audio/jazz-club.mp3'),
        audio3: new Audio('audio/comfort-fit.mp3'),
        audio4: new Audio('audio/nobara.mp3'),
        audio5: new Audio('audio/paper-navy.mp3')
    };

    var wavesurfer = WaveSurfer.create({
        container: '#waveform',
        waveColor: '#b1b1b1',
        progressColor: '#e1e1e1'
    });

    let audioListLen = Object.keys(audioList).length;
    let playable = document.querySelectorAll('.fas.play');

    function audioSlider(audioCurrent) {
        audioCurrent.addEventListener('timeupdate', () => {
            let progress = document.querySelector('progress');
            progress.setAttribute("value", audioCurrent.currentTime);
            progress.setAttribute("max", audioCurrent.duration);
            let currentTimeVal = document.querySelector('.progress-text .currentTime');
            let maxDuration = document.querySelector('.progress-text .duration');
            let s = (audioCurrent.currentTime % 60);
            let m = (audioCurrent.currentTime / 60);
            let durationVal = Math.floor(audioCurrent.duration / 60) + ":" + Math.ceil(audioCurrent.duration % 60);
            currentTimeVal.innerHTML = `${Math.floor(m)}:${Math.ceil(s)}`;
            maxDuration.innerHTML = durationVal;

        })
    }

    playable.forEach((item) => {
        item.addEventListener('click', () => {
            for (let i = 0; i < audioListLen; ++i) {
                if (item.getAttribute('data-audio') == Object.keys(audioList)[i]) {
                    item.classList.add('hidden');
                    document.querySelector('.tool.play').classList.add('hidden');
                    document.querySelector(`.fas.pause[data-audio="${Object.keys(audioList)[i]}"]`).classList.remove('hidden');
                    document.querySelector(`.tool.pause`).classList.remove('hidden')
                    Object.values(audioList)[i].play();
                    wavesurfer.load(Object.values(audioList)[i].src);
                    wavesurfer.on('ready', function() {
                        wavesurfer.play();
                        wavesurfer.toggleMute();
                    });
                    audioSlider(Object.values(audioList)[i]);
                }
            }

        });

    })

    let pauseable = document.querySelectorAll('.fas.pause');

    pauseable.forEach((item) => {
        item.addEventListener('click', () => {
            for (let i = 0; i < audioListLen; ++i) {
                if (item.getAttribute('data-audio') == Object.keys(audioList)[i]) {
                    item.classList.add('hidden');
                    document.querySelector(`.tool.play`).classList.remove('hidden');
                    document.querySelector(`.tool.play[data-audio="${Object.keys(audioList)[i]}"]`).classList.remove('hidden');
                    document.querySelector(`.tool.pause`).classList.add('hidden');
                    wavesurfer.load(Object.values(audioList)[i].src);
                    wavesurfer.on('ready', function() {
                        wavesurfer.pause();
                    });
                    Object.values(audioList)[i].pause();
                }
            }
        })
    })

    let isPlaying = false;
    let storedVal;

    let shuffle = document.querySelector('button.shuffle');
    shuffle.addEventListener('click', () => {
        shuffle.style.color = "blue";
        if (isPlaying == false) {
            let r = Math.floor(Math.random() * 5) + 1;
            storedVal = r;
            wavesurfer.load(Object.values(audioList)[r].src);
            wavesurfer.on('ready', function() {
                wavesurfer.play();
                wavesurfer.toggleMute();
            });
            Object.values(audioList)[r].play();
            audioSlider(Object.values(audioList)[r]);
            isPlaying = true;
        } else {
            location.reload(); //temp cheat
        }
    });

    let like = document.querySelector('i.far.fa-heart');
    like.addEventListener('click', () => {
        const styles = {
            color: 'red',
            fontWeight: '600'
        };
        Object.assign(like.style, styles);
    });
})

// initial slider test
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