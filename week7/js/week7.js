'use strict';


function footer_date() {
    let date = new Date()
    let year = date.getFullYear()

    document.getElementById('year').textContent = year;
}

function chapterElevenReading()
{
    // function square(x) {
    //     return x*x;
    // }

    // console.log(square.length)

    //Can use the call to call the function, but you have to have the null
    console.log(square.call(null, 4))

    //Cache
    function square(x){
        square.cache = square.cache || {};
        if (!square.cache[x]) {
            square.cache[x] = x*x;
        }
        return square.cache[x]
    }

square(3);

square(-11);

//Call the chahce to see an object with key value pairs
console.log(square.cache);

function party(){
    console.log('Wow this is amazing!');
    party = function(){
        console.log('Been there, got the T-Shirt');
    }

}
//First Message Displays
party()

//Second Message displays
party()

//An Exmaple of a recursive funciton
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(4))

//A more complex recuriosn loop
function collatz(n, sequence=[n]) {
    if (n === 1){
        return `Sequence took ${sequence.length} steps. It was ${sequence}`;
    }

    if (n%2 === 0) {
        n = n/2;
    } else { 
        n = 3*n + 1;
    }

    return collatz(n,[...sequence,n]);
}

console.log(collatz(18))

//Using Callback
function wait(message, callback, seconds){
    setTimeout(callback,seconds * 1000);
    console.log(message);
}

function selfDestruct(){
    console.log('BOOOOM!');
}

wait('This tape will self-destruct in five seconds ... ', selfDestruct, 5);
console.log('Hmmm, should I accept this mission or not ... ?');

}



function ajaxExample()
    {
        //Target Buttons on home page
        const textButton = document.getElementById('number');
        const apiButton = document.getElementById('chuck');
        const outputDiv = document.getElementById('output');

        //Assign URLS to variables
        const textURL = 'http://numbersapi.com/random';
        const apiURL = 'https://api.chucknorris.io/jokes/random';

        //Number Button
        textButton.addEventListener('click', () => {
            fetch(textURL)
            .then( response => {
                outputDiv.innerHTML = 'Waiting for response...';
            if(response.ok) {
                return response;
            }
                throw Error(response.statusText);
            })
            .then( response => response.text() )
            .then( text => outputDiv.innerText = text )
            .catch( error => console.log('There was an error:', error))
        },false);

        //Chuck Norris Button
        apiButton.addEventListener('click', () => {
            fetch(apiURL)
            .then( response => {
                outputDiv.innerHTML = 'Waiting for response...';
            if(response.ok) {
                return response;
            }
            throw Error(response.statusText);
            })
            .then( response => response.json() )
            .then( data => outputDiv.innerText = data.value )
            .catch( error => console.log('There was an error:', error))
        },false);
    }





function main()
{
footer_date()
chapterElevenReading()
ajaxExample()
}

main()