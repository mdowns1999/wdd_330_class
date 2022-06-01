'use strict';


function footer_date() {
    let date = new Date()
    let year = date.getFullYear()

    document.getElementById('year').textContent = year;
}


function main()
{
    footer_date()
}

main()