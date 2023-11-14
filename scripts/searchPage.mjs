import { nationalParksArray } from "./nationalParkData.mjs";
import { locationsArray } from "./locationData.mjs";
import { parkTypesArray } from "./parkTypeData.mjs";

window.onload = function() {
    //load the dropdown list
    initLocationListDropdown();
    initParkListDropdown();
    initParkTypeDropdown();
}

function convertArraytoDropdown(array, dropdown) {
    let length = array.length;
    for (let i = 0; i < length; i++) {
        let theOption = new Option(array[i],array[i]);
        dropdown.appendChild(theOption);
    }
}

function initLocationListDropdown() {
    const locationList = document.querySelector('#locationsList');
    convertArraytoDropdown(locationsArray, locationList);
}

function initParkTypeDropdown() {
    const parkTypeList = document.querySelector('#parkTypeList');
    convertArraytoDropdown(parkTypesArray, parkTypeList);
}

function initParkListDropdown() {
    const locationList = document.querySelector('#locationsList');
    const parkList = document.querySelector('#parkList');

    let length = nationalParksArray.length;

    locationList.onchange = function() {
        //clear the list
        parkList.options.length = 1;
        // add options to the list
        for (let i = 0; i < length; i++) {
            if (locationList.value == nationalParksArray[i].State) {
                let theOption = new Option(nationalParksArray[i].LocationName, nationalParksArray[i].LocationID);
                parkList.appendChild(theOption);
            }
        }
    }
}
