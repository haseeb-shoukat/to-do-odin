const createElement = function (obj) {
  let element = document.createElement(obj.tag);

  if ("attr" in obj) {
    let attrObj = obj.attr;
    for (let [key, value] of Object.entries(attrObj)) {
      element.setAttribute(key, value);
    }
  }

  if (obj.classList != undefined) {
    element.classList.add(...obj.classList);
  }

  if ("text" in obj) {
    element.textContent = obj.text;
  }

  return element;
};

// const createTasks = function (tasks) {
//   let tasksHolder = createElement({
//     tag: "div",
//     class: "tasks-container",
//   });

//   let items = "";
//   let i = 0;
//   tasks.forEach((task) => {
//     let p = task.priority;
//     let color = "";

//     if (p === "low") {
//       color = "task-blue";
//     } else if (p === "medium") {
//       color = "task-yellow";
//     } else {
//       color = "task-red";
//     }

//     const item = `<div id="${i}" class="${color} task">
//                         <div class="task-title">${task.title}</div>
//                         <div class="task-due-date">${task.dueDate}</div>
//                         <i class="fa fa-times sm remove-task"></i>
//                     </div>
//                     <div class="hidden">
//                         <div class="task-description"><span class="bold">Details:</span> ${task.description}</div>
//                         <div class="task-priority"><span class="bold">Priority:</span> ${task.priority}</div>
//                         <button class="edit-task">Edit Details</button>
//                     </div>`;
//     items += item;
//     i += 1;
//   });
//   tasksHolder.innerHTML = items;
//   return tasksHolder;
// };


const createTasks = function (tasks) {
    let tasksHolder = createElement({
      tag: "div",
      class: "tasks-container",
    });

    tasks.forEach((task) => {
      let p = task.priority;
      let color = "";
  
      if (p === "low") {
        color = "task-blue";
      } else if (p === "medium") {
        color = "task-yellow";
      } else {
        color = "task-red";
      }
  
      const visible = createElement({
        tag: "div",
        classList: [color, "task"]
      });
      
      visible.append(createElement({
        tag: "div",
        classList: ["task-title"],
        text: task.title,
      }), createElement({
        tag: "div",
        classList: ["task-due-date"],
        text: task.dueDate,
      }), createElement({
        tag: "i",
        classList: ["fa", "fa-times", "sm", "remove-task"]
      }));
                      
      const hidden = createElement({
        tag: "div",
        classList: ["hidden"]
      });

      const description = createElement({
        tag: "div",
        classList: ["task-description"]
      });

      description.innerHTML = `<span class="bold">Details:</span> ${task.description}`

      const priority = createElement({
        tag: "div",
        classList: ["task-priority"]
      });

      priority.innerHTML = `<span class="bold">Priority:</span> ${task.priority}`

      const editBtn = createElement({
        tag: "button",
        classList: ["edit-task"],
        text: "Edit Details"
      });
      
      hidden.append(description, priority, editBtn);

      tasksHolder.append(visible, hidden);
    });
  
    return tasksHolder;
  };

export { createElement, createTasks };
