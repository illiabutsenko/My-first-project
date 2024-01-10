var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var plane = new Image();
var bg = new Image();
var pipe = new Image();

plane.src = "img/plane2.png";
bg.src = "img/bg.png";
pipe.src = "img/pipe.png";

function draw() {
  ctx.drawImage(bg, 0, 0);
  
  ctx.drawImage(pipe, 220, -170);
  ctx.drawImage(pipe, 220, 350);
  
  ctx.drawImage(plane, 10, 220)
}

pipe.onload = draw;