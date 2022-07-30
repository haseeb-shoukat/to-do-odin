import { createElement } from "./createElement.js";
import { loadPage } from "./refreshDOM.js";

const projectForm = function () {
  const buttons = createElement({
    tag: "div",
    classList: ["p-form-buttons"],
  });

  const cancelBtn = createElement({
    tag: "button",
    text: "Cancel",
    classList: ["cancel-btn"],
  });

  cancelBtn.addEventListener("click", (e) => {
    document.querySelector(".overlay").remove();
  });

  buttons.append(
    cancelBtn,
    createElement({
      tag: "button",
      text: "Okay",
      classList: ["submit-btn"],
    })
  );

  const projectForm = createElement({
    tag: "div",
    classList: ["project-form"],
  });

  projectForm.append(
    createElement({
      tag: "div",
      text: "Create New Project",
      classList: ["p-form-heading"],
    }),

    createElement({
      tag: "input",
      attr: {
        type: "text",
        placeholder: "Project Name",
      },
      classList: ["p-form-text"],
    }),
    buttons
  );

  let overlay = createElement({
    tag: "div",
    classList: ["overlay"],
  });

  overlay.append(projectForm);

  return overlay;
};

const taskForm = function (key) {
  const buttons = createElement({
    tag: "div",
    classList: ["t-form-buttons"],
  });

  const cancelBtn = createElement({
    tag: "button",
    text: "Cancel",
    classList: ["cancel-btn", "b"],
  });

  cancelBtn.addEventListener("click", (e) => {
    document.querySelector(".overlay").remove();
  });

  buttons.append(
    cancelBtn,
    createElement({
      tag: "button",
      text: key,
      attr: { for: "task-form" },
      classList: ["t-submit-btn", "b"],
    })
  );

  const taskForm = createElement({
    tag: "div",
    classList: ["task-form"],
  });

  const title = createElement({
    tag: "label",
    text: "Title:",
  });

  title.append(
    createElement({
      tag: "input",
      attr: {
        type: "text",
        required: "",
        name: "title",
      },
      classList: ["t-title"],
    })
  );

  const description = createElement({
    tag: "label",
    text: "Description:",
  });

  description.append(
    createElement({
      tag: "textarea",
      attr: {
        rows: "4",
        name: "description",
      },
      classList: ["t-description"],
    })
  );

  const priority = createElement({
    tag: "label",
    classList: ["m"],
  });

  priority.innerHTML = `Priority:
   <input id="low" type="radio" name="priority" value="low" checked>
   <label class="r" for="low">Low</label>
   <input id="medium" type="radio" name="priority" value="medium">
   <label class="r" for="medium">Medium</label>
   <input id="high" type="radio" name="priority" value="high">
   <label class="r" for="high">High</label>`;

  const dueDate = createElement({
    tag: "label",
    text: "Due Date:",
    classList: ["m"],
  });

  dueDate.append(
    createElement({
      tag: "input",
      attr: { type: "date", required: "", name: "dueDate" },
    })
  );

  const formContent = createElement({
    tag: "form",
    classList: ["t-content"],
    attr: { id: "task-form", action: " ", method: "post" },
  });

  formContent.append(title, description, priority, dueDate, buttons);

  taskForm.append(
    createElement({
      tag: "div",
      text: `${key} task`,
      classList: ["t-form-heading"],
    }),
    formContent
  );

  let overlay = createElement({
    tag: "div",
    classList: ["overlay"],
  });

  overlay.append(taskForm);

  return overlay;
};

const editTaskForm = function (task, id) {
  if (document.querySelector(".overlay")) return;
  const container = document.querySelector("#container");
  container.appendChild(taskForm("Edit"));

  document.querySelector(".t-title").value = task.title;
  document.querySelector(".t-description").value = task.description;
  document.querySelector(`#${task.priority}`).checked = true;
  document.querySelector("[name = dueDate]").value = task.dueDate;

  document.querySelector(".task-form").addEventListener("submit", (e) => {
    e.preventDefault();

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

    if (JSON.stringify(formData) === JSON.stringify(task)) {
      alert("No changes made");
      return;
    }

    document.querySelector(".overlay").remove();

    let tasks = JSON.parse(project);
    tasks.splice(id, 1, formData);
    
    localStorage.setItem(key, JSON.stringify(tasks));
    loadPage(key);

  });
};

export { projectForm, taskForm, editTaskForm };
