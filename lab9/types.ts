//Input boxes
let inputCircleRadius = <HTMLInputElement>document.getElementById('input-circ-radius');

//Span labels
let shapeNameLabel = document.getElementById('shape-name');

let display = document.getElementById('display');

document.getElementById('circle-btn').addEventListener('click', createCircle);

function createCircle {
    let inputRadius = Number
}
class Shape {
    protected div: HTMLDivElement;
    protected cssClass: string;
    protected radius: number; 

    constructor(protected width: number, protected height: number) {
        this.width = width;
        this.height = height;
    }

    draw() {
        this.div = document.createElement('div');
        this.x = Math.floor(Math.random() * 600) + 'px';
        this.y = Math.floor(Math.random() * 600) + 'px';
        this.div.style.top = this.y;
        this.div.style.left = this.x;
        this.div.style.height = height + 'px';
        this.div.style.width = width + 'px';
        display.appendChild(this.div);
        this.div.addEventListener('click', function() {
            this.describe();
        });
        this.div.addEventListener('dblclick', function() {
            this.div.remove();
        })
    }

    describe() {
        shapeNameLabel.innerText = this.constructor.name;
        shapeWidthLabel.innerText = String(this.width);
        shapeHeightLabel.innerText = String(this.height);
        $('#info-radius').innerText(this.radius);
        $('#info-area').innerText(this.area());
        $('#info-perimeter').innerText(this.perimeter());  
    }

    abstract area();
    abstract perimeter(); // Abstract: add to class and method call of a class that is a blueprint rather than an object
    // that will be made (i.e., Shape vs Circle). It lets child objects know to have those parameters; you previously would have had
    // to create essentially a placeholder method in the super class and then override it in lower classes. Abstracting disallows you from
    // instanciating that object.
}    

class Circle extends Shape {
    constructor (radius: number) {
        super(2 * radius, 2 * radius);
        this.radius = radius;
        this.cssClass = 'circle';
        this.draw();
    }

    area() {
        return Math.PI * (Math.pow(this.radius, 2));
    };

    perimeter() {
        return 2 * (Math.PI * this.radius);
    };
}

class Triangle extends Shape {
    constructor(height: number) {
        super(height, height);
        this.cssClass = 'triangle';
        this.draw();
        this.div.style.width = 0;
        this.div.style.height = 0;
        this.div.style.borderRightWidth = this.height + 'px';
        this.div.style.borderBottomWidth = this.height + 'px';
    }

    area() {
        return (0.5 * this.base * this.height);
    };

    perimeter() {
        return (2 * this.height + (Math.sqrt(2) * Math.pow(this.height, 2)));
    };
}    

class Rectangle extends Shape {
    constructor(width: number, height: number) {
        super(width, height);
        this.cssClass= 'rectangle';
        this.draw();
    }

    area() {
        return (this.height * this.width);
    }

    perimeter() {
        return (this.height * 2) + (this.width * 2);
    }
}

class Square extends Rectangle {
    constructor(side: number) {
        super(side, side);
        this.cssClass = 'square';
        this.div.classList.remove('rectangle');
        this.div.classList.add(this.cssClass);
}
//// Below is initial code /////    
    let Shape = function (height, width) {
        this.height = height;
        this.width = width;
        
        this.name = name;
        
        
        let display = document.getElementById('display');
        
    };

    Shape.prototype.area = function() {
        return (this.height * this.width);
    };

    Shape.prototype.perimeter = function() {
        return (this.height* 2) + (this.width * 2);
    }

    Shape.prototype.describe = function() {
            
    };

// Circle
    let Circle = function (radius) {
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
        let radius = document.getElementById('cir-radius').value;
        new Circle(radius);
    });

// Rectangle
    let Rectangle = function(height, width) {
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
        let height = document.getElementById('rec-height').value;
        let width = document.getElementById('rec-width').value;
        new Rectangle(height, width);
    });

// Square
    let Square = function(sideLength) {
        Rectangle.call(this, sideLength, sideLength);
        this.name = "Square";
        this.div.className = "square";
    };

    
    
    Square.prototype = Object.create(Rectangle.prototype);
    Square.prototype.constructor = Square;
    
    $('#sq-insert').on('click', function() {
        let sideLength = document.getElementById('sq-side').value;
        new Square(sideLength);
    });

// Triangle
    let Triangle = function(height) {
        Shape.call(this, height, height);
        this.name = "Right Isoceles Triangle";
        let base = height;
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
        let height = document.getElementById('tri-height').value;
        new Triangle(height);
    });