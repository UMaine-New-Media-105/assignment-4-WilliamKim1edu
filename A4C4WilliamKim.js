teethCounts = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  ellipseMode(CENTER);
  rectMode(CENTER);
  noLoop();
}

function draw() {
  background(220);
  translate(50, 50);
  mawsDrawn = -1;
  for (let mawsDrawnY = 0; mawsDrawnY < 4; mawsDrawnY++) {
    for (let mawsDrawnX = 0; mawsDrawnX < 4; mawsDrawnX++) {
      mawsDrawn += 1;
      addMaw(
        mawsDrawnX * 100,
        mawsDrawnY * 100,
        teethCounts[mawsDrawn],
        random(-3, 0)
      );
    }
  }
}

function addMaw(x, y, toothCount, toothLength) {
  push();
  translate(x, y);
  scale(10);
  noStroke();
  fill("maroon");
  ellipse(0, 0, 10);
  for (let linesDrawn = 0; linesDrawn < toothCount; linesDrawn++) {
    fill("white");
    triangle(-0.5, -4, 0.5, -4, 0, toothLength);
    rotate(360 / toothCount);
  }
  pop();
}
