const $getLibros = document.getElementById("traer-libros")
const $table = document.getElementById("prestamos")


$getLibros.addEventListener("click", async function () {
    try {
        const resp = await fetch("http://localhost:3000/libros");
        const libros = await resp.json();
        $table.innerHTML = ""
        libros.forEach(libro => {

            $table.innerHTML += `
                <tr>
                    <td>${libro.isbn}</td>
                    <td>${libro.titulo}</td>
                    <td>${libro.año_publicacion}</td>
                    <td>${libro.autor}</td>
                </tr>`
        });

    } catch {
        alert("no se pudieron traer los libros")
    }
})