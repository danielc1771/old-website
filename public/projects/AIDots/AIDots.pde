Population test;
PVector goal = new PVector(400, 10);

void setup() {
  size(800, 800);
  test = new Population(1000);
}

void draw() {
  background(255);
  fill(0, 0, 255);
  ellipse(goal.x, goal.y, 10, 10);

  fill(0, 0, 255);
  rect(0, 300, 500, 10);
  rect(400, 500, 400, 10);
    
  fill(255, 0, 0);
  text("Generation: " + test.gen, 60, 80);

  if (test.allDotsDead()) {
    //algortihm to select next generation
    test.calculateFitness();
    test.naturalSelection();
    test.mutateChildren();
  } else {
    test.update();
    test.show();
  }
}
