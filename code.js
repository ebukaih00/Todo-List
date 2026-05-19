let tasks = []

let listEl = document.querySelector(".list-container")




tasks = JSON.parse(localStorage.getItem("task")) || []

function addTask() {

    let input = document.getElementById("task-el")
    let taskEl = input.value
    let errorEl = document.getElementById("error-el")



    if (input.value.trim() === "") {
        errorEl.innerText = "Enter a task in the input field to add "
    }

    else {
        errorEl.innerText = ""

        input.value = ""

        tasks.push({
            text: taskEl,
            isCompleted: false
        })
        localStorage.setItem("task", JSON.stringify(tasks))

        renderTask()

    }

}


function deleteTask(index) {
    tasks.splice(index, 1)

    localStorage.setItem("task", JSON.stringify(tasks))

    renderTask()

}


function renderTask() {
    listEl.innerHTML = ""

    
    for (let i = 0; i < tasks.length; i++) {
        let checkedAttribute = tasks[i].isCompleted ? "checked" : ""
    let completedClass = tasks[i].isCompleted ? "strike-through" : ""
        listEl.innerHTML += `
    
    <div class ="list-item">
    <div class = "leading-items">
    <input type="checkbox" ${checkedAttribute} onclick="toggleComplete(${i})">
<p class="${completedClass}"> ${tasks[i].text}</p>
    </div>
    
    <button id = "delete-btn"   onclick = "deleteTask(${i})"> <i class="fa-solid fa-trash"></i></button>
    </div>
    `
    }
}

function toggleComplete(index) {
    tasks[index].isCompleted = !tasks[index].isCompleted // Flips true to false, or false to true
    localStorage.setItem("task", JSON.stringify(tasks))
    renderTask()
}


renderTask()
