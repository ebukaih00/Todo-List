const tasks = []


let listEl = document.querySelector(".list-container")


function addTask() {

    let input = document.getElementById("task-el")
    let taskEl = input.value

    tasks.push({
        text: taskEl
    })
    
    
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



function deleteTask(index){
     tasks.splice(index,1)
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