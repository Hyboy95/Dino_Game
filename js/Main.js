
let dino = new Dino(50, 400, 50, 50);
dino.draw();
let cactus = new Cactus(700, 400, 30, 50);
cactus.draw();
cactus.drawScore();

let ground = new Ground();
ground.draw();


let img_start = new Media(250, 100, 300, 150);
let img_end = new Media(250, 100, 300, 150);
img_start.drawStart();

let isGameStarted = false;

function init() {
    if (dino.status === true) {
        cactus.move();
        cactus.drawScore();
        ground.draw();
        dino.draw();
        dino.impact(cactus);
    } else {
        cactus.ctx.clearRect(cactus.x, cactus.y, cactus.width, cactus.height);
        cactus.stop(dino);
        cactus.resetScore();
        img_end.drawEnd();
    }
    requestAnimationFrame(init);
}

window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        if (!isGameStarted) {
            dino.ctx.clearRect(0, 0, dino.canvas.width, dino.canvas.height);
            isGameStarted = true;
            init();
        }
    }
})

window.addEventListener('keydown', (e) => {
    if (e.key === ' ') {
        if (dino.y === 400 && dino.status === true) {
            dino.moveFlag = 'top';
            dino.jump(ground);
            dino.audioJump();
        }
    }
})

window.addEventListener('keydown', (e) => {
    if (e.keyCode === 16) {
        location.reload();
    }
})

