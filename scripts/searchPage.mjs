import { nationalParksArray } from "./nationalParkData.mjs";
import { locationsArray } from "./locationData.mjs";
import { parkTypesArray } from "./parkTypeData.mjs";

window.onload = function() {
    const locationList = document.querySelector('#locationsList');
    const parkTypeList = document.querySelector('#parkTypeList');

    //load the dropdown list
    initLocationListDropdown();
    locationList.onclick = () => parkTypeList.selectedIndex = 0;

    initParkTypeDropdown();
    parkTypeList.onclick = () => locationList.selectedIndex = 0;
    
    initParkListCards();

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

function initParkListCards() {
    const locationList = document.querySelector('#locationsList');
    const parkTypeList = document.querySelector('#parkTypeList');
    const articles = document.querySelector('.articles');

    locationList.onchange = function() {
        // clear the article div
        articles.textContent = '';

        let displayCardNum = 0;
        let rowNum = 0;
        let row;

        nationalParksArray.forEach((element) => {

            if (locationList.value == element.State) {
                
                if (displayCardNum % 3 === 0) {
                    rowNum++;
                    row = document.createElement('div');
                    row.setAttribute('class', `row-${rowNum}`);
                    articles.appendChild(row);
                }
                                
                const displayCard = document.createElement('div');
                displayCard.setAttribute('class', 'displayCard');
                const img = document.createElement('img');
                img.setAttribute('class', 'cardImg');
                const lineOne = document.createElement('p');
                lineOne.textContent = element.LocationName;
                const lineTwo = document.createElement('p');
                lineTwo.textContent = element.Address;
                const lineThree = document.createElement('p');
                lineThree.textContent = `${element.City}, ${element.State}, ${element.ZipCode}`;
                displayCard.append(img,lineOne,lineTwo,lineThree);

                row.appendChild(displayCard);
                displayCardNum++;

            }
        });
    }

    parkTypeList.onchange = function() {
         // clear the article div
         articles.textContent = '';

         let displayCardNum = 0;
         let rowNum = 0;
         let row;

        nationalParksArray.forEach((element) => {

            if (element.LocationName.includes(parkTypeList.value)) {

                if (displayCardNum % 3 === 0) {
                    rowNum++;
                    row = document.createElement('div');
                    row.setAttribute('class', `row-${rowNum}`);
                    articles.appendChild(row);
                }
                                
                const displayCard = document.createElement('div');
                displayCard.setAttribute('class', 'displayCard');
                const img = document.createElement('img');
                img.setAttribute('class', 'cardImg');
                const lineOne = document.createElement('p');
                lineOne.textContent = element.LocationName;
                const lineTwo = document.createElement('p');
                lineTwo.textContent = element.Address;
                const lineThree = document.createElement('p');
                lineThree.textContent = `${element.City}, ${element.State}, ${element.ZipCode}`;
                displayCard.append(img,lineOne,lineTwo,lineThree);

                row.appendChild(displayCard);
                displayCardNum++;
            }
        });
    }
}

