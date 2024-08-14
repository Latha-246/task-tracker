document.getElementById('add-task-btn').addEventListener('click', addTask);
let tasks = [];
function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }
    const task = {
        id: Date.now(),
        text: taskText
    };
    tasks.push(task);
    taskInput.value = '';
    displayTasks();
}
function displayTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task.text}</span>
            <button class="edit-btn" onclick="editTask(${task.id})">Edit</button>
            <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}
function editTask(id) {
    const newTaskText = prompt('Edit your task:');
    if (newTaskText === null || newTaskText.trim() === '') return;

    tasks = tasks.map(task => task.id === id ? { ...task, text: newTaskText } : task);
    displayTasks();
}
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    displayTasks();
}
