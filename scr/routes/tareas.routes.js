const express = require('express');
const {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
} = require('../Controllers/taskController'); // Importa el controlador

const router = express.Router();

router.get('/tasks', getAllTasks);
router.get('/task/:id', getTaskById);
router.post('/tasks',createTask );
    router.put('/task/:id',updateTask );
router.delete('/task/:id',deleteTask );

module.exports = router;
