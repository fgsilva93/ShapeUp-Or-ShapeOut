const Max = 600; 
  
let rectangle =document.getElementsByClassName('rectangle');

let rectangleButton = document.getElementById('rectangleBtn');
let sqBtn = document.getElementById('sqaureBtn');
let cirBtn = document.getElementById('circleBtn'); 
let triBtn = document.getElementById('trianleBtn');

let rectangleHeight = document.getElementById('rectH');
let rectangleWidth = document.getElementById('rectW');
let squareSL = document.getElementById('SideLength');
let circleRad = document.getElementById('circle-radius');
let TriangleHeight = document.getElementById('TriangleHeight'); 

let container = document.getElementById('canvas');

cirBtn.addEventListener('click', function newCircle() {
   new Circle(circleRad.value);
    console.log('The button is working');
});

class Shape {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    
    draw() {
        if(this.width > 600 && this.height > 600) {
            return alert("Thats too large");
        } else if (this.width > 600) {
            return alert("No, no. You can't do that");
        } else if(this.height > 600) {
            return alert("Cant do that");
        };

        let x = Math.floor(Math.random() * (Max - this.width));
        let y = Math.floor(Math.random() * (Max - this.height));
        this.div = document.createElement('div');
        this.div.classList.add(this.cssClass);
        this.div.style.left = `${x}px`;
        this.div.style.top = `${y}px`;
        this.div.style.width = `${this.width}px`;
        this.div.style.height = `${this.height}px`;
        container.append(this.div);
    };

    describe() { 
    };

}

class Rectangle extends Shape {
    constructor(x, y) {
        super(height,width);
    }
}

class Sqaure extends Shape {
    constructor(x, y, size) {
        super(width,height);
    }
}

class Circle extends Shape {
    constructor(radius) {
        super(radius,radius);
        this.radius = radius;
        this.cssClass= 'circle';
        this.draw();
    }
}

class Triangle extends Shape {
    constructor(height) {
        super(width,height);
    }
}