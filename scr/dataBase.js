// Requerimos mysql.
const mysql = require('mysql2/promise');

// Creamos una funcion para realizar la conexion a la bd.
const connectDB = async ()=> {
    return await mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',
        database: 'tasks_db'
    })
}

// Exportamos la funcion para realizar la conexion desde cualquier archivo.
module.exports = connectDB