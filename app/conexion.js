import mysql from "mysql2"


export const conexion = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password:"",
    database: "libreria"
})


conexion.connect((error) => {
    if (error) {
        console.error("Error al conectar con MySQL:", error.message);
        return;
    }
    console.log("se conecto con exito");
});