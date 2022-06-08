'use strict';


function footer_date() {
    let date = new Date()
    let year = date.getFullYear()

    document.getElementById('year').textContent = year;
}

function readingCode() {
    //Allow a opo up
    const popup = window.open('https://sitepoint.com', 'SitePoint', 'width=400,height=400,resizable=yes');

    //use .close to close popup
    //popup.close()

    window.moveTo(0, 0)

    console.log(window.screen.height)
    console.log(window.screen.width)
    //document.write('<h1>Hello, world!</h1>');

    //An example of how to make a cookie expire
    const expiryDate = new Date();
    const tomorrow = expiryDate.getTime() + 1000 * 60 * 60 * 24;
    expiryDate.setTime(tomorrow);

    document.cookie = `name=Batman; expires=${ expiryDate.toUTCString()}`;

    window.setTimeout(() => alert("Time's Up!"), 300);

    //Use to cancel timer
    window.clearTimeout(5);

}

function animation() {
    const squareElement = document.getElementById('square');
    let angle = 0;

    function rotate() {
        angle = (angle + 2) % 360;
        squareElement.style.transform = `rotate(${angle}deg)`
        window.requestAnimationFrame(rotate);
    }

    const id = requestAnimationFrame(rotate);
}

function drawShapesonCanvas() {
    const canvasElement = document.getElementById('canvas'); //Target Canvas
    const context = canvasElement.getContext('2d'); //Access context

    context.fillStyle = "#0000cc"; // a blue fill color 
    context.strokeStyle = "#ccc"; // a gray stroke color
    context.lineWidth = 4;
    context.fillRect(10, 10, 100, 50); //Color rectangle
    context.strokeRect(10, 100, 100, 50); //Make border of rectangle

    //Make T
    context.beginPath();
    context.moveTo(130, 50);
    context.lineTo(180, 50);
    context.moveTo(155, 50);
    context.lineTo(155, 90);
    context.strokeStyle = '#c00';
    context.lineWidth = 15;
    context.stroke();

    //Draw Arc
    context.beginPath();
    context.arc(200, 200, 30, 0, Math.PI * 2, false);
    context.strokeStyle = '#ff0';
    context.lineWidth = 4;
    context.stroke();

    //Draw Text
    context.fillStyle = '#0c0'; // a blue fill color
    context.font = 'bold 26px sans-serif';
    context.fillText('Hello', 20, 200);


}

function main() {
    footer_date();
    readingCode();
    animation();

    //Window Prompts

    window.alert('Hello');
    window.confirm('Do you wish to continue?');
    console.log(window.location.href)

    if (window.Notification) {
        Notification.requestPermission()
            .then((permission) => {
                if (Notification.permission === 'granted') {
                    new Notification('Hello JavaScript!');
                }
            });
    }

    drawShapesonCanvas();
}


main()