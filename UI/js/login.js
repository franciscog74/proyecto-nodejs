window.onload = init;

const url = "http://localhost:3000/";

function init() {
    // localStorage.clear();
    if (!localStorage.getItem("token")) {
        document.getElementById("btn-login").addEventListener("click", login);
    }
    else {
        location.href = url;
    }
}

function login() {
    var username = document.getElementById("input-user").value;
    var password = document.getElementById("input-pw").value;

    axios.post(url + "login/", {
        username: username,
        password: password
    }).then(res => {
        console.log(res);
        if (res.data.code === 200) {
            localStorage.setItem("token", res.data.message);
            location.href = url;
        }
        else {
            alert("Usuario y/o contraseña incorrectos");
        }
    }).catch(err => {
        console.log(err);
    });
}