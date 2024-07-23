
let gameStatus = true;
let clickCount = 0;
let bombsContainer = [];

const start = document.getElementById("start");
const container = document.querySelector(".container");

start.addEventListener("click", function() {

    resetVariables();

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
            if (bombsContainer.includes(numberToDisplay)) {
                alert("HAI PERSO! PUNTEGGIO: " + clickCount);
                newElement.classList.add("new-bg-lose");
                gameStatus = !gameStatus;

            } else if(clickCount == (gameDifficulty-16)) { 
                alert("HAI VINTO! PUNTEGGIO: " + clickCount);
                gameStatus = !gameStatus;

            } else if(!newElement.classList.contains(toggleClass)) {
                clickCount++;
                newElement.classList.add(toggleClass);
            }
            console.log(clickCount);

        }
        
    });

}


function generateBombs(difficulty) {

    let i = 0;
    while (i < 16) {
        let num = Math.floor(Math.random() * difficulty) + 1;
        if (!bombsContainer.includes(num)) {
            bombsContainer.push(num);
            i++;
        }
    }
    // console.log(bombsContainer);
}


function resetVariables() {
    clickCount = 0;
    gameStatus = true;
    bombsContainer = [];
}