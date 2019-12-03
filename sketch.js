var x = 50;
var diameter = 200

function setup() {
  createCanvas(900, 900);


}

  function draw() {
    background(204, 230, 252)

    {
      background(51);
      translate(mouseX, mouseY);
      fill(102);
      stroke(255);
      strokeWeight(2);
      beginShape();
      vertex(0, -50);
      vertex(14, -20);
      vertex(47, -15);
      vertex(23, 7);
      vertex(29, 40);
      vertex(0, 25);
      vertex(-29, 40);
      vertex(-23, 7);
      vertex(-47, -15);
      vertex(-14, -20);
      endShape(CLOSE);
    }

 if (mouseIsPressed) {
 x = 200;
 diameter = 300;
 }
else {
x = 50;
diameter = 100;
}
fill(98, 81, 252);
strokeWeight(2);
rect(100,100,x,x);

fill(98, 81, 252);
strokeWeight(2);
rect(100,200,x,x);

fill(176, 171, 224);
strokeWeight(2);
rect(100,300,x,x);

fill(176, 171, 224);
strokeWeight(2);
rect(100,400,x,x);

fill(98, 81, 252);
strokeWeight(2);
rect(100,500,x,x);


fill(98, 81, 252);
strokeWeight(2);
rect(100,600,x,x);



fill(98, 81, 252);
strokeWeight(2);
rect(100,700,x,x);


fill(98, 81, 252);
strokeWeight(2);
ellipse(800, 100, diameter, diameter)


textFont('Georgia');
textSize(40);
fill(102, 95, 163);
text('New York City!', 500, 600)



}
