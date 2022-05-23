import Storage from "./ls.js";
const storage = new Storage();
'use strict';
let list = []
/* ***********************************
FUNCTION: FOOTER DATE:
GET CURRENT YEAR FOR PAGE FOOTER
****************************************/
function footer_date() {
    let date = new Date()
    let year = date.getFullYear()

    document.getElementById('year').textContent = year;
}

/* ***********************************
FUNCTION: DISPLAY COMPLETED:
DISPLAY COMPLETED ITEMS
****************************************/
function displayCompleted()
{
    let object = storage.getStorage()
    clearList()

    for(let i = 0; i < object.length; i++)
            {
                if (object[i].completed == true)
                {
                    let li = document.createElement('li')
                    li.textContent = object[i].content;
                    let list = document.querySelector(".todo_list")
                    list.appendChild(li)

                }
            }
}

/* ***********************************
FUNCTION: DISPLAY ACTIVE:
DISPLAY ACTIVE ITEMS
****************************************/
function displayActive()
{
    let object = storage.getStorage()
    clearList()

    for(let i = 0; i < object.length; i++)
            {
                if (object[i].completed == false)
                {
                    let li = document.createElement('li')
                    li.textContent = object[i].content;
                    let list = document.querySelector(".todo_list")
                    list.appendChild(li)

                }
            }
}

/* ***********************************
FUNCTION: CLEAR LIST
CLEAR LIST
****************************************/
function clearList()
{
let li = document.querySelectorAll('li');
    li.forEach((item) => {
        item.remove();
    })
}


/* ***********************************
FUNCTION: DISPLAY EXSITING LIST:
DISPLAY LIST FROM LOCAL STORAGE
****************************************/
function displayExsitingList()
{
    let object = storage.getStorage();
    //console.table(object)
    clearList()

    for(let i = 0; i < object.length; i++)
    {
    let list = document.querySelector(".todo_list")



    //////////////Get the input value//////////////////////////////
    let input_value = object[i].content;

    //////////////Create things needed for a list Item//////////////////////////////
    let list_item = document.createElement('li');
    let list_button = document.createElement('button');
    let list_text = document.createElement('span');

    //////////////Add it to the list//////////////////////////////

    list_item.appendChild(list_text);
    list_text.textContent = input_value;
    if (object[i].completed == true)
    {
    list_item.setAttribute('class', 'strike')
    }
    
    //////////////Add Button to list item//////////////////////////////
    list_item.appendChild(list_button)
    list_button.textContent = "X"; 
    list_button.setAttribute('class', 'itemButton')

    //////////////Add list item to list//////////////////////////////
    list.appendChild(list_item);

    ////////////////This function will delete the user's item////////////////////
    list_button.addEventListener('click', function () {
        //list.removeChild(list_item);
        list_item.setAttribute('class', 'strike')

        //Get Object
        let object = storage.getStorage();

        //Mark Item Completed
        markItemCompleted(object, input_value)

        //Count Items in List
        countItemsinList()
    })

    }

    return object; //Return th eobject to keep it the same?

}

/* ***********************************
FUNCTION: MARK ITEMS COMPLETED ON PAGE:
ADD ITEMS TO THE LIST ON THEPAGE
****************************************/
function markItemCompleted(object, input_value)
{
            //Find the object item that was crossed out and mark it True
            for(let i = 0; i < object.length; i++)
            {
                if (object[i].content == input_value)
                {
                    object[i].completed = true;
                    //console.log(object[i]);
                    //console.table(object)
                }
            }
            //console.table(object)
            storage.setStorage(object)
}

/* ***********************************
FUNCTION: COUNT ITEMS IN LIST:
COUNT ITEMS OF THE LIST ON THE PAGE
****************************************/
function countItemsinList()
{
    let todo = document.querySelector('.todo_list');
    let count = todo.childElementCount;
    document.getElementById('count').textContent = `Count: ${count}`
}

/* ***********************************
FUNCTION: ADD LIST ITEMS:
ADD ITEMS TO THE LIST ON THEPAGE
****************************************/
function addListItems(object_list)
{
    object_list = displayExsitingList()
    //console.table(object_list)
let button = document.querySelector(".toDoBtn")
let input = document.querySelector("input")
let list = document.querySelector(".todo_list")

button.addEventListener('click', function () {

    //////////////Get the input value//////////////////////////////
    let input_value = input.value;

    //Reset input box after item is added
    input.value = '';
    //////////////Create things needed for a list Item//////////////////////////////
    let list_item = document.createElement('li');
    let list_button = document.createElement('button');
    let list_text = document.createElement('span');

    //////////////Add it to the list//////////////////////////////

    list_item.appendChild(list_text);
    list_text.textContent = input_value;
    // list_item.setAttribute('class', 'list_item')

    //////////////Add Button to list item//////////////////////////////
    list_item.appendChild(list_button)
    list_button.textContent = "X"; 
    list_button.setAttribute('class', 'itemButton')

    //////////////Add list item to list//////////////////////////////
    list.appendChild(list_item);


    ////////////////This function will delete the user's item////////////////////
    list_button.addEventListener('click', function () {
        //list.removeChild(list_item);
        list_item.setAttribute('class', 'strike')

        //Get Object
        let object = storage.getStorage();

        //Mark Item Completed
        markItemCompleted(object, input_value)

        //Count Items in List
        countItemsinList()
    })
    //Count Items in List
    countItemsinList()

storage.createObject(input_value, object_list)

})
}

/* ***********************************
FUNCTION: MAIN:
Begin calling To DO list script
****************************************/
function main() {
    footer_date()
    storage.createObject('Start Adding to List!', list)
    addListItems(list)


    //Different Listenrs to Filter out results
    let completed = document.querySelector("#completed");
    completed.addEventListener("click", displayCompleted);

    let active = document.querySelector("#active");
    active.addEventListener("click", displayActive);

    let all = document.querySelector("#all");
    all.addEventListener("click", displayExsitingList);
}

main()

