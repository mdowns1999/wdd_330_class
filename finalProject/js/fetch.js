// export function addForecast(jsObject)
// {
//     let temp = convertToFaherheit(jsObject.list[0].main.temp)
    
// }

function convertToFaherheit(temp)
{
    return ((temp - 273.15)* 1.8000 + 32.00).toFixed(1);
}


function addWeather(array, iconsrc, date)
{
    let forecastBox = document.querySelector("#forecast_box");
    forecastBox.innerHTML = 
    `<div class="day_box">
    <h3 id="date"> ${date.getMonth()}/${date.getDate()}</h3>
        <img src="${iconsrc[0]}" class = "fiveDayIcon">
        <p><span>${array[0]}</span> &deg;F</p>
    </div>

    <div class="day_box">
        <h3 id="date">${date.getMonth()}/${date.getDate() + 1} </h3>
        <img src="${iconsrc[1]}" class = "fiveDayIcon">
        <p><span>${array[1]}</span> &deg;F</p>
    </div>

    <div class="day_box">
        <h3 id="date">${date.getMonth()}/${date.getDate() + 2} </h3>
        <img src="${iconsrc[2]}" class = "fiveDayIcon">
        <p><span>${array[2]}</span> &deg;F</p>
    </div>

    <div class="day_box">
        <h3 id="date">${date.getMonth()}/${date.getDate() + 3} </h3>
        <img src="${iconsrc[3]}" class = "fiveDayIcon">
        <p><span>${array[3]}</span> &deg;F</p>
    </div>

    <div class="day_box">
        <h3 id="date">${date.getMonth()}/${date.getDate() + 4} </h3>
        <img src="${iconsrc[4]}" class = "fiveDayIcon">
        <p><span>${array[4]}</span> &deg;F</p>
    </div>`;
}

function addTodayWeather(tempArray, iconArray)
{
    let forecastBox = document.querySelector("#day_forecast");
    forecastBox.innerHTML = 
    `            <h1 id="dailyHeading">Today's Forecast</h1>

    <img src="${iconArray[0]}" alt="Weather Icon" id="todayIcon">

    <div id="weatherInfo">
    <p id="weatherTemp">Temperature: ${tempArray[0]}</p>
    <p id="weatherDesc">Description: ${tempArray[0]}</p>
    <p id="weatherWind">Wind Speed: ${tempArray[0]}</p>
    
    </div>`;
}

function getTempList(jsObject)
{
    //NOTE THERE IS 8 SPACES IMBETWEEN DAYS
    let arrayTemp = []
    let count = 0;
        for(let tem in jsObject.list)
        {
            //Generate Each days temps
            if (count == 0 || count == 8 || count == 16 || count == 24 || count == 32)
                {
                    let tempF = convertToFaherheit(jsObject.list[tem].main.temp)
                    arrayTemp.push(tempF)                   
                }
            count ++;
        }   
        return arrayTemp;
}

function getIconList(jsObject)
{
    //NOTE THERE IS 8 SPACES IMBETWEEN DAYS
    let arrayIcon = []
    let count = 0;
        for(let pic in jsObject.list)
        {
            //Generate Each days temps
            if (count == 0 || count == 8 || count == 16 || count == 24 || count == 32)
                {
                    let iconPic = `https://openweathermap.org/img/w/${jsObject.list[pic].weather[0].icon}.png`
                    arrayIcon.push(iconPic)                   
                }
            count ++;
        }   
        return arrayIcon;
}

function displayDates()
{
    let date = document.querySelector("#date");
    let day = new Date().getDate() + 1;
    date.textContent = day;
}
export function getJson(url)
{
    return fetch(url)
    .then(response =>response.json())
    .then(jsObject => {
        const iconsrc= `https://openweathermap.org/img/w/${jsObject.list[0].weather[0].icon}.png`

        //Get Array of Temp
        let arrayTemp = getTempList(jsObject);
        //console.table(arrayTemp)

        let arrayIcon = getIconList(jsObject);
        console.table(arrayIcon)

        let date = new Date()
        addWeather(arrayTemp, arrayIcon, date);
        addTodayWeather(arrayTemp, arrayIcon);
        //displayDates();

    }
    
   )

}
