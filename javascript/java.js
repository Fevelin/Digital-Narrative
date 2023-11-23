// // how to position images making an arc in html and css

const button = document.getElementById("small-container");
var points = document.getElementsByClassName("point");
var myAudio = document.getElementById("myAudio");
var playPauseButton = document.getElementById("playPauseButton");





// Listen to button clicks using arrow function
/**
 * Calculate points positions making an arc calles everytime windows resize.
 */
const calculatePointsPositions = () => {

  const Total_Height = window.innerHeight;
  const TOTAL_WIDTH = window.innerWidth; // in px
    //get maximum left and maximum top for the image location
    const IMAGE_WIDTH = 7*TOTAL_WIDTH/100;
const MAX_LEFT = TOTAL_WIDTH - IMAGE_WIDTH;

  // manually position images
  points[0].style.left = 20*TOTAL_WIDTH/100 + "px";
  points[0].style.top = 60*Total_Height/100 + "px";

  points[1].style.left = 30 * TOTAL_WIDTH/100 + "px";
  points[1].style.top = 50*Total_Height/100 + "px";

  points[2].style.left = 40 * TOTAL_WIDTH/100 + "px";
  points[2].style.top = 20*Total_Height/100 + "px";

  points[3].style.left = 50 * TOTAL_WIDTH/100 + "px";
  points[3].style.top = 20*Total_Height/100 + "px";

  points[4].style.left = 60 * TOTAL_WIDTH/100 + "px";
  points[4].style.top = 50*Total_Height/100 + "px";

  points[5].style.left = 70 * TOTAL_WIDTH/100 + "px";
  points[5].style.top = 60*Total_Height/100 + "px";
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
