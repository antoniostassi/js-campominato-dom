
const start = document.getElementById("start");
const container = document.querySelector(".container");
let clickCount = 1;
const bombsContainer = [];
let gameStatus = true;

start.addEventListener("click", function() {

    const difficulty = document.getElementById("difficulty").value;
    container.innerHTML = "";
    generateBombs(difficulty);
    
    for (let i=0; i < difficulty; i++) {
        createNewElement("div", "square", container, "my-col-"+difficulty, i+1, "new-bg-square");
    }


});


function createNewElement(tagElement, classToAdd, appendTag, gameDifficulty, numberToDisplay, toggleClass){

    let newElement = document.createElement(tagElement);
    newElement.classList.add(classToAdd);
    newElement.classList.add(gameDifficulty);
    appendTag.append(newElement);
    newElement.innerHTML = numberToDisplay;

    newElement.addEventListener("click", function() {
    if (gameStatus) {
        
        newElement.classList.add(toggleClass);
        if (bombsContainer.includes(numberToDisplay)) {
            alert("HAI PERSO! PUNTEGGIO: " +clickCount);
            gameStatus = !gameStatus;
        } else if(clickCount == (gameDifficulty-90)) { 
            alert("HAI VINTO! PUNTEGGIO: " + clickCount);
            gameStatus = !gameStatus;
        } else {
            clickCount++;
        }
    }
        
    });

}


function generateBombs(difficulty) {

    for(let i=0; i<16; i) {

        let num = Math.floor(Math.random() * difficulty) + 1;

        if (!bombsContainer.includes(num)) {
            bombsContainer.push(num);
            i++;
        }

    }

    console.log(bombsContainer);
}
