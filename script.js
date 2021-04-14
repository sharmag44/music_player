// jshint es6

const musicContainer= document.querySelector('.music-container');
const play = document.querySelector('#play');
const prev  = document.querySelector('#prev');
const next  = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progressContainer  = document.querySelector('.progress-container');
const progress = document.querySelector('.progress');
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');

//songs arry
const songs = ['hey','summer','ukulele'];

//keep track of song or index
let songIndex = 2;
//initial load song
load_song()

// update song
function load_song(song){
	title.innerText = song;
	audio.src = "music/"+song+".mp3";
	cover.src = "images/"+song+".jpg";
}

function playSong(){
 musicContainer.classList.add('play');
 play.querySelector('i.fas').classList.remove("fa-play");
 play.querySelector('i.fas').classList.add("fa-pause");
}
function pauseSong(){
  musicContainer.classList.remove('play');
  lay.querySelector('i.fas').classList.remove("fa-pause");
  play.querySelector('i.fas').classList.add("fa-play");
}


//Events listeners
play.addEventListener('click',function(){
	const isPlaying = musicContainer.classList.contains("play");

	if(isPlaying){
		pauseSong();
	}
	else{
		playSong();
	}
})




