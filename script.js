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
const songs = ['hey','summer','ukulele','leave the door open','one call away','peaches','sunflower','teach me how to love'];

//keep track of song or index
let songIndex = songs.length-1;
//initial load song
load_song(songs[songIndex]);

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
 
 audio.play();
}
function pauseSong(){
  musicContainer.classList.remove('play');
   play.querySelector('i.fas').classList.add("fa-play");
   play.querySelector('i.fas').classList.remove("fa-pause");
 

 audio.pause();
}
function pressSpace(e){
	if(e.keyCode===32){
		audio.pause();
	}
	else{
		audio.play();
	}
}
function prevSong(e)
{    if(e.keyCode===37)
	{
	songIndex--;
   }
   else{
   	songIndex--;
	if(songIndex< 0){
		songIndex=songs.length-1;
	}
   }
	
	load_song(songs[songIndex]);
	playSong();
}

function nextSong(e){
	if(e.keyCode==38){
		songIndex++;
	}
	else{
		songIndex++;
	if(songIndex > songs.length-1){
		songIndex=0;
	}
	}
	

	load_song(songs[songIndex]);
	playSong();
}



function updateProgress(e){
	const {duration, currentTime} =e.srcElement;
	const progressPercentage =  (currentTime/duration)*100;
	progress.style.width=`${progressPercentage}%`;
}

function setProgress(e){
	const width= this.clientWidth;
	const clickX = e.offsetX;
	const duration = audio.duration;

	audio.currentTime =(clickX / width)* duration;
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


//change song bac
prev.addEventListener('click',prevSong)
next.addEventListener('click',nextSong)
audio.addEventListener('timeupdate',updateProgress)
play.addEventListener('keydown',pressSpace)
// prev.addEventListener('keydown',prevSong)
// next.addEventListener('keydown',nextsong);
progressContainer.addEventListener('click',setProgress);
audio.addEventListener('ended',nextSong);
