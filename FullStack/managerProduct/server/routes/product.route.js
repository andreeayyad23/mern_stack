

const ProductController = require("../controllers/product.controller") ; 

module.exports =(app)=>{
    app.get("/api/products", ProductController.FindAllProducts) ; 
    app.post("/api/products",ProductController.createProduct) ;
}



