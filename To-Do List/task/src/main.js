//get all needed to add new tasks to list
const add_task = document.getElementById('add-task-button');
const task_list = document.getElementById('task-list');
const task_input = document.getElementById('input-task');

let taskList = JSON.parse(localStorage.getItem("tasks")) || [];

function addTask(text, enabled = false) {
    //create span
    const span = document.createElement('span')
    span.className = "task"
    span.innerHTML = text

    //create input
    const input = document.createElement('input')
    input.type = "checkbox";
    input.className = "checkbox";
    input.checked = enabled
    //create button
    const button = document.createElement('button')
    button.className = "delete-btn"

    //create label
    const label = document.createElement('label')
    label.append(input, span, button)

    //create li
    const li = document.createElement('li')
    li.append(label)

    task_list.append(li);
    input.addEventListener('change', function() {
        taskList = taskList.map(u => u.text !== text ? u : {
            enabled: this.checked,
            text: text
        });
        localStorage.setItem("tasks", JSON.stringify(taskList))
    })
    button.addEventListener('click', () => {
        taskList = taskList.filter(x => x.text !== span.innerHTML)
        localStorage.setItem("tasks", JSON.stringify(taskList))
        li.remove()
    })
}

for (const task of taskList) {
  addTask(task.text, task.enabled)
}
//checking if task_input is empty, if not enable button
task_input.addEventListener('input', () => add_task.disabled = task_input.value.length < 0);

//adding new task to list
add_task.addEventListener('click', () => {
    addTask(task_input.value)
    taskList.push({
        enabled: false,
        text: task_input.value
    })
    localStorage.setItem("tasks", JSON.stringify(taskList))
})
