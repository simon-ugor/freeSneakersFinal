const mongoose = require("mongoose")

let NoteSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please enter your email"]
    },
    time: {
        type: Number
    },
    lucky_number: {
        type: Number
    }
})

module.exports = mongoose.models.Note || mongoose.model("Note", NoteSchema);