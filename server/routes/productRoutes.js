import { Router } from "express";
import {getAllProducts,getProductById,createProduct} from "../controllers/productController.js"
const productRouter = Router()


//@desc Routes for products
productRouter.get('/',getAllProducts);
productRouter.get('/:id',getProductById);
productRouter.post('/',createProduct);
// productRouter.delete('/:id',deleteProduct);

export default productRouter;