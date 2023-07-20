const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    if (inputBox.value === '') {
        // alert('You must write something!');
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

function reset(){
    document.getElementById("list-container").innerHTML = '';  
}

inputBox.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
        addTask();
    }
});

listContainer.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// function saveData() {
//     localStorage.setItem('data', listContainer.innerHTML);
// }

// function showList() {
//     listContainer.innerHTML = localStorage.getItem('data');
// }

inputBox.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) { // Enter klavishasi kodi: 13
        addTask();
    }
});


window.onload = function() {
    localStorage.setItem("list-container", $('#list-container').val());
}