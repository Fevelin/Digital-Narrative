// Listen to button clicks using arrow function
function togglePlay() {
    if (myAudio.paused) {
      myAudio.play();
      playPauseButton.textContent = "Pause";
    } else {
      myAudio.pause();
      playPauseButton.textContent = "Play";
    }
   };
   
   playPauseButton.addEventListener('click', togglePlay);
   