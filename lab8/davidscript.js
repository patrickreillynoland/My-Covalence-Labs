//Adds all input boxes up top
var inputSquareSide = document.getElementById('input-square-side');
var inputCircleRadius = document.getElementById('')
//etc etc.

// Then gets span labels for displaying info:
var shapeNameLabel = document.getElementById('shape-name');
//etc etc.

var canvas = document.getElementById('canvas');

document.getElementById('circle-btn').addEventListener('click', createCircle);
document.getElementById('triangle-btn').addEventListener('click', createTriangle);
document.getElementById('rectagle-btn').addEventListener('click', createRectangle);
document.getElementById('square-btn').addEventListener('click', createSquare);

function createCircle() {
    var inputRadius = inputCircleRadius.value;
    new Circle(inputRadius);
}

function createTriangle() {
    new Triangle(inputTriangleHeight.value);
}

function createRectangle() {
    new createRectangle(inputRectangleWidth.value, inputRectangleHeight.value);
}

function createSquare() {
    new createSquare(inputSquareSide.value);
}

//Add to HTML before script.js; this is a separate file for shape properties.
function Shape(width, height) {
    this.width = width;
    this.height = height;
}
Shape.prototype.draw = function() {
    this.div = document.createElement('div');
    this.div.className = 'shape' + this.cssClass; //TODO: what is this.cssClass
    //also could do
    // this.div.classList.add('shape');
    // this.div.classList.add(this.cssClass);
    // -- Remember that David added a general CSS class 'shape' to hold common shape elements.
    this.div.style.top = y + 'px';
    this.div.style.left = x + 'px';
    this.div.style.width = this.width + 'px';
    this.div.style.height = this.height + 'px';
    this.div.addEventListener('click', this.describe.bind(this));
    //Need .bind on that so that "this" doesn't refer to the div that you click on, but rather the object
    this.div.addEventListener('dblclick', function() {
        this.div.remove();
    }.bind(this));
    var x = Math.floor(Math.random() * (600 - this.width));
    var y = Math.floor(Math.random() * (600 - this.height));

    canvas.appendChild(this.div);
};

Shape.prototype.describe = function() {
    shapeNameLabel.innerText = this.constructor.name;
    shapeWidthLabel.innerText = this.width;
    shapeHeightLabel.innerText = this.height;
    shapeRadiusLabel.innerText = this.radius;
    shapeAreaLabel.innerText = this.area();
    shapePerimeterLabel.innerText = this.perimeter();
};

// Circle
function Circle(radius) {
    //Have to satisfy arguments of parent
    Shape.call(this, 2 * radius, 2 * radius);
    this.radius = radius;
    this.cssClass = 'circle';
    this.draw();
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.area = function() {
    return Math.PI * Math.pow(this.radius, 2);
}
Circle.prototype.perimeter = function() {
    return 2 * Math.PI * this.radius;
}

//Triangle
function Triangle(height) {
    Shape.call(this, height, height);
    this.cssClass = 'triangle';
    this.draw();
    this.div.style.width = '0';
    this.div.style.height = '0';
    this.div.style.borderRightWidth = height + 'px';
    this.div.style.borderBottomWidth = height + 'px';
}
Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

Triangle.prototype.area = function() {
    return 0.5 * this.height * this.height;
}

Triangle.prototype.perimeter = function() {
    return 2 * this.height + Math.sqrt(2 * Math.pow(this.height, 2));
}

//Rectangle
function Rectangle(width, height) {
    Shape.call(this, width, height);
    this.cssClass = 'rectangle';
    this.draw();
}
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function () {
    return this.width * this.height;
}

Rectangle.prototype.perimeter = function() {
    return 2 * this.width + 2 * this.height;
}

//Square 
function Square(side) {
    Rectangle.call(this, side, side);
    this.cssClass = 'square';
    this.div.classList.remove('rectangle');
    this.div.classList.add(this.cssClass);
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

