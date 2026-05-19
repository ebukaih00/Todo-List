let tasks = []


let listEl = document.querySelector(".list-container")


tasks =  JSON.parse(localStorage.getItem("task")) || []

function addTask() {

    let input = document.getElementById("task-el")
    let taskEl = input.value
    let errorEl = document.getElementById("error-el")



    if (input.value.trim() === "") {
        errorEl.innerText = "Please enter a task! "
    }

    else {
        errorEl.innerText = ""
        listEl.innerHTML = ""
        input.value = ""
       
        tasks.push({
            text: taskEl
        })
         localStorage.setItem("task", JSON.stringify(tasks))

        for (let i = 0; i < tasks.length; i++) {
            listEl.innerHTML += `
    
    <div class ="list-item">
    <p> ${tasks[i].text}</p>
    <button id = "delete-btn" onclick = "deleteTask(${i})">Delete</button>
    </div>
    `

        }
        
    }

}



function deleteTask(index) {
    tasks.splice(index, 1)
    listEl.innerHTML = ""
   

    for (let i = 0; i < tasks.length; i++) {
        listEl.innerHTML += `
    
    <div class ="list-item">
    <p> ${tasks[i].text}</p>
    <button id = "delete-btn" onclick = "deleteTask(${i})">Delete</button>
    </div>
    `
    }
}