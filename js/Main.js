
let dino = new Dino(50, 400, 50, 50);
dino.draw();
let cactus = new Cactus(700, 400, 30, 50);
cactus.draw();
cactus.drawScore();

let ground = new Ground();
ground.draw();

let other_1 = new Other(250,0,300,150);
other_1.drawStart()

function init() {
    cactus.move();
    ground.draw();
    dino.draw();
    dino.impact(cactus);
    if (dino.status === false) {
        cactus.ctx.clearRect(cactus.x, cactus.y, cactus.width, cactus.height);
        cactus.x = 800;
        cactus.draw();
        cactus.resetScore();
        alert("Game over");
        dino.status = true;
    }
    requestAnimationFrame(init);
}

init();

window.addEventListener('keydown', (e) => {

    if (e.key === ' ') {
        if (dino.y === 400) {
            dino.moveFlag = 'top';
            dino.jump();
        }
    }
})











