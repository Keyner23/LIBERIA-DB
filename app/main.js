const $table = document.getElementById("prestamos")
const $get = document.getElementById("traer")
const $api = "http://localhost:3000/prestamo"
const $enviar = document.getElementById("crear")

$get.addEventListener("click", async function () {

    try {
        const resp = await fetch($api);
        const users = await resp.json();
        $table.innerHTML = ""
        users.forEach(user => {

            $table.innerHTML += `
                <tr>
                    <td>${user.ID_PRESTAMO}</td>
                    <td>${user.fecha_prestamo}</td>
                    <td>${user.fecha_devolucion}</td>
                    <td>${user.id_usuario}</td>
                    <td>${user.id_libro}</td>
                    <td>${user.estado}</td>
                </tr>`
        });

    } catch {
        alert("no se pudieron traer los usuarios")
    }
});

$enviar.addEventListener("click", async function (e) {
    e.preventDefault();

    const fecha_prestamo = document.getElementById("fecha_prestamo").value;
    const fecha_devolucion = document.getElementById("devolucion").value;
    const id_usuario = document.getElementById("usuario").value;
    const id_libro = document.getElementById("libro").value;
    const estado = document.getElementById("estado").value;

    try {
        const response = await fetch("http://localhost:3000/registro", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ fecha_prestamo, fecha_devolucion, id_usuario, id_libro, estado })
        });

        const data = await response.json();
        alert(data.mensaje || "Datos insertados");
    } catch (error) {
        alert("Error al enviar los datos: " + error.message);
    }

});