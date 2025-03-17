// Code starts from Here




// Imporing Mongoose from Mongoose

import mongoose from "mongoose";




// Connecting Mongoose to DB

mongoose.connect("mongodb://localhost:27017/TodoModel")





// Creating Schema

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
})





// Exporting Schema

const Note = mongoose.model("Note", noteSchema)

export default Note; 