import mongoose from 'mongoose'
const userSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    título: {
        type: String,
        required: true,
        unique: true
    },
    páginas: {
        type: String,
        required: true
    }
})
export default mongoose.model('books', userSchema)