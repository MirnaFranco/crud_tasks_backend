import Task from '../models/taskModel.js';

export const getAllTasks = async (req, res) => {
    try {
        const [tasks] = await Task.getAll();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las tareas' });
    }
};

export const getTaskById = async (req, res) => {
    const { id } = req.params;
    try {
        const [tasks] = await Task.getById(id);
        if (tasks.length === 0) {
            return res.status(404).json({ message: 'Tarea no encontrada' });
        }
        res.status(200).json(tasks[0]);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la tarea' });
    }
};

export const createTask = async (req, res) => {
    const { title, description, isComplete } = req.body;

    if (typeof title !== 'string' || title.trim() === '' || title.length > 255) {
        return res.status(400).json({ message: 'Título inválido' });
    }
    if (typeof description !== 'string' || description.trim() === '') {
        return res.status(400).json({ message: 'Descripción inválida' });
    }
    if (typeof isComplete !== 'boolean') {
        return res.status(400).json({ message: 'Estado inválido' });
    }

    try {
        await Task.create({ title, description, isComplete });
        res.status(201).json({ message: 'Tarea creada exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la tarea' });
    }
};

export const updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, description, isComplete } = req.body;

    if (typeof title !== 'string' || title.trim() === '' || title.length > 255) {
        return res.status(400).json({ message: 'Título inválido' });
    }
    if (typeof description !== 'string' || description.trim() === '') {
        return res.status(400).json({ message: 'Descripción inválida' });
    }
    if (typeof isComplete !== 'boolean') {
        return res.status(400).json({ message: 'Estado inválido' });
    }

    try {
        const [result] = await Task.update(id, { title, description, isComplete });
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Tarea no encontrada' });
        }
        res.status(200).json({ message: 'Tarea actualizada exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la tarea' });
    }
};

export const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await Task.delete(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Tarea no encontrada' });
        }
        res.status(200).json({ message: 'Tarea eliminada exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la tarea' });
    }
};


