import { createElement } from "./createElement.js"

const projectForm = function() {

    const buttons = createElement({
        tag: "div",
        classList: ["p-form-buttons"], 
    })

    const cancelBtn = createElement({
        tag: "button",
        text: "Cancel",
        classList: ["cancel-btn"], 
    })


    cancelBtn.addEventListener("click", e =>{
        document.querySelector(".overlay").remove();
    })
    
    buttons.append( cancelBtn, createElement({
        tag: "button",
        text: "Okay",
        classList: ["submit-btn"], 
    }))

    const projectForm = createElement({
        tag: "div",
        classList: ["project-form"], 
    })
    
    projectForm.append(createElement({
        tag: "div",
        text: "Create New Project",
        classList: ["p-form-heading"], 
    }), 
    
    createElement({
        tag: "input",
        attr:{
            type : "text",
            placeholder: "Project Name",
        },
        classList: ["p-form-text"], 
    }), buttons)

    let overlay = createElement({
        tag: "div",
        classList: ["overlay"], 
    })
    
    overlay.append(projectForm);

    return overlay;
}

const taskForm = function() {

    const buttons = createElement({
        tag: "div",
        classList: ["t-form-buttons"], 
    })

    const cancelBtn = createElement({
        tag: "button",
        text: "Cancel",
        classList: ["cancel-btn", "b"], 
    })

    cancelBtn.addEventListener("click", e =>{
        document.querySelector(".overlay").remove();
    })
    
    buttons.append( cancelBtn, createElement({
        tag: "button",
        text: "Create",
        attr: {for: "task-form"},
        classList: ["t-submit-btn", "b"], 
    }))

    const taskForm = createElement({
        tag: "div",
        classList: ["task-form"], 
    })

    const title = createElement({
        tag: "label",
        text: "Title:",
    })

    title.append(createElement({
        tag: "input",
        attr:{
            type : "text",
            required: "",
            name:"title",
        },
        classList: ["t-title"], 
    }))

    const description = createElement({
        tag: "label",
        text: "Description:"
    })

    description.append(createElement({
        tag: "textarea",
        attr:{
            rows : "4",
            name:"description",
        },
        classList: ["t-description"], 
    }))

    const priority = createElement({
        tag: "label",
        classList: ["m"],
    })

    priority.innerHTML = `Priority:
   <input id="low" type="radio" name="priority" value="low" checked>
   <label class="r" for="low">Low</label>
   <input id="medium" type="radio" name="priority" value="medium">
   <label class="r" for="medium">Medium</label>
   <input id="high" type="radio" name="priority" value="high">
   <label class="r" for="high">High</label>`

    const dueDate = createElement({
        tag: "label",
        text: "Due Date:",
        classList: ["m"],
    })

    dueDate.append(createElement({
        tag:"input",
        attr: {type:"date", required:"", name:"dueDate",},
    }))

    const formContent = createElement({
        tag:"form",
        classList: ["t-content"],
        attr:{id:"task-form", action:" ", method:"post"},
    })

    formContent.append(title, description, priority, dueDate, buttons);
    
    taskForm.append(createElement({
        tag: "div",
        text: "Create a new task:",
        classList: ["t-form-heading"], 
    }), formContent)

    let overlay = createElement({
        tag: "div",
        classList: ["overlay"], 
    })
    
    overlay.append(taskForm);

    return overlay;
}

export {
    projectForm, taskForm
}