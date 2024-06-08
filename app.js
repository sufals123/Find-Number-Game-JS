const circleContainer = document.querySelector('.circlContner');
const getTime = document.querySelector('.timeFunction');
const getHitNumber =document.querySelector('.hitNum');
const getScoreNum = document.querySelector('.scoreNu');

console.log(getScoreNum);


//Display a circle container with the specified numeric and color values

function displayCircle(){
  for (let i = 1; i <= 189; i++) {
    const rs = Math.floor(Math.random() * 10);
    circleContainer.innerHTML += `<div class="circel" >${rs}</div>`;
    const circles = document.querySelectorAll(".circel");
  
    circles.forEach((e) => {
      let color = ["red", "green", "blue", 'black'];
      const col = Math.floor(Math.random() * color.length);
      e.style.backgroundColor = color[col];
    });
  }
}


function updateCircles() {
  const circles = document.querySelectorAll('.circel');
  circles.forEach(circle => {
    const newNumber = Math.floor(Math.random() * 10);
    circle.textContent = newNumber;
    const colors = ["red", "green", "blue", "black"];
    const newColor = Math.floor(Math.random() * colors.length);
    circle.style.backgroundColor = colors[newColor];
  });
}

// Display TimeFunction 
let time = 60;
let score = 0;
let hirNum = 0;


// Display score function
function increaseScore(){
  
  getScoreNum.textContent = score;
  score += 10;
}

function displayTimeFunction(){

 let timeIntervale = setInterval(()=>{
    if(time > 0){
    time --;
    getTime.textContent = time;
    }else{
      clearInterval(timeIntervale);
    }
  },1000)
}

// Hit Number Function
function displayHitNumber() {
  hitNum = Math.floor(Math.random() * 10);
  getHitNumber.textContent = hitNum;
}
// Event listener for circle clicks
circleContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('circel')) {

    const clickNumber = parseInt(e.target.textContent, 10);
    if (clickNumber === hitNum && time > 0) {
      increaseScore();
      displayHitNumber();
      updateCircles()
    }
  }
});

function touchCircleEvent(e) {
  e.preventDefault();
  let target = e.target;
  if (e.type === 'touchstart') {
    target = document.elementFromPoint(e.touches[0].clientX, e.touches[0].clientY);
  }
  if (target.classList.contains('circel')) {
    const clickNumber = parseInt(target.textContent, 10);
    if (clickNumber === hitNum && time > 0) {
      increaseScore();
      displayHitNumber();
      updateCircles(); 
    }
  }
}
circleContainer.addEventListener('touchstart', touchCircleEvent);
// Initialize the game
window.addEventListener('load', function () {
  setTimeout(() => {
    displayCircle();
    displayTimeFunction();
    displayHitNumber();
  }, 3000);
});


