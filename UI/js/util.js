function buscar(fun) {
    const busqueda = document.getElementById("input-buscar").value;
    axios.get(url + "consultar", {
        params: {
            busqueda: busqueda
        },
        headers: {
            Authorization: "bearer " + localStorage.getItem("token")
        }
    }).then(
        fun
    ).catch(err => {
        console.log(err);
    });
}

function addEnterBtn() {
    for (const input of document.getElementsByClassName("input")) {
        input.addEventListener("keypress", enterBtn);
    }
}

function removeEnterBtn() {
    for (const input of document.getElementsByClassName("input")) {
        input.removeEventListener("keypress", enterBtn);
    }
}

function enterBtn(event) {
    if (event.key === "Enter") {
        var sibling = this.nextSibling;
        if (sibling.constructor.name === "Text")
            sibling = sibling.nextSibling;
        
        const siblingClasses = sibling.classList;
        if (siblingClasses.contains("enter") || siblingClasses.contains("exit")) {
            sibling.click();
        }
        else {
            sibling.focus();
        }
    }
}