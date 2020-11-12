// CODE EXPLAINED channel

//Select the Elements
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");


// Classes names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

// Show todays date
const options = {weekday:"long", month:"short", day:"numeric"};
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);

// add toDo function

function addToDo(toDo){

    const item = 
        `
            <li class="item">
                <i class="fa fa-circle-thin co" job="complete" id="0"></i>
                <p class="text">${toDo}</p>
                <i class="fa fa-trash-o de" job="delete" id="0"></i>
            </li>
        `;

    const position = "beforeend";

    list.insertAdjacentHTML(position, item);
}

//add an item to the list when hitting enter key
document.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        const toDo = input.value;

        // if the input is not empty
        if(toDo){
            addToDo(toDo);
        }

        input.value = "";
    }


});