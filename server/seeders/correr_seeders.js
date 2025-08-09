import { cargarLibrosDb } from "./cargar_libros.js";
import { cargarUsuariosDb } from "./cargar_usuarios.js";

(async () => {
    try {
        console.log('🚀 Iniciando seeders...');

        // await cargarUsuariosDb()
        // await cargarLibrosDb()

        console.log('✅ Todos los seeders ejecutados correctamente.');
    } catch (error) {
        console.error('❌ Error ejecutando los seeders:', error.message);
    } finally {
        process.exit();
    }
})()