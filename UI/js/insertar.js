window.onload = init;

const url = "http://localhost:3000/";

function init() {
    if (localStorage.getItem("token")) {
        document.getElementById("campos").addEventListener("submit", insert);
        document.getElementById("btn-back").addEventListener("click", back);
        addEnterBtn();
    }
    else {
        back();
    }
}

function insert(event) {
    event.preventDefault();

    var nombre = document.getElementById("input-nombre").value;
    var apellido_pat = document.getElementById("input-ap-pat").value;
    var apellido_mat = document.getElementById("input-ap-mat").value;
    var telefono = document.getElementById("input-tel").value;
    var email = document.getElementById("input-email").value;
    var direccion = document.getElementById("input-dir").value;

    axios.post(url + "insertar/", {
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
        if (res.data.code === 201) {
            document.getElementById("campos").reset();
        }
    }).catch(err => {
        console.log(err);
    });
}

function back() {
    location.href = url;
}