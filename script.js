function complited() {
    let listItems = document.querySelectorAll('li');
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].addEventListener('click', function (event) {
            this.classList.toggle('mission complited');
        })
    };
};
complited();
function deleted() {
    let xButtons = document.querySelectorAll('span');
    for (let a = 0; a < xButtons.length; a++) {
        xButtons[a].addEventListener('click', function (event) {
            let deleteListItems = this.parentElement;
            deleteListItems.remove();
        })
    };
};
deleted();
let toDo = document.querySelector('input');
toDo.addEventListener('keypress', function(event){
    if(event.key === Enter){
       let newLi = document.createElement('li');
       newLi.innerHTML = toDo.value;
       let newSpan = document.createElement('span');
       newSpan.append();
       let newToDo = document.querySelector('ul');
       newToDo.insertBefore(newLi, newToDo.lastChild);
       complited();
       deleted();
       toDo.value = ''
    };
});
