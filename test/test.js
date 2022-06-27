// let button = document.querySelector('#submit');

// function test()
// {
//     console.log('Hello')
// }
// let value = button.addEventListener('click', true)
// console.log(value)
// if(value === true)
// {
//     console.log(hello)
// }

function setStorage(value1)
{
    let value = localStorage.setItem("TEST", value1);
}

function update() {
    var select = document.getElementById('city_dropdown');
    var option = select.options[select.selectedIndex];
    console.log(option.value)
    setStorage(option.value)
    document.getElementById('value').value = option.value;
    document.getElementById('text').value = option.text;
}

update()

console.log("HELLO")

