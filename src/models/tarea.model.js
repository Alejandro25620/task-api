import mongoose from "mongoose";

const tareaSchema = new mongoose.Schema(
    {
        titulo: {
            type: String,
            required: [true, "Titulo obligatorio"],
            trim: true,
        },
        descripcion: {
            type: String,
            trim: true,
            default: "",
        },
        completada: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

export default mongoose.model("Tarea", tareaSchema);