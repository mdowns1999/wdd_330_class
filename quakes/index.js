import { getJSON, getLocation } from "./utilites.js";
let latitude = ''
function testGetQuakesForLocation() {
    // call the getLocation function to get the lat/long
    let latLong = getLocation();
    console.log(latLong)

    latLong.then(
        object => {console.log(object),
        latitude = object.coords.latitude,
    console.log(latitude) }
    )
    
    // use that information to build out the correct URL

    


    //const geoUrl = baseUrl + // add location information here
    // use the url to request the correct quakes 
  
    //log out the quakes for now.
  }

  testGetQuakesForLocation()