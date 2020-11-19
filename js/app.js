//import of songs array and DOM cache
import {
  songsArr
} from '/js/songs.js'
import {
  // coverEl,
  songsCounterEl,
  // playButtonLeftEl,
  rightPanel,
  // progressBarPercentage,
  // progressBar
} from '/js/dom.js'

// Left panel

songsCounterEl.innerHTML = `${songsArr.length} songs`;

// Song module constructor

const playModuleEl = document.createElement("div");
const playButtonRight = document.createElement("div");
const audioEl = document.createElement("audio");
const titleAreaEl = document.createElement("div");
const titleContentEl = document.createElement("div");
const titleAlbumEl = document.createElement("p");
const titleSongEl = document.createElement("p");
const songDurationEl = document.createElement("div");

/* 

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

*/

function Module(songId) {

  this.playModuleRender = function () {

    playModuleEl.classList.add("play__module__content");
    playModuleEl.setAttribute("id", `playmodule${songId}`);
    playButtonRight.classList.add("play__button__right");
    playButtonRight.setAttribute("id", `playbuttonright${songId}`)
    audioEl.setAttribute("src", `${songId}`)
    titleAreaEl.classList.add("title__area");
    titleContentEl.classList.add("title__content");
    titleAlbumEl.classList.add("title__album");
    titleSongEl.classList.add("title__song");
    songDurationEl.classList.add("song__duration");

    rightPanel.appendChild(playModuleEl);
    playModuleEl.appendChild(playButtonRight);
    playButtonRight.appendChild(audioEl);
    playModuleEl.appendChild(titleAreaEl);
    titleAreaEl.appendChild(titleContentEl);
    titleContentEl.appendChild(titleAlbumEl);
    titleContentEl.appendChild(titleSongEl);
    playModuleEl.appendChild(songDurationEl);

    playButtonRight.innerHTML = "&#9658;";
    titleAlbumEl.innerHTML = `${songsArr[songId]["title"]}`
    titleSongEl.innerHTML = `${songsArr[songId]["artist"]}`
    songDurationEl.innerHTML = `${songsArr[songId]["time"]}`

  }
}

Module.prototype.chosen = () => {}
Module.prototype.play = () => {}

// Playlist (Song modules) generator

let playlistArr = []
let playlistHTML = ''

for (let i = 0; i < songsArr.length; i++) {
  let module = new Module(i);
  module.playModuleRender();
}

// rightPanel.innerHTML = `${playlistHTML}`

// playlistArr[0].playModuleRender();