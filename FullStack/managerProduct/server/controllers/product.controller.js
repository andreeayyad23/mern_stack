const {Product} = require("../models/product.model")


//create 
module.exports.createProduct = (req,res) =>{
    Product.create(req.body)
    .then(newProduct => res.json({product:newProduct}))
    .catch(err => res.json(err)); 
}


//get 
module.exports.FindAllProducts = (req,res) =>{
    Product.find({})
    .then(allProduct => res.json({products:allProduct}))
    .catch(err => res.json(err))
}