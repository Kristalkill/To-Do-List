
//get all needed to add new tasks to list

const add_task = document.getElementById('add-task-button');
const task_list = document.getElementById('task-list');
const task_input = document.getElementById('input-task');

//checking if task_input is empty, if not enable button
task_input.addEventListener('input', () => add_task.disabled = task_input.value.length < 0);

//adding new task to list
add_task.addEventListener('click', () => {
    //create span
    const span = document.createElement('span')
    span.className = "task"
    span.innerHTML = task_input.value

    //create input
    const input = document.createElement('input')
    input.type = "checkbox";
    input.className = "checkbox";

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
    task_input.value = ''
    add_task.disabled = true

    button.addEventListener('click', () => li.remove())

})
