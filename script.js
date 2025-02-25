//your JS code here. If required.
const keys = document.querySelectorAll('.key');

function playSound(e) {
   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

	if(!audio) return;

	audio.currentTime = 0;
	audio.play();
}

window.addEventListener('keydown', playSound);