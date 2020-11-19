export {
    coverEl,
    songsCounterEl,
    playButtonLeftEl,
    rightPanel,
    progressBarPercentage,
    progressBar
}

// caching the DOM LEFT

const coverEl = document.querySelector(".cover__image");
const songsCounterEl = document.querySelector(".songs__counter");
const playButtonLeftEl = document.querySelector(".play__button");

// caching the DOM RIGHT

const rightPanel = document.querySelector(".right__panel");
/* const playModule = document.querySelector(".play_module");
const titleAlbumEl = document.querySelector(".title__album");
const titleSongEl = document.querySelector(".title__song");
const songDuration = document.querySelector(".song__duration"); */

// caching the DOM PROGRESS BAR

const progressBarPercentage = document.querySelector(".progress__bar__percentage");
const progressBar = document.querySelector(".progress__bar");