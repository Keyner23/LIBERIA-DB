const $table = document.getElementById("prestamos")
const $get = document.getElementById("traer")
const $btnGuardarUsuario = document.getElementById("crear-usuario")
const $api = "http://localhost:3000/usuarios"


$btnGuardarUsuario.addEventListener("click", async function () {
    const nombre = document.getElementById("validationDefault01").value
    const identificacion = document.getElementById("validationDefault02").value
    const correo = document.getElementById("validationDefaultUsername").value
    const telefono = document.getElementById("validationDefault03").value

    // usamos el metodo post del endpoint que levantamos
    try {
        const response = await fetch("http://localhost:3000/crearusuario", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({ nombre, identificacion, correo, telefono })
        });


        const data = await response.json();

        // console.log("Respuesta del servidor:", data);
        alert(data.mensaje || "Datos insertados"); //mostramos la alerta de que se creo 
    }
    catch (error) {
        alert("Error al enviar los datos:", error);
    }
})

$get.addEventListener("click", async function () {

    try {
        const resp = await fetch($api);
        const users = await resp.json();
        $table.innerHTML = ""
        users.forEach(user => {

            $table.innerHTML += `
                <tr>
                    <td>${user.ID_}</td>
                    <td>${user.nombre}</td>
                    <td>${user.identificacion}</td>
                    <td>${user.correo}</td>
                    <td>${user.telefono}</td>
                </tr>`
        });

    } catch {
        alert("no se pudieron traer los usuarios")
    }
});

