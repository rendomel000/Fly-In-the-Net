var square1;

function setup(){
  createCanvas(800, 600)
}

function draw(){
  background("#777");

  if (mouseX>=100 && mouseX<=300 && mouseY>=100 && mouseY<=300) {
    square1=0;
  }

  if (square1==0) {
          rect(100, 100, 50, 50);
          rect(250, 100, 50, 50);
          rect(250, 250, 50, 50);
          rect(100, 250, 50, 50);

          rect(25, 25, 50, 50);
          rect(325, 25, 50, 50);
          rect(25, 325, 50, 50);
          rect(325, 325, 50, 50);
  } else {
        rect(100, 100, 200, 200);
  }

  print(square1);

}
