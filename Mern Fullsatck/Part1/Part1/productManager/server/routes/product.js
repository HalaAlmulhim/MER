const productController = require("../controllers/product");
module.exports = app => {
    app.post("/api/product", productController.createProduct);
    app.get("/api/product", productController.allProducts);
}