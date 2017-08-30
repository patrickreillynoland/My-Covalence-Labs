$(document).ready(function() {
    var Shape = function (height, width) {
        this.height = height;
        this.width = width;
        this.x = Math.floor(Math.random() * 600) + 'px';
        this.y = Math.floor(Math.random() * 600) + 'px';
        this.name = name;
        this.div = document.createElement('div');
        this.div.style.top = this.y;
        this.div.style.left = this.x;
        this.div.style.height = height + 'px';
        this.div.style.width = width + 'px';
        var display = document.getElementById('display');
        display.appendChild(this.div);
        $(this.div).on('click', function() {
            this.describe();
        });
        $(this.div).on('dblclick', function() {
            this.div.remove();
        })
    };

    Shape.prototype.area = function() {
        return (this.height * this.width);
    };

    Shape.prototype.perimeter = function() {
        return (this.height* 2) + (this.width * 2);
    }

    Shape.prototype.describe = function() {
        $('#info-shape').innerText(this.name);
        $('#info-width').innerText(this.width);
        $('#info-height').innerText(this.height);
        $('#info-radius').innerText(this.radius);
        $('#info-area').innerText(this.area());
        $('#info-perimeter').innerText(this.perimeter());      
    };

// Circle
    var Circle = function (radius) {
        Shape.call(this, (radius * 2), (radius * 2));
        this.radius = radius;
        this.div.className = "circle";
    };

    Circle.prototype.diameter = function() {
        return 2 * this.radius;
    };

    Circle.prototype.area = function() {
        Math.PI * (Math.pow(this.radius, 2));
    };

    Circle.prototype.perimeter = function () {
        2 * (Math.PI * this.radius);
    };

    Circle.prototype = Object.create(Shape.prototype);
    Circle.prototype.constructor = Circle;

    $('#cir-insert').on('click', function() {
        var radius = document.getElementById('cir-radius').value;
        new Circle(radius);
    });

// Rectangle
    var Rectangle = function(height, width) {
        Shape.call(this, height, width);
        this.name = "Rectangle";
        this.div.className = "rectangle";
    };

    Rectangle.prototype.area = function() {
        return (this.height * this.width);
    }

    Rectangle.prototype.perimeter = function() {
        return (height * 2) + (width * 2);
    }

    Rectangle.prototype = Object.create(Shape.prototype);
    Rectangle.prototype.constructor = Rectangle;

    $('#rec-insert').on('click', function() {
        var height = document.getElementById('rec-height').value;
        var width = document.getElementById('rec-width').value;
        new Rectangle(height, width);
    });

// Square
    var Square = function(sideLength) {
        Rectangle.call(this, sideLength, sideLength);
        this.name = "Square";
        this.div.className = "square";
    };

    Square.prototype.area = function () {
        return (this.sideLength * this.sideLength);
    };

    Square.prototype.perimeter = function () {
        return (this.sideLength * 4);
    };
    
    Square.prototype = Object.create(Rectangle.prototype);
    Square.prototype.constructor = Square;
    
    $('#sq-insert').on('click', function() {
        var sideLength = document.getElementById('sq-side').value;
        new Square(sideLength);
    });

// Triangle
    var Triangle = function(height) {
        Shape.call(this, height, height);
        this.name = "Right Isoceles Triangle";
        var base = height;
        this.base = base;
        this.div.style.height = "0px";
        this.div.style.width = "0px";
        this.div.style.borderBottom = this.base + "px solid yellow";
        this.div.style.borderLeft = this.base + "px solid transparent";
        this.div.className = "triangle";
    };

    Triangle.prototype.area = function () {
        return (0.5 * this.base * this.height);
    };

    Triangle.prototype.perimeter = function () {
        return (2 * this.height + (Math.sqrt(2) * Math.pow(this.height, 2)));
    };

    Triangle.prototype = Object.create(Shape.prototype);
    Triangle.prototype.constructor = Triangle;

    $('#tri-insert').on('click', function() {
        var height = document.getElementById('tri-height').value;
        new Triangle(height);
    })
});