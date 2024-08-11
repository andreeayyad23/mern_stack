const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [3, 'The name length should be 3 or more characters'],
        required: [
            true,
            "Title is required"
        ]

    }
}, { timestamps: true });

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;