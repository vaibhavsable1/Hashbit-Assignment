function submitfn(event) {
    event.preventDefault(); // Prevent form submission
    
    const input = document.querySelector('.todo-input');
    const inputValue = input.value.trim(); // Remove whitespace from input
    
    if (inputValue !== '') {
        addTask(inputValue); // Add task to list
        input.value = ''; // Clear input field
    }
}

function addTask(taskName) {
    const todoList = document.querySelector('.todo-list');
    
    // Create todo item
    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');
    
    // Task name
    const taskText = document.createElement('span');
    taskText.textContent = taskName;
    todoItem.appendChild(taskText);
    
    // Complete button
    const completeButton = document.createElement('button');
    completeButton.classList.add('complete-btn');
    completeButton.textContent = 'Complete';
    completeButton.addEventListener('click', () => {
        taskText.classList.toggle('completed');
    });
    todoItem.appendChild(completeButton);
    
    // Delete button
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('trash-btn');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        todoItem.remove();
    });
    todoItem.appendChild(deleteButton);
    
    // Append todo item to list
    todoList.appendChild(todoItem);
}