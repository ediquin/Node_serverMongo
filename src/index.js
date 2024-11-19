import app from './app.js'
import { connectDB } from './db.js'

connectDB()
app.listen(3000)
console.log("Servidor abierto en el puerto 3000")