const mainVideo = document.getElementById('background__video');
const videoButton = document.querySelector('.videoButton');
const buttonIcon = document.querySelector('.fa-solid');

document.getElementById('background__video').playbackRate = 0.55;
document.getElementById('background__video').play();

function buttonFunction() {
	if (mainVideo.paused) {
		mainVideo.play();
		buttonIcon.classList.add('fa-pause');
		buttonIcon.classList.remove('fa-play');
	} else {
		mainVideo.pause();
		buttonIcon.classList.remove('fa-pause');
		buttonIcon.classList.add('fa-play');
	}
}
videoButton.addEventListener('click', buttonFunction);