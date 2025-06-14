window.onload = init;

const url = "http://localhost:3000/";
var container = {};

function init() {
    if (localStorage.getItem("token")) {
        container = document.querySelector(".container");
        document.getElementById("btn-buscar").addEventListener("click", consultar);
        document.getElementById("btn-back").addEventListener("click", back);
        addEnterBtn();
    }
    else {
        back();
    }
}

function consultar() {
    buscar(res => {
        console.log(res);
        if (res.data.code !== 500) {
            document.getElementById("btn-back").removeEventListener("click", back);
            removeEnterBtn();
            container.innerHTML = `
        <h2>Resultados de la búsqueda</h2>
        ${(res.data.code === 200) ? tabla(res.data.message) : "<p>No se encontraron coincidencias</p>"}
        <button class="enter" id="btn-back">Regresar</button>
            `;
            document.getElementById("btn-back").addEventListener("click", location.reload.bind(window.location));
        }
        else {
            alert(res.data.message);
        }
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
    location.href = url;
}