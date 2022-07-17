const createElement = function(obj) {
    let element = document.createElement(obj.tag)

    if ("attr" in obj) {
        let attrObj = obj.attr
        for (let [key, value] of Object.entries(attrObj)) {
            element.setAttribute(key, value);
        }
    }

    if (obj.classList != undefined) {
        element.classList.add(...obj.classList)
    }

    if ("text" in obj) {
        element.textContent = obj.text
    }

    return element
}

const createTasks = function(tasks) {
    let tasksHolder = createElement({
        tag:"div",
        class: "tasks-container",
    });

    let items = "";
    tasks.forEach(task => {
        let p = task.priority;
        let color = "";

        if (p === "low") { color="task-blue" } 
        else if (p === "medium") { color="task-yellow" }
        else { color = "task-red" }

        const item = `<div class="${color} task">
                        <div class="task-title">${task.title}</div>
                        <div class="task-due-date">${task.dueDate}</div>
                        <i class="fa fa-times sm"></i>
                    </div>
                    <div class="hidden">
                        <div class="task-description">Details: ${task.description}</div>
                        <div class="task-priority">Priority: ${task.priority}</div>
                        <button class="edit-task">Edit Details</button>
                    </div>`;
        items += item;
    })
    tasksHolder.innerHTML = items;
    return tasksHolder;
}

export {
    createElement, createTasks
}