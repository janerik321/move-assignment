const ball = document.querySelector("#ball");
const obstacle = document.querySelector("#obstacle");

let ballX = 0;
let ballY = 0;
ball.style.zIndex = "1";

// Obstacle values.
const obstacleWidth = 100;
const obstacleHeight = 100;
obstacle.style.width = `${obstacleWidth}px`;
obstacle.style.height = `${obstacleHeight}px`;
obstacle.style.backgroundColor = "yellow";
obstacle.style.position = "absolute";

// Obstacle position.
const obstacleX = 300;
const obstacleY = 300;
obstacle.style.left = `${obstacleX}px`;
obstacle.style.top = `${obstacleY}px`;

// Check for arrow keypress. Change X & Y positions accordingly.
window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp" && ballY > 5) {
    ballY -= 5;
  } else if (e.key === "ArrowDown" && ballY < innerHeight - 110) {
    ballY += 5;
  } else if (e.key === "ArrowLeft" && ballX > 5) {
    ballX -= 5;
  } else if (e.key === "ArrowRight" && ballX < innerWidth - 110) {
    ballX += 5;
  }

  // Collision detection.
  if (
    ballX <= obstacleX - 100 ||
    ballX >= obstacleX + obstacleWidth ||
    ballY <= obstacleY - 100 ||
    ballY >= obstacleY + obstacleHeight
  ) {
    // Move ball according to arrow direction.
    ball.style.transition = "50ms";
    ball.style.top = `${ballY}px`;
    ball.style.left = `${ballX}px`;
    ball.style.backgroundPosition = `${ballX}px ${ballY}px`;
  }
  // If collision occurs, set X & Y to previous values.
  else if (e.key === "ArrowUp") {
    ballY += 5;
  } else if (e.key === "ArrowDown") {
    ballY -= 5;
  } else if (e.key === "ArrowLeft") {
    ballX += 5;
  } else if (e.key === "ArrowRight") {
    ballX -= 5;
  }
});

// Mouse click.
document.addEventListener("click", (e) => {
  // Collision detection.
  if (
    e.pageX <= obstacleX - 50 ||
    e.pageX >= obstacleX + obstacleWidth + 50 ||
    e.pageY <= obstacleY - 50 ||
    e.pageY >= obstacleY + obstacleHeight + 50
  ) {
    // Move ball to clicked area.
    ballY = e.pageY - 50;
    ballX = e.pageX - 50;
    ball.style.top = `${ballY}px`;
    ball.style.left = `${ballX}px`;
    ball.style.transition = "1s";
    ball.style.backgroundPosition = `${ballX}px ${ballY}px`;
  }
});
