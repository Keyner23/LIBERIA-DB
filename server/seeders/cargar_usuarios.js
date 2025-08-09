/*se encarga de cargar los usuarios a la base de datos*/
import fs from 'fs'; // es la que me permite leer archivos
import path from 'path'; // esta muestra la ruta actual
import csv from 'csv-parser';
import {conexion} from "../../app/conexion.js"


export async function cargarUsuariosDb() {

    const rutaArchivo = path.resolve('server/data/usuarios.csv');
    const usuarios = [];

    return new Promise((resolve, reject) => {
        fs.createReadStream(rutaArchivo)
            .pipe(csv())
            .on("data", (usuario) => {
                usuarios.push([
                    usuario.ID,
                    usuario.nombre.trim(),
                    usuario.identificacion,
                    usuario.correo,
                    usuario.telefono
                ]);
            })
            .on('end', async () => {
                try {
                    const sql = 'INSERT INTO usuarios (ID_,nombre,identificacion,correo,telefono) VALUES ?';
                    const [result] = await conexion.promise().query(sql, [usuarios]);

                    console.log(`✅ Se insertaron ${result.affectedRows} usuarios.`);
                    resolve(); 
                } catch (error) {
                    console.error('❌ Error al insertar usuarios:', error.message);
                    reject(error);
                }
            })
            .on('error', (err) => {
                console.error('❌ Error al leer el archivo CSV de usuarios:', err.message);
                reject(err);
            });
    });
}