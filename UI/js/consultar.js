window.onload = init;

const url = "http://localhost:3000/";
var container = {};

function init() {
    if (localStorage.getItem("token")) {
        container = document.querySelector(".container");
        content();
    }
    else {
        back();
    }
}

function content() {
    container.innerHTML = `
        <h2>Consultar empleados</h2>
        <label for="input-busq">Nombre(s)</label>
        <input type="text" class="input" id="input-buscar" placeholder="Nombre(s)">
        <button class="enter" id="btn-buscar">Buscar</button>
        <button class="enter" id="btn-back">Regresar</button>
    `;
    document.getElementById("btn-buscar").addEventListener("click", consultar);
    document.getElementById("btn-back").addEventListener("click", back);
}

function consultar() {
    const busqueda = document.getElementById("input-buscar").value;
    
    axios.get(url + `consultar?busqueda=${busqueda}`, {
        headers: {
            Authorization: "bearer " + localStorage.getItem("token")
        }
    }).then(res => {
        console.log(res);
        if (res.data.code === 200) {
            document.getElementById("btn-back").removeEventListener("click", back);
            container.innerHTML = `
        <h2>Resultados de la búsqueda</h2>
        ${tabla(res.data.message)}
        <button class="enter" id="btn-back">Regresar</button>
            `;
            document.getElementById("btn-back").addEventListener("click", location.reload.bind(window.location));
        }
    }).catch(err => {
        console.log(err);
    });
}

function tabla(query) {
    var tabla = `
        <table>
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellidos</th>
                    <th scope="col">Teléfono</th>
                    <th scope="col">Email</th>
                    <th scope="col">Dirección</th>
                </tr>
            </thead>
            <tbody>
        `;
    for (const row of query) {
        tabla += `
                <tr>
                    <td>${row.nombre}</td>
                    <td>${row.apellido_pat + " " + row.apellido_mat}</td>
                    <td>${row.telefono}</td>
                    <td>${row.email}</td>
                    <td>${row.direccion}</td>
                </tr>`;
    }
    tabla += `
            </tbody>
        </table>
    `;

    return tabla;
}

function back() {
    window.location.href = url;
}