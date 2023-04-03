toothCount = 12;

toothLength = 0;

toothSpeed = 0.1;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  ellipseMode(CENTER);
  rectMode(CENTER);
}

function draw() {
  background(220);
  translate(50, 50)
  for (let mawsDrawnX = 0; mawsDrawnX < 4; mawsDrawnX++) {
    for (let mawsDrawnY = 0; mawsDrawnY < 4; mawsDrawnY++){
    mawCreation(mawsDrawnX*100, mawsDrawnY*100);
  }
  }
  
}

function mawCreation(x, y) {
  push();
  translate(y, x);
  addMaw();
  mawToothLoop();
  toothBreathe();
  pop();
}

function addMaw() {
  push();
  noStroke();
  scale(10);
  fill("maroon");
  ellipse(0, 0, 10);
  pop();
}

function addMawTooth() {
  push();
  noStroke();
  scale(10);
  fill("white");
  triangle(-0.5, -4, 0.5, -4, 0, toothLength);
  pop();
}

function mawToothLoop() {
  for (let linesDrawn = 0; linesDrawn < toothCount; linesDrawn++) {
    addMawTooth();
    rotate(360 / toothCount);
  }
}

function toothBreathe() {
  if (toothLength > 0) {
    toothSpeed = toothSpeed * -1;
  }
  if (toothLength < -3) {
    toothSpeed = toothSpeed * -1;
  }
  toothLength -= toothSpeed;
}
