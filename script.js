const Max = 500; 
  
let rectBtn = document.getElementById('reactangleBtn');
let sqBtn = document.getElementById('sqaureBtn');
let cirBtn = document.getElementById('circleBtn'); 
let triBtn = document.getElementById('trianleBtn');

let rectangleHeight = document.getElementById('rectH');
let rectangleWidth = document.getElementById('rectW');
let squareSL = document.getElementById('SideLength');
let circleRad = document.getElementById('Radius');
let TriangleHeight = document.getElementById('TriangleHeight'); 

class Shape {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super(width,height);
    }
}

class Sqaure extends Shape {
    constructor(sideLength) {
        super(wifth,height);
        this.sideLength = sideLength;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super(width,height);
        this.radius = radius;
    }
}

class Triangle extends Shape {
    constructor(height) {
        super(width,height);
    }
}