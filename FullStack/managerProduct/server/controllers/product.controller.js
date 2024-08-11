const {Product} = require("../models/product.model")

//index

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

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

//get_by_id
module.exports.getProduct = (request, response) => {
    Product.findOne({_id:request.params.id})
        .then(product => response.json(product))
        .catch(err => response.json(err))
}

//update

module.exports.updateProduct = (request, response) => {
    Product.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
      .then(updatedProduct => response.json(updatedProduct))
      .catch(err => response.json(err))
  }

  //delete
  module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}