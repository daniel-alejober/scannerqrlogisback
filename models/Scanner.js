import mongoose from "mongoose";

const ScannerSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: [true, "El nombre del paquete es requerido."],
    },
    contador: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Scanner = mongoose.model("scanner", ScannerSchema);

export default Scanner;
