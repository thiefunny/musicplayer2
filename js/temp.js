//import of songs array and DOM cache
import {
  songsArr
} from '/js/songs.js'
import {
  coverEl,
  songsCounterEl,
  playButtonLeftEl,
  rightPanel,
  progressBarPercentage,
  progressBar
} from '/js/dom.js'

// Left panel   ssdf

songsCounterEl.innerHTML = `${songsArr.length} songs`;

// Song module constructor

function Module(songId) {
  
  this.html = `
  <div class="play__module__content" id="playmodule${songId}">
  <div class="play__button__right" id="playbuttonright${songId}">
      &#9658;
      <audio src="${songsArr[songId]["url"]}"></audio>
  </div>
  <div class="title__area">
    <div class="title__content">
      <p class="title__album">${songsArr[songId]["title"]}</p>
      <p class="title__song">${songsArr[songId]["artist"]}</p>
    </div>
  </div>
  <div class="song__duration">${songsArr[songId]["time"]}</div>
</div>
  `
}

Module.prototype.chosen = () => {}
Module.prototype.play = () => {}

// Playlist (Song modules) generator

let playlistArr = []
let playlistHTML = ''

for (let i = 0; i < songsArr.length; i++) {
  let module = new Module(i);
  playlistArr.push(module);
  playlistHTML += module["html"];
}

rightPanel.innerHTML = `${playlistHTML}`

// PLAY ACTION

for (let elem of playlistArr) {
  console.log(elem.playbuttonrightEl);

  // elem.playbuttonrightEl.addEventListener("mouseover", function() {console.log(elem)})
}

// const playButtonRightEl = document.querySelector(".play__button__right");
// const playButtons = document.querySelectorAll(".play__button__right");

// let chosenSong;
// let timerInterval;

// const playButtonsArr = []
// const play = (elem) => {
//   let audioEl = elem.firstElementChild;
//   if (audioEl.paused) {
//     audioEl.play();
//     // timerInterval = setInterval(function () {
//     // progressBarPercentage.style.width = `${audioEl.currentTime / audioEl.duration * 100}%`;
//     // }, 10);

//   } else {
//     audioEl.pause();
//     // clearInterval(timerInterval);
//   }
// }
/* 
const playbuttons = () => {

  for (let elem of playButtons) {
    playButtonsArr.push(elem);
    elem.addEventListener("click",

      function () {

        let audioEl = elem.firstElementChild;
        if (audioEl.paused) {
          audioEl.play();
          timerInterval = setInterval(function () {
            progressBarPercentage.style.width = `${audioEl.currentTime / audioEl.duration * 100}%`;
          }, 10);

        } else {
          audioEl.pause();
          clearInterval(timerInterval);
        }
      })
  }
}

playbuttons(); */

//   let audioEl = elem.firstElementChild;
//   progressBarPercentage.style.width = `songId`;
//   elem.addEventListener("click", function () {

//     if (audioEl.paused) {
//       audioEl.play();
//       timerInterval = setInterval(function () {
//         progressBarPercentage.style.width = `${audioEl.currentTime / audioEl.duration * 100}%`;
//       }, 10);

//     } else {
//       audioEl.pause();
//       clearInterval(timerInterval);
//     }
//   })

//   playButtonLeftEl.addEventListener("click", function () {

//     if (audioEl.paused) {
//       audioEl.play();
//       timerInterval = setInterval(function () {
//         progressBarPercentage.style.width = `${audioEl.currentTime / audioEl.duration * 100}%`;
//       }, 10);

//     } else {
//       audioEl.pause();
//       clearInterval(timerInterval);
//     }
//   })



// }





/* // PLAY ACTION

// const playButtonRightEl = document.querySelector(".play__button__right");
const playButtons = document.querySelectorAll(".play__button__right");

// let chosenSong;
let timerInterval;

const play = () => {

  for (let elem of playButtons) {


    let audioEl = elem.firstElementChild;
    progressBarPercentage.style.width = `songId`;
    elem.addEventListener("click", function () {

      if (audioEl.paused) {
        audioEl.play();
        timerInterval = setInterval(function () {
          progressBarPercentage.style.width = `${audioEl.currentTime / audioEl.duration * 100}%`;
        }, 10);

      } else {
        audioEl.pause();
        clearInterval(timerInterval);
      }
    })

    playButtonLeftEl.addEventListener("click", function () {

      if (audioEl.paused) {
        audioEl.play();
        timerInterval = setInterval(function () {
          progressBarPercentage.style.width = `${audioEl.currentTime / audioEl.duration * 100}%`;
        }, 10);

      } else {
        audioEl.pause();
        clearInterval(timerInterval);
      }
    })



  }
}

play(); */