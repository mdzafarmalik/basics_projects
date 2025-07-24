// console.log("Hello, World!");
let todolist = [];
todolistdisplay();
function todoadd() {
    let todoInput = document.querySelector("#Input");
    if (!todoInput) return; // Check if input exists
    let todoItem = todoInput.value;
    console.log(todoItem);
    if (todoItem.length === 0) return; // Prevent adding empty items
    todolist.push(todoItem);
    // todoInput.value = ''; // Clear the input field after adding
    todolistdisplay();
}
function todolistdisplay() {
    let displayItem = document.querySelector(".display");
    if (!displayItem) return; // Check if display element exists
    // Clear previous items
    displayItem.innerText = ""; // Clear the display area before showing new items
    for (let i = 0; i < todolist.length; i++) {
        displayItem.innerText = displayItem.innerText + todolist[i] + "\n";
    } 
}
