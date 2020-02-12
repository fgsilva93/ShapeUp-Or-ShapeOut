const Max = 600; 
  
let rectangle =document.getElementsByClassName('rectangle');

let rectangleButton = document.getElementById('rectangleBtn');
let squareButton = document.getElementById('squareBtn');
let circleButton = document.getElementById('circleBtn'); 
let triangleButton = document.getElementById('triangleBtn');

let rectangleHeight = document.getElementById('rectangleheight');
let rectangleWidth = document.getElementById('rectanglewidth');
let squareSideLength = document.getElementById('sidelength');
let circleRad = document.getElementById('circle-radius');
let triangleHeight = document.getElementById('triangleheight'); 

let container = document.getElementById('canvas');

rectangleButton.addEventListener('click', () => {
    new Rectangle(rectangleHeight.value, rectangleWidth.value);
});

squareButton.addEventListener('click', () => {
    new Square(squareSideLength.value); 
});

circleButton.addEventListener('click', () => {
   new Circle(circleRad.value);
});

triangleButton.addEventListener('click', () => {
    new Triangle(triangleHeight.value);
})

class Shape {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    
    draw() {
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
    constructor(height, width) {
        super(height,width);
        this.cssClass = 'rectangle';
        this.draw();
    }
}

class Square extends Shape {
    constructor(sideLength) {
        super(sideLength, sideLength);
        this.sideLength = sideLength;
        this.cssClass = 'square';
        this.draw();
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
        super(height, height);
        this.cssClass = 'triangle';
        this.draw();
        this.div.style.width = '0';
        this.div.style.height = '0';
        this.div.style.borderBottomWidth = `${height}px`;
        this.div.style.borderRightWidth = `${height}px`;
  

    }
}
