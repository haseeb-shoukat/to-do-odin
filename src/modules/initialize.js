import { createElement} from "./element.js"


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

    let home = createElement({
        tag: "div",
        classList: ["side-item"],
    })

    home.append(createElement({
        tag: "i",
        classList: ["fa","fa-home"],
        attr: {
            "aria-hidden": "true"
        }
    }),
    createElement({
        tag: "span",
        text: "Home"
    }))

    let projects = createElement({
        tag: "div",
        classList: ["side-item"],
    })

    projects.append(createElement({
        tag: "i",
        classList: ["fa","fa-briefcase"],
        attr: {
            "aria-hidden": "true"
        }
    }),
    createElement({
        tag: "span",
        text: "Projects"
    }))

    let notes = createElement({
        tag: "div",
        classList: ["side-item"],
    })

    notes.append(createElement({
        tag: "i",
        classList: ["fa","fa-sticky-note"],
        attr: {
            "aria-hidden": "true"
        }
    }),
    createElement({
        tag: "span",
        text: "Notes"
    }))

    sideBar.append(home, projects, notes);

    return sideBar;
}

export {initializePage}



{/* 
<div class="nav-bar">
    <i class="fa fa-tasks fa-3x" aria-hidden="true"></i>
    <div class="nav-heading">To-Do</div>
    <div class="nav-side">Tasks and Notes</div>
</div>

<div class="side-bar">
    <div class="side-item">
        <i class="fa fa-home" aria-hidden="true"></i>Home
    </div>
    <div class="side-item">
        <i class="fa fa-briefcase" aria-hidden="true"></i>Projects
    </div>
    <div class="side-item">
        <i class="fa fa-sticky-note" aria-hidden="true"></i>Notes
    </div>
</div>

<div class="main-container"></div> */}