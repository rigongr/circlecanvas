let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');
canvas.style.backgroundColor = "black";
// c.fillRect(200, 60, 100, 100);
// c.fillRect(300, 40, 100, 500);
// c.fillRect(100, 200, 100, 100);
// c.fillRect(100, 200, 100, 100);

// c.beginPath();
// c.moveT+o(1000, 200);
// c.lineTo(10, 100);
// c.lineTo(20, 200);
// c.lineTo(30, 300);
// c.stroke();

// RRETH
// for(let i = 0; i < 100; i++) {
// c.beginPath();
// c.arc(x, y, 30, 0, Math.PI * 2, false);
// c.fillStyle = 'rgba(255, 0, 0, 0.5)';
// c.strokeStyle = 'blue';
// c.stroke();
// }

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;   
    
    
    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = "gold";
        c.stroke();
    }
    this.update = function() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if(this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        
        this.draw();
    }
}
var circleArray = [];

for(var i = 0; i < 100; i++){
var radius = 30;
var x = Math.random() * (innerWidth - radius * 2) + radius;
var y = Math.random() * (innerHeight - radius * 2) + radius;
var dy = (Math.random() - 0.5) * 5;
var dx = (Math.random() - 0.5)  * 5;
circleArray.push(new Circle(x, y, dx, dy, radius));
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for( var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }

}
animate();