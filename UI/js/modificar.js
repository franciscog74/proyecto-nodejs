window.onload = init;

const url = "http://localhost:3000/";
var container = {};
var id = -1;

function init() {
    if (localStorage.getItem("token")) {
        container = document.querySelector(".container");
        document.getElementById("btn-buscar").addEventListener("click", buscar);
        document.getElementById("btn-back").addEventListener("click", back);
    }
    else {
        back();
    }
}

function buscar() {
    const busqueda = document.getElementById("input-buscar").value;
    
    axios.get(url + `consultar?busqueda=${busqueda}`, {
        headers: {
            Authorization: "bearer " + localStorage.getItem("token")
        }
    }).then(res => {
        console.log(res);
        if (res.data.code === 200 && Object.keys(res.data.message).length === 1) {
            const row = res.data.message[0];
            id = row.id;
            document.getElementById("btn-back").removeEventListener("click", back);
            container.innerHTML = `
        <h2>Modificar empleado</h2>
        <form id="campos">
            <label for="input-nombre">Nombre</label>
            <input type="text" class="input" id="input-nombre" placeholder="Nombre"
                value="${row.nombre}" required>
            <label for="input-ap-pat">Apellido paterno</label>
            <input type="text" class="input" id="input-ap-pat" placeholder="Apellido paterno"
                value="${row.apellido_pat}" required>
            <label for="input-ap-mat">Apellido materno</label>
            <input type="text" class="input" id="input-ap-mat" placeholder="Apellido materno"
                value="${row.apellido_mat}" required>
            <label for="input-tel">Teléfono</label>
            <input type="tel" class="input" id="input-tel" placeholder="1234567890"
                value="${row.telefono}" minlength="10" maxlength="13"
                pattern="(?:\\+\\d{1,2})??\\d{10}" required>
            <label for="input-email">Email</label>
            <input type="email" class="input" id="input-email" placeholder="ejemplo@mail.com"
                value="${row.email}" required>
            <label for="input-dir">Dirección</label>
            <input type="text" class="input" id="input-dir" placeholder="Principal 123"
                value="${row.direccion}" required>
            <input type="submit" class="enter" value="Actualizar">
            <button class="enter" id="btn-back">Regresar</button>
        </form>
            `;
            document.getElementById("campos").addEventListener("submit", modif);
            document.getElementById("btn-back").addEventListener("click",
                location.reload.bind(window.location));
        }
        else {
            alert((typeof res.data.message === "string")
                ? res.data.message :
                "Ingresa un registro único");
        }
    }).catch(err => {
        console.log(err);
    });
}

function modif(event) {
    event.preventDefault();

    var nombre = document.getElementById("input-nombre").value;
    var apellido_pat = document.getElementById("input-ap-pat").value;
    var apellido_mat = document.getElementById("input-ap-mat").value;
    var telefono = document.getElementById("input-tel").value;
    var email = document.getElementById("input-email").value;
    var direccion = document.getElementById("input-dir").value;

    axios.put(url + "modificar/", {
        id: id,
        nombre: nombre,
        apellido_pat: apellido_pat,
        apellido_mat: apellido_mat,
        telefono: telefono,
        email: email,
        direccion: direccion
    }, {
        headers: {
            Authorization: "bearer " + localStorage.getItem("token")
        }
    }).then(res => {
        console.log(res);
        alert(res.data.message);
        if (res.data.code === 200) {
            location.reload();
        }
    }).catch(err => {
        console.log(err);
    });
}

function back() {
    location.href = url;
}