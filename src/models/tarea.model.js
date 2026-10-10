import mongoose from "mongoose";

const tareaSchema = new mongoose.Schema(
    {
        titulo: {
            type: String,
            require: [true, "Titulo obligatorio"],
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
)