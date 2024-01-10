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

var pipeAr = [];
pipeAr[0] = {
  x: 520,
  y: 0,
};

var bgAr = [];
bgAr[0] = {
  x: 0,
};

var xPlane = 10;
var yPlane = 220;

function draw() {
  for (let i = 0; i < bgAr.length; i++) {
    ctx.drawImage(bg, bgAr[i].x, 0);
    ctx.drawImage(bg, bgAr[i].x + 960, 0);
    bgAr[i].x -= 0.5;
    // console.log(bgAr[i], i);
    if (bgAr[i].x == -970) {
      bgAr.splice(0, 1);
    }
    if (bgAr[i].x == -960) {
      bgAr.push({
        x: 0,
      });
    }
  }

  for (let i = 0; i < pipeAr.length; i++) {
    ctx.drawImage(pipe, pipeAr[i].x, pipeAr[i].y - 100);
    ctx.drawImage(pipe, pipeAr[i].x, pipeAr[i].y + 400);
    pipeAr[i].x -= 5;
    // console.log(pipeAr,i);
    if (pipeAr[i].x == -100) {
      pipeAr.splice(0, 1);
    }
    if (pipeAr[i].x == 200) {
      pipeAr.push({
        x: 520,
        y: Math.floor(Math.random() * pipe.height) - pipe.height,
      });
    }
  }

  ctx.drawImage(plane, xPlane, yPlane, 70, 70);
  requestAnimationFrame(draw);
}

pipe.onload = draw;
