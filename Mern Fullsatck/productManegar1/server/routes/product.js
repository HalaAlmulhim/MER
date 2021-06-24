const productController = require("../controllers/product");
module.exports = app => {
    app.post("/api/products", productController.createProduct);
    app.get("/api/products", productController.allProducts);
    app.get('/api/products/:id', productController.oneProduct);
    app.delete('/api/products/:id', productController.deleteProduct);
    app.put("/api/products/:id", productController.updateProduct);
}