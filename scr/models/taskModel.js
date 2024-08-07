const mysql = require('mysql2/promise');

// Configuración de la conexión a la base de datos
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password', // Cambia 'password' por tu contraseña de MySQL
    database: 'tasks_db'
});

// Crear una nueva tarea
const createTask = async (title, description, isComplete) => {
    const sql = 'INSERT INTO tasks (title, description, isComplete) VALUES (?, ?, ?)';
    const [result] = await pool.query(sql, [title, description, isComplete]);
    return result;
};

// Obtener todas las tareas
const getAllTasks = async () => {
    const sql = 'SELECT * FROM tasks';
    const [rows] = await pool.query(sql);
    return rows;
};

// Obtener una tarea por su ID
const getTaskById = async (id) => {
    const sql = 'SELECT * FROM tasks WHERE id = ?';
    const [rows] = await pool.query(sql, [id]);
    return rows[0];
};

// Actualizar una tarea por su ID
const updateTask = async (id, title, description, isComplete) => {
    const sql = 'UPDATE tasks SET title = ?, description = ?, isComplete = ? WHERE id = ?';
    const [result] = await pool.query(sql, [title, description, isComplete, id]);
    return result;
};

// Eliminar una tarea por su ID
const deleteTask = async (id) => {
    const sql = 'DELETE FROM tasks WHERE id = ?';
    const [result] = await pool.query(sql, [id]);
    return result;
};

module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask
};

