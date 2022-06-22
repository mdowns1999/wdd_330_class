'use strict';
import {getJson} from "./fetch.js";
import Storage from "./storage.js";

/*****************************************
 * FOOTER DATE
 * Display current year on page
 * ***************************************/
function footer_date() {
    let date = new Date()
    let year = date.getFullYear()

    document.getElementById('year').textContent = year;
}

/*****************************************
 * RETRIVE URL
 * Get the Url from Local Storage
 * ***************************************/
function retriveUrl()
{
    let api = "https://api.openweathermap.org/data/2.5/forecast?lat=43.826073&lon=-111.789536&appid=c2e08ce85fa8ed0115b03b7b5575df7f" //Rexburg
    console.log(api)
    return api;
}

/*****************************************
 * MAIN
 * Start the program
 * ***************************************/
function main()
{
    footer_date();
    let url = retriveUrl();
    getJson(url);

}


main()