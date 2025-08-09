const $table = document.getElementById("prestamos")
const $get = document.getElementById("traer")
const $api = "http://localhost:3000/usuarios"
const $crearUsuario=document.getElementById("crear-usuario")


$crearUsuario.addEventListener("click",function(){
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

