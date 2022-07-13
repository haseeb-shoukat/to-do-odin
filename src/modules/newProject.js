const addProject = function() {
    const projectForm = document.querySelector("#p-form")
    projectForm.addEventListener("submit", handleForm)

    function handleForm(event) {
        event.preventDefault();
    }
}

export {addProject}