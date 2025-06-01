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