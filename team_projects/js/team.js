

function footer_date(){
    let date = new Date()
    let year = date.getFullYear()

    document.getElementById('year').textContent = year;
}


function getInput(){

    let input = document.getElementById('userinput').value;


    let number = parseFloat(input)

    let total = total_num(number)

    document.getElementById('output').textContent = `Total: ${total}`;
}

function total_num(number)
{
    let total = 0;
    for(let i = number; i >= 0; i--)
    {
        total += i;
    }
    return total;
}

function getSum(){
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);

    let sum = num1 + num2;

    document.getElementById('total_sum').textContent = `Sum: ${sum}`;


}



const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

//   console.log(inventors)
//   console.log(inventors[0].first)


// const result = inventors.sort((inventor1, inventor2) => `${inventor.first}  ${inventor.last}`)

// console.table(result)

const numbers = [1,1,1];

let total = 0

//  total = inventors.reduce(myFunc(total));
// console.log(total)

// function myFunc(total, num) {
//   return total + (num.passed - num.year);
// }
console.log(inventors[0].passed - inventors[0].year)

let total1 = inventors.reduce(function(total, value){
    total = total + (value.passed - value.year)
});

console.log(total1)