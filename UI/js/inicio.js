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
        location.href = url + "login/";
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
    location.href = url + "insertar/";
}

function sel() {
    location.href = url + "consultar/";
}

function upd() {
    location.href = url + "modificar/";
}

function del() {
    location.href = url + "borrar/";
}

function exit() {
    localStorage.clear();
    location.href = url + "login/";
}