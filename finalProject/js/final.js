'use strict';
import {getJson} from "./fetch.js";


function footer_date() {
    let date = new Date()
    let year = date.getFullYear()

    document.getElementById('year').textContent = year;
}



function main()
{
    footer_date();
    let api = "https://api.openweathermap.org/data/2.5/forecast?lat=43.826073&lon=-111.789536&appid=c2e08ce85fa8ed0115b03b7b5575df7f" //Rexburg
    console.log(api)
    getJson(api)

    

    // addForecast(object)



}


main()