import { mountainsArray } from "./mountainData.mjs";

window.onload = function() {
    const mountainList = document.querySelector('#mountainList');

    //load the dropdown list
    initParkListCards();
}

function initParkListCards() {
    const locationList = document.querySelector('#locationsList');
    const articles = document.querySelector('.articles');

        // clear the article div
        articles.textContent = '';

        let displayCardNum = 0;
        let rowNum = 0;
        let row;

        mountainsArray.forEach((element) => {
                
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
                lineOne.textContent = element.name;
                const lineTwo = document.createElement('p');
                lineTwo.textContent = `Effort: ${element.effort}`;
                const lineThree = document.createElement('p');
                lineThree.textContent = element.desc;
                displayCard.append(img,lineOne,lineTwo,lineThree);

                row.appendChild(displayCard);
                displayCardNum++;

            
        });
    
}
