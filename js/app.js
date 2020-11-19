import {songsArr} from '/js/songs.js'

// caching the DOM

const coverEl = document.querySelector(".cover__image");
const songsCounterEl = document.querySelector(".songs__counter");
const playButtonLeftEl = document.querySelector(".play__button");
const titleAlbumEl = document.querySelector(".title__album");
const titleSongEl = document.querySelector(".title__song");
const songDuration = document.querySelector(".song__duration");
const rightPanel = document.querySelector(".right__panel");
const progressBarPercentage = document.querySelector(".progress__bar__percentage");
const progressBar = document.querySelector(".progress__bar");

// Objects and methods

songsCounterEl.innerHTML = `${songsArr.length} songs`;

// GENERATING PLAYER MODULE

const createModule = (playModule, song) => {

  playModule.innerHTML = `
<div class="play__module__content">
  <div class="play__button__right">
      &#9658;
      <audio src="${song["url"]}"></audio>
  </div>
  <div class="title__area">
    <div class="title__content">
      <p class="title__album">${song["title"]}</p>
      <p class="title__song">${song["artist"]}</p>
    </div>
  </div>
  <div class="song__duration">${song["time"]}</div>
</div>`
}


// GENERATING PLAYLIST

const renderPlaylistModule = () => {

  for (let elem of song) {
    rightPanel.innerHTML += `<div class="play__module" id="play__module__${elem["id"]}">    </div>`
    let playModule = document.querySelector(`#play__module__${elem["id"]}`);
    createModule(playModule, elem);
  }
}

renderPlaylistModule();

const playButtonRightEl = document.querySelector(".play__button__right");
const playButtons = document.querySelectorAll(".play__button__right");
// const playModule = document.querySelectorAll(".play__module");



// PLAY ACTION
let chosenSong;
let timerInterval;

const play = () => {

  for (let elem of playButtons) {
    
/*     let playModule = elem.parentElement.parentElement;
    console.log(playModule);

    playModule.addEventListener("mouseover", function() {
      playModule.classList.toggle("playmodulemouseoverbackground");
    })    
    playModule.addEventListener("mouseout", function() {
      playModule.classList.toggle("playmodulemouseoverbackground");
    })   
    playModule.addEventListener("click", function() {
      console.log("clicked");
    }) */

    let audioEl = elem.firstElementChild;
    progressBarPercentage.style.width = `0px`;
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

play();

