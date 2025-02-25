function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  
  if (!audio) return; // Stop the function if no audio element associated with the key
  
  key.classList.add('playing'); // Add a class to the key
  audio.currentTime = 0; // Rewind to the start
  audio.play();
}

// Remove the 'playing' class after a delay
function removeTransition(e) {
  if (e.propertyName !== 'transform') return; // Skip it if it's not a transform
  this.classList.remove('playing');
}

keys.forEach(key => key.addEventListener('transitionend', removeTransition));