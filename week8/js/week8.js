'use strict';


function footer_date() {
    let date = new Date()
    let year = date.getFullYear()

    document.getElementById('year').textContent = year;
}

function drawCanvas()
{
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    context.strokeStyle = "red"; //For Border
    context.fillStyle = "blue";  //For Inside
    context.fillRect(10, 10, 100, 100);   
    context.strokeRect(10, 10, 100, 100);
}

function drawCircle(canvas) {
    var context = canvas.getContext("2d");
    context.beginPath();
    context.arc(100, 100, 50, 0, Math.PI*2, true);
    context.closePath();
    context.strokeStyle = "red";
    context.fillStyle = "blue";
    context.lineWidth = 3;
    context.fill(); 
    context.stroke(); 
}

function drawImageToCanvas() {
    var canvas = document.getElementById("demo6");
    var context = canvas.getContext("2d");
    var image = document.getElementById("myImageElem");
    context.drawImage(image, 0, 0); 
}



function main()
{
    footer_date();
    //drawCanvas();
    //drawCircle();

    drawImageToCanvas();
    determineLocation();

    window.addEventListener("load", drawImageToCanvas, false);
}

main()