import express from "express";
import { getTareas, getTareaById, createTarea, updateTarea, deleteTarea }  from "../controllers/tareas.controller.js";

const router = express.Router();

router.get('/', getTareas);
router.get('/:id', getTareaById);
router.post('/', createTarea);
router.put('/:id', updateTarea);
router.delete('/:id', deleteTarea);

export default router;