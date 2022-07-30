import { createElement, createTasks } from "./createElement.js";
import { projectForm, taskForm } from "./projectForm.js";

const refreshDOM = function (name) {
  refreshProjects();
  loadPage(name);
};

const refreshProjects = function () {
  const projects = Object.keys(localStorage).reverse();
  const projectItems = document.querySelector(".project-items");
  let selected = document.querySelector(".selected");

  if (selected === null || selected.id === "Home") {
    selected = "";
  } else {
    selected = selected.textContent;
  }

  projectItems.innerHTML = "";
  projects.forEach((project) => {
    if (project === "Home") return;
    let projectItem = createElement({
      tag: "div",
      classList: ["project-item"],
    });

    let removeIcon = createElement({
      tag: "i",
      classList: ["fa", "fa-times", "sm", "remove-p-item"],
    });

    let projectName = createElement({
      tag: "div",
      classList: ["project-name"],
      text: project,
    });

    if (selected === project) {
      projectName.classList.add("selected");
    }

    removeIcon.addEventListener("click", (e) => {
      localStorage.removeItem(project);
      let selected = document.querySelector(".selected");

      selected = selected.textContent;

      if (selected === project) {
        document.querySelector(".main-container").innerHTML = "";
      }
      refreshProjects();
    });

    projectItem.append(projectName, removeIcon);

    projectItems.appendChild(projectItem);
  });

  changePage();
};

const changePage = function () {
  const projects = document.querySelector("#projects");
  const projectItems = document.querySelectorAll(".project-name");
  const home = document.querySelector("#home");

  home.addEventListener("click", itemSelection.bind(null, home));

  projectItems.forEach((item) => {
    item.addEventListener("click", itemSelection.bind(null, item));
  });

  projects.addEventListener("click", (e) => {
    if (document.querySelector(".overlay")) return;
    container.appendChild(projectForm());
    addProject();
  });
};

const itemSelection = function (item, e) {
  let selected = document.querySelector(".selected");
  if (item === selected) return;
  if (selected != null) {
    selected.classList.remove("selected");
  }
  item.classList.add("selected");
  if (item.id === "home") {
    loadPage("Home");
  } else {
    loadPage(item.textContent);
  }
};

const addProject = function () {
  const submitBtn = document.querySelector(".submit-btn");
  submitBtn.addEventListener("click", handleForm);
};

function handleForm(e) {
  let name = document.querySelector(".p-form-text").value;
  name = name.charAt(0).toUpperCase() + name.slice(1);
  if (name === "") {
    alert("Please enter a value");
    return;
  } else if (name.length > 12) {
    alert("Value too big");
    return;
  }

  document.querySelector(".overlay").remove();
  if (localStorage.getItem(name) === null) {
    localStorage.setItem(name, JSON.stringify([]));
    refreshProjects();
  } else {
    alert("Project already exists.");
  }
}

const loadPage = function (id) {
  const mainContainer = document.querySelector(".main-container");
  let page = JSON.parse(localStorage.getItem(id));
  if (page === null) {
    alert("Page does not exist.");
    return;
  }

  mainContainer.innerHTML = "";

  let header = createElement({
    tag: "div",
    classList: ["header"],
  });

  let heading = createElement({
    tag: "div",
    classList: ["main-heading"],
    text: id,
  });

  let button = createElement({
    tag: "button",
    text: "New Task",
    classList: ["new-task-btn"],
  });

  button.addEventListener("click", createNewTask);
  header.append(heading, button);

  mainContainer.appendChild(header);
  loadTasks(page, mainContainer);
  removeTasks(id, page);
};

const loadTasks = function (elements, mainContainer) {
  mainContainer.appendChild(createTasks(elements));
  collapse();
};

const removeTasks = function (id, elements) {
  const removeBtn = document.querySelectorAll(".remove-task");
  removeBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      elements.splice(parseInt(btn.parentElement.id), 1);
      localStorage.setItem(id, JSON.stringify(elements));
      loadPage(id);
    });
  });
};

const collapse = function () {
  var coll = document.getElementsByClassName("task");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
};

const createNewTask = function () {
  container.appendChild(taskForm("Create"));
  const taskContent = document.querySelector(".t-content");
  taskContent.addEventListener("submit", (e) => {
    e.preventDefault();
    document.querySelector(".overlay").remove();
    let key = document.querySelector(".selected");

    if (key.id === "Home") {
      key = "Home";
    } else {
      key = key.textContent;
    }

    const project = localStorage.getItem(key);
    const formData = Object.fromEntries(new FormData(e.target).entries());

    if (project === null) {
      alert("Project does not exist.");
      return;
    }

    let tasks = JSON.parse(project);
    tasks.push(formData);
    localStorage.setItem(key, JSON.stringify(tasks));
    loadPage(key);
  });
};

export { refreshDOM, loadPage };
