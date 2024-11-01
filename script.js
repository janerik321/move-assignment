const ball = document.querySelector("#ball");
const obstacle = document.querySelector("#obstacle");
const body = document.querySelector("body");

fieldX = 700;
fieldY = 650;
body.style.width = `${fieldX}px`;
body.style.height = `${fieldY}px`;

ball.style.zIndex = "1";
obstacle.style.width = "100px";
obstacle.style.height = "100px";
obstacle.style.backgroundColor = "yellow";
obstacle.style.position = "absolute";

let ballX = 0;
let ballY = 0;

const obstacleX = 300;
const obstacleY = 300;
obstacle.style.left = `${obstacleX}px`;
obstacle.style.top = `${obstacleY}px`;

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp" && ballY > 5) {
    ballY -= 5;
  } else if (e.key === "ArrowDown" && ballY < fieldY - 90) {
    ballY += 5;
  } else if (e.key === "ArrowLeft" && ballX > 5) {
    ballX -= 5;
  } else if (e.key === "ArrowRight" && ballX < fieldX - 90) {
    ballX += 5;
  }
  // else if (e.key === " ") {
  //   ball.style.transition = "1s";
  //   ball.style.width = "120px";
  //   ball.style.height = "120px";
  // }

  // Collision detection
  if (
    ballX <= obstacleX - 100 ||
    ballX >= obstacleX + 100 ||
    ballY <= obstacleY - 100 ||
    ballY >= obstacleY + 100
  ) {
    ball.style.transition = "50ms";
    ball.style.top = `${ballY}px`;
    ball.style.left = `${ballX}px`;
    ball.style.backgroundPosition = `${ballX}px ${ballY}px`;
  } else if (e.key === "ArrowUp") {
    ballY += 5;
  } else if (e.key === "ArrowDown") {
    ballY -= 5;
  } else if (e.key === "ArrowLeft") {
    ballX += 5;
  } else if (e.key === "ArrowRight") {
    ballX -= 5;
  }
});

document.addEventListener("click", (e) => {
  ballY = e.pageY - 50;
  ballX = e.pageX - 50;
  ball.style.top = `${ballY}px`;
  ball.style.left = `${ballX}px`;
  ball.style.transition = "1s";
  ball.style.backgroundPosition = `${ballX}px ${ballY}px`;
});
