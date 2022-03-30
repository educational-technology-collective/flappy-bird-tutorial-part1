const restartBtn = document.querySelector("#restart-btn");
const poles = document.querySelectorAll(".pole");

const speed = 2;
function startGame() {
  gameLoop();
}

function updatePoles() {
  // Move poles
  let polesCurrentPos = parseFloat(
    window.getComputedStyle(poles[0]).getPropertyValue("right")
  );

  poles.forEach((pole) => {
    pole.style.right = `${polesCurrentPos + speed}px`;
  });
}

function update() {
  updatePoles();
}

function gameLoop() {
  update(); 
  requestAnimationFrame(gameLoop);
}

restartBtn.addEventListener("click", startGame);
