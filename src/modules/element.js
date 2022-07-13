const createElement = function(obj) {
    let element = document.createElement(obj.tag)
    
    if (obj.classList != undefined) {
        element.classList.add(...obj.classList)
    }
    if ("text" in obj) {
        element.textContent = obj.text
    }
    if ("attr" in obj) {
        let attrObj = obj.attr
        for (let [key, value] of Object.entries(attrObj)) {
            element.setAttribute(key, value);
        }
    }

    return element
}

export {
    createElement
}