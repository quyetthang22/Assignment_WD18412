import {Router} from "express";
import productRouter from "./product.js";

const router = Router();

router.use("/products", productRouter);
// router.use("/auth");

export default router;