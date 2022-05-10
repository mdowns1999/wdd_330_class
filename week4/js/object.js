/////////////////////////////////////////////////////////////////
// FUNCTION OBJECT PRACTICE
//This Function will contain Javascript code from the textbook reading
//
/////////////////////////////////////////////////////////////////

//HOW WE CONSTRUCTED OBJECTS BEFORE
// const dice = {
//   sides: 6,
//   roll() {
//       return Math.floor(this.sides * Math.random() + 1)
//   }    
// }

//ANOTHER WAY WE CAN DO IT
// const Dice = function(sides=6){
//     this.sides = sides;
//     this.roll = function() {
//         return Math.floor(this.sides * Math.random() + 1)
//     }
//   }

//   //Make  new constructor.  PArenthesis are not required
//   const redDice = new Dice();

// console.log(redDice.sides);
// //OUTPUT: 6


// console.log(redDice.roll());
// //PUTPUT can be 1 through 6


//NEW CLASS DECLERATIONS
//CLass is capalitze since its a noun
class Dice {
    constructor(sides=6) {
        this.sides = sides;
    }

    roll() {
        return Math.floor(this.sides * Math.random() + 1)
    }

    //A class method.  Act like private?
    static description() {
        return 'A way of choosing random numbers'
    }
}

//Create a new instance of Dice.  MUST USE NEW if you want to reuse Dice Class
const blueDice = new Dice(20);

blueDice.sides
//<< 20

blueDice.roll()
//<< 13

console.log(blueDice.constructor);

const greenDice = new blueDice.constructor(10);

console.log(greenDice instanceof Dice)
//<< true

////Prototypal Inheritance

class Turtle {
    constructor(name, color) {
        this.name = name;
        this.weapon = 'hands';


        //THIS IS A PRIVATE ATTRIBUTE
        let _color = color;
        this.setColor = (color) => {
            if(typeof color === 'string'){
                return _color = color;
                } else {
                    throw new Error('Color must be a string');
                }
            }
        this.getColor = () => _color;
    }
    sayHi() {
        return `Hi dude, my name is ${this.name}`;
    }
    attack(){
        return `Feel the power of my ${this.weapon}!`;
    }
}

//Create new instance of turtle
const leo = new Turtle('Leonardo', 'Blue');
console.log(leo)

//Use methods from Turtle class
console.log(leo.name)
console.log(leo.sayHi())

//THe prototype can be used to add things to class(object)
console.log(Turtle.prototype.weapon = 'Hands');

console.log(Object.getPrototypeOf(leo));

//Access color through getter and setters
console.log(leo.getColor());

//THis will throw an errow becuase we have an 
//if statement up above that makes sure the new assignment is a string.
// console.log(leo.setColor(4));

class NinjaTurtle extends Turtle {
    constructor(name) {
        //SUPER REFERS TO THE PARENT CLASS WE INHERENT FROM
        super(name);
        this.weapon = 'hands';
    }
    attack() { return `Feel the power of my ${this.weapon}!` } 
}

////////////////////PROPERTY DESCRIPTORS:///////////////

const me = { name: 'DAZ' };

//Adding to property
me.age = 21;
//<< 21