
const start = document.getElementById("start");
const container = document.querySelector(".container");

start.addEventListener("click", function() {

    const difficulty = document.getElementById("difficulty").value;
    container.innerHTML = "";
    
    for (let i=0; i < difficulty; i++) {
        console.log("Create "+i);
        createNewElement("div", "square", container, "my-col-"+difficulty, i+1, "new-bg-square");
    }

});


function createNewElement(tagElement, classToAdd, appendTag, gameDifficulty, numberToDisplay, toggleClass){

    let newElement = document.createElement(tagElement);
    newElement.classList.add(classToAdd);
    newElement.classList.add(gameDifficulty);
    appendTag.append(newElement);

    newElement.addEventListener("click", function() {
        newElement.classList.toggle(toggleClass);
    });

    newElement.innerHTML = numberToDisplay;

}