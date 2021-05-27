const ENGINE = Matter.Engine,
  BODIES = Matter.Bodies, WORLD = Matter.World, BODY = Matter.Body;

let e = ENGINE.create(),
  w = e.world;

let b, g;

function setup() {
  frameRate(60);
  createCanvas(800, 400);


  // Matter:
  b = BODIES.circle(400, 200, 20, { restitution: 0.99 });
  g = BODIES.rectangle(400, 400, 400, 10, { isStatic: true });
  WORLD.add(w, b);
  WORLD.add(w, g);

  // p5 Renderer:
  angleMode(RADIANS);
  rectMode(CENTER);
}

function draw() {

  if (b.position.x < 0 || b.position.x > width || b.position.y < 0 || b.position.y > height) {
    BODY.setPosition(b, { x: 400, y: 400 });
  }


  ENGINE.update(e);
  background(0);
  BODY.rotate(g, radians((Math.sin(millis() * 0.01) - 0.5) * 2));

  push();
  fill(255);
  translate(b.position.x, b.position.y);
  rotate(b.angle);
  ellipse(0, 0, 20);
  pop();

  push();
  fill(230, 0, 230);
  translate(g.position.x, g.position.y);
  rotate(g.angle);
  rect(0, 0, 400, 20);
  pop();

  // drawSprites();
}


// function mousePressed() {
  // location.reload();
// }