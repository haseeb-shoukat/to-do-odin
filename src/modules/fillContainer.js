import { projectForm } from "./projectForm.js"
import { addProject } from "./newProject.js"

const fillContainer = function(id) {
    const container = document.querySelector("#container");

    if (id === "projects") {
        container.appendChild(projectForm());
        addProject();
    }
}

export { fillContainer }