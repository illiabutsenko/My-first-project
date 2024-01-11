let cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d");

var plane = new Image();
var bg = new Image();
var pipe = new Image();

plane.src = "img/plane2.png";
bg.src = "img/bg.png";
pipe.src = "img/pipe.png";

var score_audio = new Audio();
score_audio.src = "audio/score.mp3";

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
var planeWidth = 70;
var planeHeight = 70;
var score = 0;

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
    if (
      (xPlane + planeWidth == pipeAr[i].x &&
        yPlane < pipeAr[i].y + pipe.height - 100) ||
      (xPlane + planeWidth == pipeAr[i].x &&
        yPlane > pipeAr[i].y + pipe.height)
    ) {
      location.reload();
    }
    if (pipeAr[i].x == 5) {
      score++;
      score_audio.play();
    }
  }

  ctx.drawImage(plane, xPlane, yPlane, planeWidth, planeHeight);
  ctx.fillStyle = "#00008B";
  ctx.font = "24px Verdana";
  ctx.fillText(`Score: ${score}`, 10, 490);
  requestAnimationFrame(draw);
}

// console.log(pipe.height, pipe.width);

pipe.onload = draw;
