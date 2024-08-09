import {Router} from "express" ;
const taskrouter = Router();
import {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
} from '../Controllers/taskController.js'; // Importa el controlador



taskrouter.get('/tasks', getAllTasks);
taskrouter.get('/task/:id', getTaskById);
taskrouter.post('/tasks',createTask );
taskrouter.put('/task/:id',updateTask );
taskrouter.delete('/task/:id',deleteTask );

export default {taskrouter};
