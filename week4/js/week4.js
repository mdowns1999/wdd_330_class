// //IMPORT the Square function form the math file.
// import * as multiply from 'math.js';

// //Uing the square function from the math file
// console.log(multiply.square(2))



function footer_date() {
  let date = new Date()
  let year = date.getFullYear()

  document.getElementById('year').textContent = year;
}

/////////////////////////////////////////////////////////////////
// FUNCTION FORM PRACTICE
//This Function will contain Javascript code from the textbook reading
//
/////////////////////////////////////////////////////////////////

//
function form_practice() {
  //const form = document.forms[0]; (Can also be used.  If we had multiple forms it will be in an index)
  // const form = document.search;
  const form = document.forms['search'];

  //const input = form.searchInput (Don't use this if naming clashes)
  const input = form['searchInput'];

  input.addEventListener('focus', () => console.log('focused'), false);

  input.addEventListener('blur', () => console.log('blurred'), false);

  input.addEventListener('change', () => console.log('changed'), false);

  form.addEventListener('submit', search, false);

  // function search(event) {
  //     alert(' Form Submitted');
  //     event.preventDefault(); //Stops from opening a broke URL
  // }

  function search(event) {
    alert(`You Searched for: ${input.value}`);
    event.preventDefault();
  }

  input.addEventListener('focus', function () {
    if (input.value === 'Search Here') {
      input.value = ''
    }
  }, false);

  input.addEventListener('blur', function () {
    if (input.value === '') {
      input.value = 'Search Here';
    }
  }, false);
}


function hero_practice() {
  const form = document.forms['hero'];
  form.addEventListener('submit', makeHero, false);

  function makeHero(event) {

    event.preventDefault(); // prevent the form from being submitted

    const hero = {}; // create an empty object

    hero.name = form.heroName.value; // create a name property based on the input field's value

    hero.realName = form.realName.value;

    hero.age = form.age.value;

    hero.powers = [...form.powers].filter(box => box.checked).map(box => box.value);
    for (let i = 0; i < form.powers.length; i++) {
      if (form.powers[i].checked) {
        hero.powers.push(form.powers[i].value);
      }
    }

    alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
    return hero;
  }

  form.addEventListener('submit', validate, false);

  function validate(event) {
    const firstLetter = form.heroName.value[0];
    if (firstLetter.toUpperCase() === 'X') {
      event.preventDefault();
      alert('Your name is not allowed to start with X!');
    }
  }
}


///////////////////////////////OBJECT EXERCISES/////////////////////////////////////////

////////////////////////////////////////////////
// Exercise 1
//This function is a practice for making a JS object for Vectors
///////////////////////////////////////////////

class Vector {
  constructor(vector1, vector2) {
    this.x = vector1;
    this.y = vector2;
  }

  plus(num1, num2) {
    //Add to x value
    this.x += num1
    this.y += num2
  }

  minus(num1, num2) {
    //Add to x value
    this.x -= num1
    this.y -= num2
  }

  length() {
    //Find distance rounded to 2
    return Math.sqrt(this.x * this.x + this.y * this.y).toFixed(2);
  }
}


class ClydnerVolume {
  constructor(h, r) {
    this.height = h;
    this.radius = r;
    this.PI = 3.14519;
  }

  getClydnerVolume() {
    return this.PI * (this.radius * this.radius) * this.height;
  }
}

////////////////////////////////////////////////
// CLASS PRACTICE FUNCITON
//This function is a practice for calling a JS object for Vectors and Formulas
///////////////////////////////////////////////

function classPractice() {
  /////////////////////////PRACTICE WITH VECTOR CLASS////////////////////////////////
  let vector = new Vector(5, 1);

  //Before Result: 
  console.log(`Before Add - X: ${vector.x} Y: ${vector.y}`)

  //Add to Vector by calling Plus method
  vector.plus(1, 2)

  //After Adding
  console.log(`After Add - X: ${vector.x} Y: ${vector.y}`)

  //Before Result: 
  console.log(`Before Minus - X: ${vector.x} Y: ${vector.y}`)

  //Minus to Vector by calling Plus method
  vector.minus(5, 5)

  //After Minus
  console.log(`After Minus - X: ${vector.x} Y: ${vector.y}`)

  let length = vector.length()
  //Length of Vector
  console.log(`Length of vector: ${length}`)




  ////////////////////////////////PRACTICE WITH VOLUME CLASS/////////////////////////////////////////////////

  //Get volume class
  let volume = new ClydnerVolume(20, 5)

  console.log(volume.getClydnerVolume())



  ////////////////////////////////////PRACTICE WITH ANOTHER KIND OF OBJECT//////////////////////////////////
  let library = [{
      title: 'The Road Ahead',
      author: 'Bill Gates',
      libraryID: 1254
    },
    {
      title: 'Walter Isaacson',
      author: 'Steve Jobs',
      libraryID: 4264
    },
    {
      title: 'Mockingjay: The Final Book of The Hunger Games',
      author: 'Suzanne Collins',
      libraryID: 3245
    }
  ];

  //THE sort function will sort each item in th eobject list by the Libray ID from largest to smallest.
  const sortedID = library.sort((function (object1, object2) {
    return object2.libraryID - object1.libraryID
  }))
  console.table(sortedID)

}




function main() {
  footer_date()
  // form_practice()
  hero_practice()
  classPractice()

}

main()