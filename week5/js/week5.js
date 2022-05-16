'use strict';


function footer_date() {
    let date = new Date()
    let year = date.getFullYear()

    document.getElementById('year').textContent = year;
}

/////////////////////////////////////EXERCISE 1////////////////////////////////////////////////////////////
function exercise5_1(arr) {
    'use strict';
    let array = arr;
    //This will test if the input is an array
    if (typeof array != typeof []) {
        const error1 = new TypeError('You need to use an array.');
        console.log(error1)
    } else {
        let biggest_num = 0;

        for (let i = 0; i < array.length; i++) {
            if (array[i] > biggest_num) {
                biggest_num = array[i]
            }
        }

        console.log(biggest_num)
        return biggest_num
    }
}

function exercise5_1_test_function() {
    console.assert(55 == exercise5_1([24, 55, 1, 45]), "Error!  55 was not found!")
    console.assert(201 == exercise5_1([24, 55, 1, 45, 56, 2, 100, 67, 105, 200, 0, 3, 5, 201]), "Error!  201 was not found!")
    console.assert(1 == exercise5_1([1]), "Error!  1 was not found!")
    console.assert([] == exercise5_1([]), "Error!  An empty was not found!")

    //Test the Typeerror message
    exercise5_1('Mike');

}

function main() {
    footer_date();
    exercise5_1_test_function()
}

///////////////////////////////////////////////////BOOK CODING EXAMPLES////////////////////////////////////////////////////////////////////////
//Will get a reference Error
// unicorn();

//Stack Trace
// function three(){ unicorn(); }
// function two(){ three(); }
// function one(){ two(); }
// one();

//Seeing Strict Mode in action.  If the 'Use Strict' was not at the top, this will not be flagged
// e = 2.718;

//You could just use strict mode in one Function like this:
function strictly() {
    'use strict';
    console.log('Hello World');
}

//OR you could wrap all of you code in a strict function like:

(function () {
    'use strict';

    // All your code would go inside this function
    console.log('Hello World');

}());

//Alerts can be used as Breakpoints to debug code.
// function amIOldEnough(age){
//     if (age = 12) {
//         alert(age);
//         return 'No, sorry.';
//     } else if (age < 18) {
//         return 'Only if you are accompanied by an adult.';
//     }
//     else {
//         return 'Yep, come on in!';
//     }
// }

//CONSOLE.LOG statements can be used instead of alerts as breakpoints.
// function amIOldEnough(age){
//     console.log(age);
//         if (age < 12) {
//         console.log(`In the if with ${age}`);
//         return 'No, sorry.';
//         } else if (age < 18) {
//         console.log(`In the else-if with ${age}`);
//         return 'Only if you are accompanied by an adult.';
//         } else {
//         console.log(`In the else with ${age}`);
//         return 'Yep, come on in!';
//     }
// }

// amIOldEnough(21);
//If we look at the alerts, we willnotice the age = 12 is the bug.  We need the ===


//The Debugger feature automatically runs the debugger.  
function amIOldEnough(age) {
    debugger;
    if (age < 12) {
        debugger;
        return 'No, sorry.';
    } else if (age < 18) {
        debugger;
        return 'Only if you are accompanied by an adult.';
    } else {
        debugger;
        return 'Yep, come on in!';
    }
}

amIOldEnough(16);

//Will throw an error message for user
const error = new Error('Oops, something went wrong');

//Make a custom Error
const error1 = new TypeError('You need to use numbers in this function');

////////////////////////TRY CATCH CASES//////////////////////
function squareRoot(number) {
    'use strict';
    if (number < 0) {
        throw new RangeError("You can't find the square root of negative numbers")
    }
    return Math.sqrt(number);
};


function imaginarySquareRoot(number) {
    'use strict';
    let answer;
    try {
        answer = String(squareRoot(number));
    } catch (error) {
        answer = squareRoot(-number) + "i";
    } finally {
        return `+ or - ${answer}`;
    }
}

let result = imaginarySquareRoot(-111)

console.log(result);

//An assert Statement in JS
// console.assert('expression', message)


main();