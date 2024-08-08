

const ProductController = require("../controllers/product.controller") ; 

module.exports = function(app){
    app.get('/api', ProductController.index);
    app.get("/api/products", ProductController.FindAllProducts) ; 
    app.post("/api/products",ProductController.createProduct) ;
    app.get("/api/products/:id", ProductController.getProduct);
}



