import mongoose from "mongoose";

const cardSchema = mongoose.Schema({
    username: String,
    email: String
})

export default mongoose.model('cards', cardSchema)