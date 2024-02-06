function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const taskText = taskInput.value.trim();

        // Create a new list item
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <input type="checkbox" onclick="toggleCompleted(this)">
            <span>${taskText}</span>
            <button onclick="removeTask(this)">Remove</button>
        `;

        // Add the list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
    }
}

function removeTask(button) {
    const listItem = button.parentElement;
    const taskList = listItem.parentElement;

    // Remove the list item from the task list
    taskList.removeChild(listItem);
}

function toggleCompleted(checkbox) {
    const listItem = checkbox.parentElement;

    // Toggle the 'completed' class on the list item
    listItem.classList.toggle('completed');
}

function clearCompleted() {
    const completedItems = document.querySelectorAll('.completed');

    // Remove all completed items
    completedItems.forEach(item => item.remove());
}
