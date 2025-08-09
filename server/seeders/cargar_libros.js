import fs from 'fs'; // es la que me permite leer archivos
import path from 'path'; // esta muestra la ruta actual
import csv from 'csv-parser';
import {conexion} from "../../app/conexion.js"


export async function cargarLibrosDb() {

    const rutaArchivo = path.resolve('server/data/libros.csv');
    const libros = [];

    return new Promise((resolve, reject) => {
        fs.createReadStream(rutaArchivo)
            .pipe(csv())
            .on("data", (libro) => {
                libros.push([
                    libro.titulo,
                    libro.isbn,
                    libro.año_publicacion,
                    libro.autor
                ]);
            })
            .on('end', async () => {
                try {
                    const sql = 'INSERT INTO libros (titulo,isbn,año_publicacion,autor) VALUES ?';
                    const [result] = await conexion.promise().query(sql, [libros]);

                    console.log(`✅ Se insertaron ${result.affectedRows} libros.`);
                    resolve(); 
                } catch (error) {
                    console.error('❌ Error al insertar lirbos:', error.message);
                    reject(error);
                }
            })
            .on('error', (err) => {
                console.error('❌ Error al leer el archivo CSV de usuarios:', err.message);
                reject(err);
            });
    });
}