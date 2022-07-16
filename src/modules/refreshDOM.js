import { createElement } from "./createElement.js";
import { projectForm } from "./projectForm.js"

const refreshDOM = function(name) {
    // items.forEach(item => console.log(JSON.parse(item)))
    refreshProjects();
    loadPage(name);
}

const refreshProjects = function() {

    const projects = Object.keys(localStorage).reverse();
    const projectItems = document.querySelector(".project-items");
    let selected = document.querySelector(".selected");

    if (selected === null || selected.id === "Home") {
        selected = "";
    }
    else {
        selected = selected.textContent;
    }

    projectItems.innerHTML = "";
    projects.forEach(project => {
        if( project === "Home") return;
        let projectItem = createElement({
            tag: "div",
            classList: ["project-item"],
        });

        let removeIcon = createElement({
            tag: "i",
            classList: ["fa", "fa-times", "sm", "remove-p-item"],
        })

        let projectName = createElement({
            tag: "div",
            classList: ["project-name"],
            text: project,
        })

        if (selected === project) {
            projectName.classList.add("selected");
        }

        removeIcon.addEventListener("click", e => {
            localStorage.removeItem(project);
            let selected = document.querySelector(".selected");
            
            selected = selected.textContent

            if (selected === project) {
                document.querySelector(".main-container").innerHTML = "";
            }
            refreshProjects()
        })

        projectItem.append( projectName, removeIcon)

        projectItems.appendChild(projectItem)
    })

    changePage();
}

const changePage = function() {

    const projects = document.querySelector("#projects");
    const projectItems = document.querySelectorAll(".project-name");
    const home = document.querySelector("#home");

    home.addEventListener("click", itemSelection.bind(null, home))

    projectItems.forEach(item => {
        item.addEventListener("click", itemSelection.bind(null, item))})

    projects.addEventListener("click", e => {
        if (document.querySelector(".overlay")) return;
        container.appendChild(projectForm());
        addProject();
    })
}

const itemSelection = function(item, e) {
    let selected = document.querySelector(".selected");
    if (item === selected) return;
    if (selected != null) {
        selected.classList.remove("selected");
    }
    item.classList.add("selected");
    if (item.id === "home") {
        loadPage("Home")
    }
    else {
        loadPage(item.textContent);
    }
}

const addProject = function() {
    const submitBtn = document.querySelector(".submit-btn");
    submitBtn.addEventListener("click", handleForm)
}

function handleForm(e) {

    let name = document.querySelector(".p-form-text").value;
    name = name.charAt(0).toUpperCase() + name.slice(1);
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
        refreshProjects();
    }
    else {
        alert("Project already exists.");
    }

}

const loadPage = function(id) {
    const mainContainer = document.querySelector(".main-container");
    let page = localStorage.getItem(id);
    if (page === null) {
        alert("Page does not exist.");
        return
    };

    mainContainer.innerHTML = "";

    let header = createElement({
        tag:"div",
        classList: ["header"]
    })

    let heading = createElement({
        tag: "div",
        classList: ["main-heading"],
        text: id,
    })

    let button = createElement({
        tag: "button",
        text: "New Task",
        classList: ["new-task-btn"],
    });

    button.addEventListener("click", createNewTask)
    header.append( heading, button)

    mainContainer.appendChild(header)


}

const createNewTask = function() {
    console.log("works")
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

class Task {
    constructor(t, d, dDate, p) {
        this.title = t;
        this.description = d;
        this.dueDate = dDate;
        this.priority = p;
    }

    get title() {
        return this._title;
    }

    set title(t) {
        this._title = t;
    }

    get description() {
        return this._description;
    }

    set description(d) {
        this._description = d;
    }

    get dueDate() {
        return this._dueDate;
    }

    set dueDate(dDate) {
        this._dueDate = dDate;
    }

    get priority() {
        return this._priority;
    }

    set priority(p) {
        this._priority = p;
    }
}

export {refreshDOM}