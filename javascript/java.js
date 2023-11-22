// // how to position images making an arc in html and css

const button = document.getElementById("small-container");
var points = document.getElementsByClassName("point");
var myAudio = document.getElementById("myAudio");
var playPauseButton = document.getElementById("playPauseButton");

const TOTAL_WIDTH = window.innerWidth; // in px
const IMAGE_WIDTH = 360; // width in px


  //get maximum left and maximum top for the image location
const MAX_LEFT = TOTAL_WIDTH - IMAGE_WIDTH;


// Listen to button clicks using arrow function
/**
 * Calculate points positions making an arc
 */
const calculatePointsPositions = () => {

  // manually position images
  points[0].style.left = 0 + "px";
  points[0].style.top = 900 + "px";

  points[1].style.left = 1 / 5 * MAX_LEFT + "px";
  points[1].style.top = 500 + "px";

  points[2].style.left = 2 / 5 * MAX_LEFT + "px";
  points[2].style.top = 300 + "px";

  points[3].style.left = 3 / 5 * MAX_LEFT + "px";
  points[3].style.top = 300 + "px";

  points[4].style.left = 4 / 5 * MAX_LEFT + "px";
  points[4].style.top = 500 + "px";

  points[5].style.left = MAX_LEFT + "px";
  points[5].style.top = 900 + "px";
}

// calculate points positions at init
calculatePointsPositions();

// recalculate at each resize of the window so that page is responsive
window.onresize = () => {
  calculatePointsPositions();
}

window.addEventListener('resize', calculatePointsPositions);

 
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
