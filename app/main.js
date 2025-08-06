const $table = document.getElementById("prestamos")
const $get=document.getElementById("traer")

$get.addEventListener("click", async function () {

    try {
        const resp = await fetch("http://localhost:3000/prestamo");
        const users = await resp.json();

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