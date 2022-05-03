function footer_date(){
    let date = new Date()
    let year = date.getFullYear()

    document.getElementById('year').textContent = year;
}

footer_date()

////////////////////////////////////////////////
//Function Testing Object
//This function is a practice from the reading on the DOM and Objects.  
//Some of the things in the reading made me curious so I quickly tried them out here.
///////////////////////////////////////////////
function testing_object(){
    const superman = {
        name: 'Superman',
        'real name': 'Clark Kent',
        height: 75,
        weight: 235,
        hero: true,
        villain: false,
        allies: ['Batman','Supergirl','Superboy'],
        fly() {
            return 'Up, up and away!';
        }
    };

    //Access the name and add a Class List to it
    console.log(superman.name);
    let name = document.getElementById('heroName');
    name.textContent = superman.name;
    name.classList.add('bigger_font');

    //Access the key then add it to the HTML with a normal querySelector
    console.log(superman['real name']);
    document.querySelector('.identity').textContent = superman['real name'];

    //Call a function in an object and add a class attribute onto it.
    console.log(superman.fly())
    console.log(superman['fly']())
    let phrase = document.getElementById('phrase');
    phrase.textContent = superman.fly();
    phrase.setAttribute('class', 'phrase_style')

    //Testing Event Listener
    addEventListener('click', () => alert('You Clicked!'));
}

////////////////////////////////////////////////
//Function Exercise 1
//This function is a practice from the w3 resources website from problems 1 to 3.
// https://www.w3resource.com/javascript-exercises/javascript-object-exercises.php
///////////////////////////////////////////////
function exercise_one(object)
{
    //Problem 1: List out all the objects
        console.log(object)
        console.log(object.name)
        console.log(object.sclass)
        console.log(object.rollno)
        
        //Problem 2 Delete rollno
        delete object.rollno
        console.log(object)

        //Get object length
        console.log(Object.keys(object).length)
}

////////////////////////////////////////////////
//Function Exercise 3
//This function is a practice from the w3 resources website from problem 4.
// https://www.w3resource.com/javascript-exercises/javascript-object-exercises.php
///////////////////////////////////////////////
function exercise_two(object)
{
    for(let i = 0; i < object.length; i++){
        if(object[i].readingStatus == true){
            console.log(`You have read ${object[i].title} by ${object[i].author} already`)
        }
        else{
            console.log(`You have NOT read ${object[i].title} by ${object[i].author}`)
        }
    }
}

////////////////////////////////////////////////
//Function Exercise 3
//This function is a practice from the w3 resources website.
//It will respond to the onclick and add a class to a specific p tag.
///////////////////////////////////////////////
function js_style()
{
    let text = document.querySelector('#text')
    text.setAttribute('class', 'p_style')
}


function main(){
    footer_date()
    testing_object()

    let student = {
        name : "David Rayy",
        sclass : "VI",
        rollno : 12 ,

        sayHi(){
            alert(this.name)
        }
    
    };

    //Testing the this thing from the reading. 
    student.sayHi();


        exercise_one(student)
        

    var library = [ 
        {
            author: 'Bill Gates',
            title: 'The Road Ahead',
            readingStatus: true
        },
        {
            author: 'Steve Jobs',
            title: 'Walter Isaacson',
            readingStatus: true
        },
        {
                author: 'Suzanne Collins',
                title:  'Mockingjay: The Final Book of The Hunger Games', 
                readingStatus: false
        }];

        exercise_two(library);

        //Example COde of Event Listener

        // function doSomething(){
        //     console.log('Something Happened!');
        // }

        function doSomething(event){
            console.log(`screen: (${event.screenX},${event.screenY}), page: (${event.pageX},${event.pageY}), client: (${event.screenX},${event.screenY})`)
        }
        
        addEventListener('click', doSomething);

// const clickParagraph = document.getElementById('click');

// clickParagraph.addEventListener('click',() => console.log('click') );
// clickParagraph.addEventListener('mousedown',() => console.log('down') );
// clickParagraph.addEventListener('mouseup',() => console.log('up') );

// addEventListener('touchend', () => console.log('Touch stopped'));

const onceParagraph = document.getElementById('once');
onceParagraph.addEventListener('click', remove);

function remove() {
    console.log('Enjoy this while it lasts!');
    onceParagraph.style.backgroundColor = 'pink';
    onceParagraph.removeEventListener('click',remove);
}
}

main()