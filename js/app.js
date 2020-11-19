//import of songs array and DOM cache
import {
  songsArr
} from '/js/songs.js'
import {
  // coverEl,
  songsCounterEl,
  playButtonLeftEl,
  rightPanel,
  progressBarPercentage,
  // progressBar
} from '/js/dom.js'

// Left panel

songsCounterEl.innerHTML = `${songsArr.length} songs`;

// Song module constructor

function Module() {

  this.playModuleEl = document.createElement("div");
  this.audioEl = document.createElement("audio");
  this.timerInterval;

  this.playModuleRender = function (songId) {

    let playButtonRight = document.createElement("div");
    let titleAreaEl = document.createElement("div");
    let titleContentEl = document.createElement("div");
    let titleAlbumEl = document.createElement("p");
    let titleSongEl = document.createElement("p");
    let songDurationEl = document.createElement("div");

    this.playModuleEl.classList.add("play__module__content");
    this.playModuleEl.setAttribute("id", `playmodule${songId}`);
    playButtonRight.classList.add("play__button__right");
    playButtonRight.setAttribute("id", `playbuttonright${songId}`)
    this.audioEl.setAttribute("src", `${songsArr[songId]["url"]}`)
    titleAreaEl.classList.add("title__area");
    titleContentEl.classList.add("title__content");
    titleAlbumEl.classList.add("title__album");
    titleSongEl.classList.add("title__song");
    songDurationEl.classList.add("song__duration");

    rightPanel.appendChild(this.playModuleEl);
    this.playModuleEl.appendChild(playButtonRight);
    playButtonRight.innerHTML = "&#9658;";
    playButtonRight.appendChild(this.audioEl);

    this.playModuleEl.appendChild(titleAreaEl);
    titleAreaEl.appendChild(titleContentEl);
    titleContentEl.appendChild(titleAlbumEl);
    titleContentEl.appendChild(titleSongEl);
    this.playModuleEl.appendChild(songDurationEl);

    titleAlbumEl.innerHTML = `${songsArr[songId]["title"]}`
    titleSongEl.innerHTML = `${songsArr[songId]["artist"]}`
    songDurationEl.innerHTML = `${songsArr[songId]["time"]}`
  };

  this.chosen = false;

  this.play = function (audioArg, timerArg) {
    this.playModuleEl.addEventListener("click",
      function () {
        if (audioArg.paused) {
          audioArg.play()
          timerArg = setInterval(function () {
            progressBarPercentage.style.width = `${audioArg.currentTime / audioArg.duration * 100}%`;
          }, 50);
        } else {
          audioArg.pause();
          clearInterval(timerArg);
        }
      }
    )
  }
}

// Playlist (Song modules) generator

for (let i = 0; i < songsArr.length; i++) {
  let module = new Module();
  module.playModuleRender(i);
  module.play(module.audioEl, module.timerInterval);
}

playButtonLeftEl.addEventListener("click", function() {
  
})