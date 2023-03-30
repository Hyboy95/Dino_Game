class Media {
    constructor(x,y,width,height) {
        this.x = x;
        this.y = y;
        this.canvas = document.getElementById('game');
        this.ctx = this.canvas.getContext('2d');
        this.width = width;
        this.height = height;
    }

    drawStart() {
        let img = new Image();
        img.onload = () => {
            this.ctx.drawImage(img, this.x, this.y, this.width, this.height);
        }
        img.src = './image/start.png'
    }

    drawEnd() {
        let img = new Image();
        img.onload = () => {
            this.ctx.drawImage(img, this.x, this.y, this.width, this.height);
        }
        img.src = './image/end.png'
    }
}