window.onload = init;

const url = "http://localhost:3000/";
var container = {};
var id = -1;

function init() {
    if (localStorage.getItem("token")) {
        container = document.querySelector(".container");
        document.getElementById("btn-borrar").addEventListener("click", buscar);
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
            const id = row.id;
            const nombre = `${row.nombre} ${row.apellido_pat} ${row.apellido_mat}`
            if (confirm(`¿Desea eliminar el registro "${nombre}"?`)) {
                del(id);
            }
            else {
                location.reload();
            }
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

function del(id) {
    axios.delete(url + `borrar/${id}`, {
        headers: {
            Authorization: "bearer " + localStorage.getItem("token")
        }
    }).then(res => {
        console.log(res);
        if (res.data.code === 200) {
            location.reload();
        } else {
            alert(res.data.message);
        }
    }).catch(err => {
        console.log(err);
    });
}

function back() {
    location.href = url;
}