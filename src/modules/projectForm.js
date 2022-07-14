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
        },
        classList: ["p-form-text"], 
    })

    const buttons = createElement({
        tag: "div",
        classList: ["p-form-buttons"], 
    })

    const cancelBtn = createElement({
        tag: "button",
        text: "Cancel",
        classList: ["cancel-btn"], 
    })

    const submitBtn = createElement({
        tag: "button",
        text: "Okay",
        classList: ["submit-btn"], 
    })

    cancelBtn.addEventListener("click", e =>{
        document.querySelector(".overlay").remove();
    })
    
    buttons.append( cancelBtn, submitBtn)

    const projectForm = createElement({
        tag: "div",
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