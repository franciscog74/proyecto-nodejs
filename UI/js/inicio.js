window.onload = init;
var headers = {};
var url = "http://localhost:3000/";

function init() {
    if (localStorage.getItem("token")) {
        token = localStorage.getItem("token");
        headers = {
            headers: {
                Authorization: "bearer " + token
            }
        };
        checkToken();
    }
    else {
        window.location.href = url + "login/";
    }
}

function checkToken() {
    axios.post(url, {}, headers)
    .then(function(res) {
        console.log(res);
        listenBotones();
    }).catch(function(err) {
        console.log(err);
    });
}

function listenBotones() {
    document.getElementById("btn-ins").addEventListener("click", ins);
    document.getElementById("btn-sel").addEventListener("click", sel);
    document.getElementById("btn-upd").addEventListener("click", upd);
    document.getElementById("btn-del").addEventListener("click", del);
    document.getElementById("btn-exit").addEventListener("click", exit);
}

function ins() {
    window.location.href = url + "insertar/";
}

function sel() {
    window.location.href = url + "consultar/";
}

function upd() {
    window.location.href = url + "modificar/";
}

function del() {
    window.location.href = url + "borrar/";
}

function exit() {
    localStorage.clear();
    window.location.href = url + "login/";
}