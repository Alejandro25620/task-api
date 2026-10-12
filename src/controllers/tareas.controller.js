import Tarea from "../models/tarea.model.js"

//Obtener todas las tareas
export const getTareas = async (req, res) => {
    try {
        const tareas = await Tarea.find().sort({ createdAt: -1 });
        res.json(tareas);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//Obtener una tarea por su ID
export const getTareaById = async (req, res) => {
    try {
        const tarea = await Tarea.findById(req.params.id);
        if (!tarea) return res.status(404).json({ error: "Tarea no encontrada" });
        res.json(tarea);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//Crear una nueva tarea
export const createTarea = async (req, res) => {
    try {
        const tarea = await Tarea.create(req.body);
        res.status(201).json(tarea);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//Actualizar una tarea existente
export const updateTarea = async (req, res) => {
    try {
        const tarea = await Tarea.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!tarea) return res.status(404).json({ error: "Tarea no encontrada" });
        res.json(tarea);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//Eliminar una tarea
export const deleteTarea = async (req, res) => {
    try {
        const tarea = await Tarea.findByIdAndDelete(req.params.id);
        if (!tarea) return res.status(404).json({ error: "Tarea no encontrada" });
        res.json({ message: "Tarea eliminada correctamente" });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};