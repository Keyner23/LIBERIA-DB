import express from "express"
import cors from "cors"
import { conexion } from './conexion.js';



const app = express()
app.use(cors())
app.use(express.json());



//METODO GET CON EXPRESS

app.get("/usuarios", (req, resp) => {
    conexion.query("select * from usuarios", (error, result) => {
        if (error) throw error
        resp.json(result)
    })
})

app.get("/libros", (req, resp) => {
    conexion.query("select * from libros", (error, result) => {
        if (error) throw error
        resp.json(result)
    })
})

// METODO POST CON EXPRESS

app.post("/crearusuario", (req, res) => {
    const { nombre, identificacion, correo, telefono} = req.body;

    const sql = `
        INSERT INTO usuarios (nombre,identificacion,correo, telefono) 
        VALUES (?, ?, ?, ?)
    `;

    conexion.query(sql, [nombre, identificacion, correo, telefono], (err, result) => {
        if (err) {
            console.error("Error al insertar:", err.message);
            return res.status(500).json({ error: "Error al insertar datos" });
        }
        res.status(201).json({ mensaje: "Se regitro correctamente el usuario", id: result.insertId });
    });
});


app.listen(3000, (error) => {
    if (error) {
        console.error("Error al iniciar el servidor:", error.message);
        return;
    }
    console.log("api se levanto correctamente");
});