import { nationalParksArray } from "./nationalParkData.mjs";
import { locationsArray } from "./locationData.mjs";
import { parkTypesArray } from "./parkTypeData.mjs";

window.onload = function() {
    //load the dropdown list
    // initSearchFilter();
    const locationList = document.querySelector('#locationsList');
    const parkTypeList = document.querySelector('#parkTypeList');
    initLocationListDropdown();
    locationList.onclick = () => parkTypeList.selectedIndex = 0;

    initParkTypeDropdown();
    parkTypeList.onclick = () => locationList.selectedIndex = 0;
    
    initParkListDropdown();

}

function initSearchFilter() {
    const radioBtnContainer = document.querySelector('#radioBtnContainer');
    
    radioBtnContainer.addEventListener('change', function (e) {
        const locationRadio = document.querySelector('#location');
        const parkTypeRadio = document.querySelector('#parkType');
        const locationList = document.querySelector('#locationsList');
        const parkTypeList = document.querySelector('#parkTypeList');

        if (e.target === locationRadio) {
            parkTypeList.options.length = 1;
            initLocationListDropdown();
            // parkTypeList.style.display = 'none';
            // locationList.style.display = 'block';
        } else if (e.target === parkTypeRadio) {
            locationList.options.length = 1;
            initParkTypeDropdown();
            // locationList.style.display = 'none';
            // parkTypeList.style.display = 'block';
        }
    initParkListDropdown();
    });
}

function convertArraytoDropdown(array, dropdown) {
    let length = array.length;
    dropdown.options.length = 1;

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
    // const radioBtnContainer = document.querySelector('#radioBtnContainer');
    const locationList = document.querySelector('#locationsList');
    const parkTypeList = document.querySelector('#parkTypeList');
    const parkList = document.querySelector('#parkList');

    let parksArrayLength = nationalParksArray.length;

    locationList.onchange = function() {
        //clear the list
        parkList.options.length = 1;
        // add options to the list
        for (let i = 0; i < parksArrayLength; i++) {

            if (locationList.value == nationalParksArray[i].State) {
                let theOption = new Option(nationalParksArray[i].LocationName, nationalParksArray[i].LocationID);
                parkList.appendChild(theOption);
            }
        }
    }

    parkTypeList.onchange = function() {
        parkList.options.length = 1;

        for (let i = 0; i < parksArrayLength; i++) {
            if(nationalParksArray[i].LocationName.includes(parkTypeList.value)) {
                let theOption = new Option(nationalParksArray[i].LocationName, nationalParksArray[i].LocationID);
                parkList.appendChild(theOption);
            }

        }
    }
}

function constructDisplayCard(arrayItem) {
    
}