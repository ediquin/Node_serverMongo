import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost/merndb');
    console.log("Conexión a la base de datos exitosa");
  } catch (error) {
    console.log("Error al conectar con la base de datos:", error);
  }
};