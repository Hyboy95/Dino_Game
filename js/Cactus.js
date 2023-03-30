
class Cactus {

    constructor(x, y, width, height) {
        this.canvas = document.getElementById('game');
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = 4;
        this.level = 1;
        this.score = 0;
        this.ctx = this.canvas.getContext('2d');
    }

    draw() {
        let img = document.getElementById('cactus');
        this.ctx.drawImage(img, this.x, this.y, this.width, this.height)
    }

    drawScore() {
        this.ctx.font = '28px Arial';
        this.ctx.fillStyle = 'black';
        this.ctx.fillText(`Score:${this.score}`, 0, 30);
    }

    increaseSpeed() {
        switch (this.level) {
            case 1:
                this.speed = 4;
                break;
            case 2:
                this.speed = 5;
                break;
            case 3:
                this.speed = 8;
                break;
            case 4:
                this.speed = 10;
        }
        if (this.score > 500 && this.score <= 1000) {
            this.level = 2;
        } else if (this.score > 1000 && this.score <= 3000) {
            this.level = 3;
        } else if (this.score > 3000) {
            this.level = 4;
        }
    }

    move() {
        this.ctx.clearRect(this.x, this.y, this.width, this.height);
        if (this.x === 0) {
            this.x = 800;
            this.score += 100;
            this.ctx.clearRect(0, 0, 150, 40);
            this.increaseSpeed();
            this.drawScore();
        }
        this.x -= this.speed;
        this.draw();
    }

    stop(dino) {
        this.speed = 0;
        this.draw();
        dino.draw();
    }

    resetScore() {
        this.score = 0;
        this.level = 1;
        this.ctx.clearRect(0, 0, 150, 40);
        cactus.drawScore();
    }

}