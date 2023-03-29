class Ground {
    constructor() {
        this.x = 0;
        this.y = 365;
        this.canvas = document.getElementById('game');
        this.ctx = this.canvas.getContext('2d');
        this.width = this.canvas.width;
        this.height = 100;
    }

    draw() {
        let img = new Image();
        img.onload = () => {
            this.ctx.drawImage(img, this.x, this.y, this.width, this.height);
        }
        img.src = './image/ground.png'
    }
}