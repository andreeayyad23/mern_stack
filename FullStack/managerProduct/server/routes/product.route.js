

const ProductController = require("../controllers/product.controller") ; 

module.exports = function(app){
    app.get('/api', ProductController.index);
    app.get("/api/products", ProductController.FindAllProducts) ; 
    app.post("/api/products",ProductController.createProduct) ;
    app.get("/api/products/:id", ProductController.getProduct);
<<<<<<< HEAD
    app.put('/api/products/:id', ProductController.updateProduct);
    app.delete('/api/products/:id', ProductController.deleteProduct);

=======
>>>>>>> 1152d6b7181357108f73b8ef5e05d6f9369da92f
}



