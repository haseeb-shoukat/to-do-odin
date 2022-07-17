import { createElement } from "./createElement.js"
import { refreshDOM } from "./refreshDOM.js"


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

    document.querySelector("#home").classList.add("selected");
    if (localStorage.getItem("Home") === null) {
        localStorage.setItem("Home", JSON.stringify([]))
    }

    refreshDOM("Home");
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
    )

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

    if (text === "Projects") {
        let div = createElement({
            tag: "div",
        })
        
        div.append(sideItem, createElement({
            tag: "div",
            classList: ["project-items"]
        }))

        return div;
    }

    return sideItem
}

export {initializePage}