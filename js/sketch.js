let grid;
let s;
let scl = 40;
let food;
let containerX = 600;
let containerY = 600;
let whereIsFood = [];

function setup() {
  createCanvas(containerX, containerY);
  s = new Snake();
  frameRate(10);
  food = createVector(random(width), random(height));
  console.log(food);
  pickLocation();
  noLoop(); //pause
  loop(); //play
}

function pickLocation() {
  const spanFood = document.getElementById("currentFood");
  let cols = floor(width / scl);
  let rows = floor(height / scl);

  food = createVector(floor(random(cols)), floor(random(rows)));

  whereIsFood = [food.y + 1, food.x + 1]; // sempre atualiza
  spanFood.innerHTML = `Coluna: ${whereIsFood[0]} e Linha: ${whereIsFood[1]} - A = a(${whereIsFood[0]}, ${whereIsFood[1]})`;

  food.mult(scl);
  console.log(s.tail);
}

function draw() {
  background(0);

  if (s.eat(food)) {
    pickLocation();
  }

  createGrid(containerX, containerY, "#333");
  s.death();
  s.update();
  s.show();

  fill("#e1b12c");
  rect(food.x, food.y, scl, scl);
}

function keyPressed() {
  if (keyIsDown(UP_ARROW)) {
    s.dir(0, -1);
  } else if (keyIsDown(DOWN_ARROW)) {
    s.dir(0, 1);
  } else if (keyIsDown(RIGHT_ARROW)) {
    s.dir(1, 0);
  } else if (keyIsDown(LEFT_ARROW)) {
    s.dir(-1, 0);
  }
}

function createGrid(x, y, color) {
  for (let row = 0; row <= x; row += scl) {
    for (let col = 0; col <= y; col += scl) {
      fill(color);
      rect(row, col, scl, scl);
      fill("white");

      textSize(12);
      text(`${col / scl}`, row + 24, col - 6);
      fill("gray");

      textSize(12);
      text(`${row / scl + 1}`, row + 24, col - 24);
    }
  }
}
