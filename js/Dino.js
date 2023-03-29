class Dino {
    constructor(x, y, width, height) {
        this.canvas = document.getElementById('game');
        this.ctx = this.canvas.getContext('2d');
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = 7;
        this.status = true;
        this.moveFlag = 'top';
    }

    draw() {
        let img = new Image();
        img.onload = () => {
            this.ctx.drawImage(img, this.x, this.y, this.width, this.height)
        }
        img.src = './image/dino.png';
    }

    jumpTop() {
        this.y -= this.speed;
    }

    jumpDown() {
        this.y += this.speed;
    }

    jump() {
        let interval = setInterval(() => {
            this.ctx.clearRect(this.x, this.y, this.width, this.height);

            if (this.y <= 200) {
                this.moveFlag = 'down';
            }

            switch (this.moveFlag) {
                case 'top':
                    this.jumpTop();
                    break;
                case 'down':
                    this.jumpDown();
                    break;
            }

            if (this.y >= 400) {
                clearInterval(interval);
            }

            this.draw();
        }, 10)

    }

    impact(cactus) {
        if (this.y + this.height >= cactus.y && this.x + this.width - 10 >= cactus.x &&
            this.x < cactus.x + cactus.width) {
            this.status = false;
        }
    }

}