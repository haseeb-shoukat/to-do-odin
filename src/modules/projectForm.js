import { createElement } from "./createElement.js"

const projectForm = function() {
    const heading = createElement({
        tag: "div",
        text: "Create New Project",
        classList: ["p-form-heading"], 
    })

    const textInput = createElement({
        tag: "input",
        attr:{
            type : "text",
            placeholder: "Project Name",
            required : ""
        },
        classList: ["p-form-text"], 
    })

    const buttons = createElement({
        tag: "div",
        classList: ["p-form-buttons"], 
    })

    const cancelBtn = createElement({
        tag: "button",
        attr: {type: "button"},
        text: "Cancel",
        classList: ["cancel-btn"], 
    })

    const submitBtn = createElement({
        tag: "button",
        text: "Okay",
        attr: {
            type: "submit",
            form: "p-form",
        },
        classList: ["submit-btn"], 
    })

    cancelBtn.addEventListener("click", e =>{
        document.querySelector(".overlay").remove();
    })
    
    buttons.append( cancelBtn, submitBtn)

    const projectForm = createElement({
        tag: "form",
        attr: {
            id: "p-form",
        },
        classList: ["project-form"], 
    })
    
    projectForm.append(heading, textInput, buttons)

    let overlay = createElement({
        tag: "div",
        classList: ["overlay"], 
    })
    
    overlay.append(projectForm);

    return overlay;
}

export {
    projectForm
}