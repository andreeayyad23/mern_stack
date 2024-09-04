const mongoose = require('mongoose')

const PirateSchema = new mongoose.Schema({
    pirate_name: {
        type: String,
        required: [true, 'The Pirate Name is required'],
        minlength: [4, 'Minimum length is 4 character']
    },

    image_url: {
        type: String,
        required: [true, 'The Image URL is required']
    },

    num_of_chests: {
        type: Number,
        required: [true, 'The Number of Chests is required'],
        min: [1, 'The minimum number of chests is 1'],
        max: [150, 'The maximum number of chests is 150']
    },
    
    phrase: {
        type: String,
        required: [true, 'The Catch Phrase is required']
    },
    
    position: {
        type: String,
        required: [true, 'The Position of Chests is required'],
    },

    pegLeg: {
        type: Boolean,
        required: [true, 'The knowledge of your Peg Leg is required']
    },
    eyePatch: {
        type: Boolean,
        required: [true, 'The knowledge of your Eye Patch is required']
    },
    hookHand: {
        type: Boolean,
        required: [true, 'The knowledge of your Hook Hand is required']
    }

}, { timestamps: true });

module.exports = mongoose.model('Pirate', PirateSchema);