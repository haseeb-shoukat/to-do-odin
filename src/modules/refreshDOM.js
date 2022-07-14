import { createElement } from "./createElement.js";
import { projectForm } from "./projectForm.js"

const refreshDOM = function(name) {
    const projects = Object.keys(localStorage).reverse();
    const projectItems = document.querySelector(".project-items");
    projectItems.innerHTML = "";

    projects.forEach(project => {
        projectItems.appendChild(createElement({
            tag: "div",
            classList: ["project-item"],
            text: project
        }))
    })
    // items.forEach(item => console.log(JSON.parse(item)))

    changePage();
}

const changePage = function() {
    const sideItems = document.querySelectorAll(".side-item");
    const projects = document.querySelector("#projects");

    let selected = document.querySelector("#home");
    selected.classList.add("selected");

    sideItems.forEach(item => {
        item.addEventListener("click", e => {
            if (item === selected) return;
            selected.classList.remove("selected");
            item.classList.add("selected");
            selected = item;
    })})

    projects.addEventListener("click", e => {
        if (document.querySelector(".overlay")) return;
        container.appendChild(projectForm());
        addProject();
    })
}

const addProject = function() {
    const submitBtn = document.querySelector(".submit-btn");
    submitBtn.addEventListener("click", handleForm)
}

function handleForm(e) {

    let name = document.querySelector(".p-form-text").value;
    if (name === "") {
        alert("Please enter a value");
        return
    }
    else if (name.length > 12) {
        alert("Value too big")
        return
    }

    document.querySelector(".overlay").remove();
    if (localStorage.getItem(name) === null) {
        localStorage.setItem(name, "");
        refreshDOM(name);
    }
    else {
        alert("Project already exists.");
    }

}

class Project {
    constructor(name) {
      this.name = name;
      this.tasks = [];
    }

    appendTasks(task) {
        tasks.push(task)
    }
}

export {refreshDOM}