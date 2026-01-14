
let tasks = [];
let taskIdCounter = 1;


function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }
    
   
    const task = {
        id: taskIdCounter++,
        text: taskText,
        completed: false,
        createdAt: new Date()
    };
    
    tasks.push(task);
    taskInput.value = '';
    renderTasks();
    updateStats();
    updateCompletionSummary();
    updateEmptyState();
}


function removeTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    renderTasks();
    updateStats();
    updateCompletionSummary(); 
    updateEmptyState();
}


function toggleComplete(taskId) {
    tasks = tasks.map(task => {
        if (task.id === taskId) {
            return { ...task, completed: !task.completed };
        }
        return task;
    });
    renderTasks();
    updateStats();
    updateCompletionSummary(); 
}


function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = 'task-item';
        li.innerHTML = `
            <div class="task-content">
                <div class="task-checkbox ${task.completed ? 'checked' : ''}" 
                     onclick="toggleComplete(${task.id})">
                </div>
                <span class="task-text ${task.completed ? 'completed' : ''}">
                    ${task.text}
                </span>
            </div>
            <button class="delete-btn" onclick="removeTask(${task.id})">
                ×
            </button>
        `;
        taskList.appendChild(li);
    });
}


function updateStats() {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;
    
    document.getElementById('taskCount').textContent = `${totalTasks} tasks`;
    document.getElementById('completedCount').textContent = `${completedTasks} completed`;
}


function updateCompletionSummary() {
    const completionSummary = document.getElementById('completionSummary');
    const completedTasksCount = document.getElementById('completedTasksCount');
    const totalTasksCount = document.getElementById('totalTasksCount');
    
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;
    
  
    if (totalTasks > 0) {
        completionSummary.style.display = 'block';
        completedTasksCount.textContent = completedTasks;
        totalTasksCount.textContent = totalTasks;
    } else {
        completionSummary.style.display = 'none';
    }
    

    if (completedTasks === totalTasks && totalTasks > 0) {
        completionSummary.style.background = 'rgba(0, 128, 0, 0.2)';
        completionSummary.style.borderColor = '#00b894';
    } else {
        completionSummary.style.background = 'rgba(94, 8, 12, 0.7)';
        completionSummary.style.borderColor = '#5c3d3d';
    }
}


function updateEmptyState() {
    const emptyState = document.getElementById('emptyState');
    emptyState.style.display = tasks.length === 0 ? 'block' : 'none';
}

document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});


updateEmptyState();
updateCompletionSummary(); 