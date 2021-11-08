// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";
dodger.style.bottom = "0px";
function moveDodgerRight(){
const leftNumbers = dodger.style.left.replace("px","");
const right = parseInt(leftNumbers, 10);

if (right<360) {
  dodger.style.left = `${right+1}px`;
}

}

function moveDodgerLeft(){
const leftNumbers = dodger.style.left.replace("px",  "");
const left = parseInt(leftNumbers, 10);

if(left>0) {
  dodger.style.left = `${left-1}px`;
}
}
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});