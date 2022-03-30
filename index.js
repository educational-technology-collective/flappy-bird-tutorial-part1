const restartBtn = document.querySelector("#restart-btn");
const poles = document.querySelectorAll(".pole");
const gameArea = document.querySelector("#game-area");
const containerWidth = gameArea.clientWidth;
const containerHeight = gameArea.clientHeight;
const speed = 2;
let animationReq;

function startGame() {
  reset();
  gameLoop();
}

function updatePoles() {
  // Move poles
  let polesCurrentPos = parseFloat(
    window.getComputedStyle(poles[0]).getPropertyValue("right")
  );

  //  Check whether the poles went putside of game area.
  if (polesCurrentPos > containerWidth) {
    // Move poles back to the right-hand side of game area.
    polesCurrentPos = 0; // This is based on the "right" property.
  }

  poles.forEach((pole) => {
    pole.style.right = `${polesCurrentPos + speed}px`;
  });
}

function update() {
  updatePoles();
}

function gameLoop() {
  update();
  animationReq = requestAnimationFrame(gameLoop);
}

function reset() {
  poles.forEach((pole) => {
    pole.style.right = 0;
  });
  if (animationReq) {
    cancelAnimationFrame(animationReq);
  }
}

restartBtn.addEventListener("click", startGame);
