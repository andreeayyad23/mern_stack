const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: { type: String ,
            required: [true,"Title is required"],
            minlength: [4,"Title must be at least 4 char..s"]
    },
    price: { type: Number },
    description: { type: String }
}, { timestamps: true });

module.exports.Product  = mongoose.model('Product',ProductSchema);
// module.exports.Product = mongoose.model('Product', ProductSchema);