var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var plane = new Image();
var bg = new Image();
var pipe = new Image();

plane.src = "img/plane2.png";
bg.src = "img/bg.png";
pipe.src = "img/pipe.png";

addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowDown":
      yPlane += 50;
      break;
  }
});
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      yPlane -= 50;
      break;
  }
});

var xPlane = 10;
var yPlane = 220;
var xBg = 10;
var fly = 0;

function draw() {
  ctx.drawImage(bg, xBg, 0);

  ctx.drawImage(pipe, 220, -170);
  ctx.drawImage(pipe, 220, 350);

  ctx.drawImage(plane, xPlane, yPlane, 100, 100);

  xBg -= fly;
  requestAnimationFrame(draw);
}

pipe.onload = draw;
