const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	setup: {
		type: String,
		required: [true, "Joke Setup is Required"],
		minlength: [10, "Joke setup must be at least 10 characters "]
	},
	punchline: {
		type: String,
		required: [true, "Joke Punchline is Required"],
		minlength: [3, "Joke Punchline must be at least 3 characters "]
	},
},
{timestamps: true});

const User = mongoose.model("Joke", JokeSchema);

module.exports = User;