let button = document.querySelector('#submit');

function test()
{
    let name = document.querySelector("#name").value;
    let comment = document.querySelector("#comment").value;

    console.log(name)
    console.log(comment)
}

button.addEventListener('click', test)