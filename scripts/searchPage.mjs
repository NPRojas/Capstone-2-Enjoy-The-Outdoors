import { nationalParksArray } from "./nationalParkData.mjs";
import { locationsArray } from "./locationData.mjs";
import { parkTypesArray } from "./parkTypeData.mjs";

window.onload = function() {
    //load the dropdown list
    initLocationListDropdown();
    initParkListDropdown();
    initParkTypeDropdown();
}

function initLocationListDropdown() {
    // dropdown of locationArray
    const locationList = document.querySelector('#locationsList');
    let locationLength = locationsArray.length;
    for (let i = 0; i < locationLength; i++) {
        let theOption = new Option(locationsArray[i], locationsArray[i]);
        locationList.appendChild(theOption);
    }
}

function initParkTypeDropdown() {
    const parkTypeList = document.querySelector('#parkTypeList');
    let length = parkTypesArray.length;
    for (let i = 0; i < length; i++) {
        let theOption = new Option(parkTypesArray[i], parkTypesArray[i]);
        parkTypeList.appendChild(theOption);
    }
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
