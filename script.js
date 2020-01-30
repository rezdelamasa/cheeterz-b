let video = document.querySelector('video');
let button = document.querySelector('.video__button');
let wrapper = document.querySelector('.wrapper');
let story = document.querySelector('.story');
let video__mute = document.querySelector('.video__mute');
let video__button = document.querySelector('.video__button');

let features = document.querySelectorAll('.feature');

let heroButton = document.querySelector('.hero__button');
let heroButtonFixed = document.querySelector('.hero__button--fixed');

let played = false;

window.addEventListener('scroll', function() {
	if((window.innerHeight * .85) <= window.pageYOffset && played == false) {
		played = true;
		video.play();
	}
	features.forEach(function(feature, index) {
		let bottomScroll = window.pageYOffset + window.innerHeight;
		console.log((feature.offsetHeight / 2));
		if(feature.offsetTop + (feature.offsetHeight / 1.75) <= bottomScroll) {
			feature.classList.add('fade');
		}
	})

	if(heroButton.offsetTop <= window.pageYOffset) {
		console.log('button at top');
		if(!heroButton.classList.contains('fade-out')) {
			heroButton.classList.add('fade-out');
		}
	} else {
		heroButton.classList.remove('fade-out');
	}

	if(window.pageYOffset >= window.innerHeight	- (window.innerHeight * .10)) {
		heroButtonFixed.classList.add('fade-in');
	} else {
		heroButtonFixed.classList.remove('fade-in');
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