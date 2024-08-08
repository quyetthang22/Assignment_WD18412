import { Router } from "express";
import ProductController from "../controllers/ProductController.js";


const productRouter = Router();
const productController = new ProductController();

productRouter.get("/", productController.getList); //lấy danh sách
productRouter.get("/:id", productController.getDetail); // lấy tt chi tiết
productRouter.post("/", productController.create); // thêm mới
productRouter.put("/:id", productController.update); // sửa
productRouter.delete("/:id", productController.delete) // xóa

export default productRouter;