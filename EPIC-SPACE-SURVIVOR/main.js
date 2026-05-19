const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 500;

const player = {
  x: 100,
  y: 200,
  size: 30,
  speed: 5
};

const bullets = [];
const keys = {};

window.addEventListener("keydown", (e) => {
  keys[e.key] = true;

  if (e.key === " ") {
    bullets.push({ x: player.x + 30, y: player.y + 10, speed: 8 });
  }
});

window.addEventListener("keyup", (e) => {
  keys[e.key] = false;
});

function update() {
  if (keys["w"]) player.y -= player.speed;
  if (keys["s"]) player.y += player.speed;
  if (keys["a"]) player.x -= player.speed;
  if (keys["d"]) player.x += player.speed;

  bullets.forEach(b => b.x += b.speed);
}

function draw() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // player
  ctx.fillStyle = "lime";
  ctx.fillRect(player.x, player.y, player.size, player.size);

  // bullets
  ctx.fillStyle = "yellow";
  bullets.forEach(b => {
    ctx.fillRect(b.x, b.y, 10, 4);
  });
}

function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}

loop();
