const tasks = []


let listEl = document.querySelector(".list-container")




function addTask() {

    let taskEl = document.getElementById("task-el").value
    localStorage.setItem("tasks", JSON.stringify(tasks));

    tasks.push({
        text: taskEl
    })

    listEl.innerHTML = ""

    for (let i = 0; i < tasks.length; i++) {
        listEl.innerHTML += `
    
    <div class ="list-item">
    <p> ${tasks[i].text}</p>
    <button id = "delete-btn" onclick = "deleteTask()">Delete</button>
    </div>
    `
    }

}


function deleteTask(){
     tasks.remove
}