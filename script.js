let video = document.querySelector('video');
let button = document.querySelector('.video__button');
let wrapper = document.querySelector('.wrapper');
let story = document.querySelector('.story');
let video__mute = document.querySelector('.video__mute');
let video__button = document.querySelector('.video__button');

let played = false;

window.addEventListener('scroll', function() {
	console.log(window.innerHeight * .85);
	console.log(story.offsetTop);
	if((window.innerHeight * .85) <= window.pageYOffset && played == false) {
		played = true;
		video.play();

	}
})

video.addEventListener('click', function() {
	if(video.paused) {
		video.play();
	}
	if(video.muted) {
		video__button.style.opacity = 0.5;
		video__mute.style.opacity = 0;
	} else {
		video__button.style.opacity = 0;
		video__mute.style.opacity = 0.5;
	}
	video.muted = !video.muted;

})

video__button.addEventListener('click', function() {
	video.muted = true;
	video__button.style.opacity = 0;
	video__mute.style.opacity = 0.5;
})