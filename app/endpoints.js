import express from "express"
import cors from "cors"
import { conexion } from './conexion.js';



const app = express()
app.use(cors())
app.use(express.json());



//METODO GET CON EXPRESS

app.get("/prestamo", (req, resp) => {
    conexion.query("select * from prestamos", (error, result) => {
        if (error) throw error
        resp.json(result)
    })
})


app.listen(3000, (error) => {
    if (error) {
        console.error("Error al iniciar el servidor:", error.message);
        return;
    }
    console.log("api se levanto correctamente");
});