console.log("TODO-APP.....MADE BY SAMIRAN SAMANTA......\n THANK YOU FOR USING.....");

let todoContainer = document.querySelector('#todoCont');
let addButton = document.querySelector('#addBtn');
let input = document.querySelector('#input');
addButton.addEventListener('click', () => {
    let data = input.value;
    if (data === "") {
        alert("PLEASE ENTER TODO 1ST");
    }
    else {
        let task = document.createElement('li');
        task.textContent = data;
        todoContainer.appendChild(task);
        let delIcon = document.createElement('span');
        delIcon.textContent = '\u00d7'
        task.appendChild(delIcon);
        saveDataLocalStorage();
    }
    input.value = "";
})

// // Check or delete tasks functions.........
todoContainer.addEventListener('click', (elm) => {
    if (elm.target.tagName === 'LI') {
        elm.target.style.backgroundColor = 'green';
        saveDataLocalStorage()
    }
    if (elm.target.tagName === 'SPAN') {
        elm.target.parentElement.remove();
        saveDataLocalStorage();
    }
});

// // Save data on local storage.....
function saveDataLocalStorage() {
    localStorage.setItem("Task", todoContainer.innerHTML);
}
// // After reload the page show the previous data........
function showPrevData() {
    todoContainer.innerHTML = localStorage.getItem('Task');
}
showPrevData();