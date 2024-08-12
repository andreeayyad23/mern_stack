const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    playerName: { 
        type: String,
        required:[true, "Player Name is required!"],
        minlength:[2, "Player name must be 2 characters in length!"]
     },
    playerPosition: { 
        type: String,
     }
}, { timestamps: true });
module.exports.Player = mongoose.model('Player', PlayerSchema);