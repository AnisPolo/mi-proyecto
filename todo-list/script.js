"use strict";
function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
            <span onClick='toggleComplete(this)'>${taskText}</span>
            <div class='buttons'>
            <buttons onclick='deleteTask(this)'>Eliminar</button>
            <div>
            `;
            document.getElementById("taskList").appendChild(li);
        input.value = "";
         
}

}

function deleteTask(btn) {
    btn.closest('li').remove();
}

function toggleComplete(span) {
    span.classList.toggle('completed');
}