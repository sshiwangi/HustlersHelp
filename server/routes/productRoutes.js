import { Router } from "express";

const productRouter = Router()

//@desc Routes for products
productRouter.get('/',getAllProducts);
productRouter.get('/:id',getProductById);
productRouter.post('/',createProduct);
productRouter.put('/:id',updateProduct);
productRouter.delete('/:id',deleteProduct);

export default productRouter;