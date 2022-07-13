import { createElement } from "./createElement.js"
import { fillContainer } from "./fillContainer.js"


const initializePage = function() {
    const container = document.querySelector("#container");
    const items = [createNavbar(), createSidebar(), 
        createElement({
        tag: "div",
        classList: ["main-container"],
        }
    )]
    items.forEach(item => {
        container.appendChild(item);
    })

    changePage();
};

const createNavbar = function() {
    let navBar = createElement({
        tag: "div",
        classList: ["nav-bar"],
    })
    
    navBar.append(
        createElement({
            tag: "i",
            classList: ["fa", "fa-tasks", "fa-3x"],
            attr: {
                "aria-hidden": "true"
            }
        }),
        createElement({
            tag: "div",
            classList: ["nav-heading"],
            text: "To-Do"
        }),
        createElement({
            tag: "div",
            classList: ["nav-side"],
            text: "Tasks and Notes"
        })
    );

    return navBar;
}


const createSidebar = function() {
    let sideBar = createElement({
        tag: "div",
        classList: ["side-bar"],
    })

    sideBar.append(
        createSideItem("home", "Home"), 
        createSideItem("briefcase", "Projects"), 
        createSideItem("sticky-note", "Notes"));

    return sideBar;
}

const createSideItem = function(icon, text) {

    let sideItem = createElement({
        tag: "div",
        attr: {
            id: text.toLowerCase()
        },
        classList: ["side-item"],
    })

    sideItem.append(createElement({
        tag: "i",
        classList: ["fa", `fa-${icon}`],
        attr: {
            "aria-hidden": "true"
        }
    }),
    createElement({
        tag: "span",
        text: text
    }))

    return sideItem
}

const changePage = function() {
    const sideItems = document.querySelectorAll(".side-item");
    let selected = document.querySelector("#home");
    selected.classList.add("selected");

    sideItems.forEach(item => {
        item.addEventListener("click", e => {
            if (item === selected) return;
            if (item.id != "projects") {
                selected.classList.remove("selected");
                item.classList.add("selected");
                selected = item;
            }
            fillContainer(item.id);
        })
    })
}

export {initializePage}