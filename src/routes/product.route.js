import express from "express";
import { adminRoute, protectRoute } from "../middleware/auth.middleware.js";
import { createProduct, getAllProducts } from "../controllers/product.controller.js";
const router = express.Router();


router.get("/", protectRoute, adminRoute, getAllProducts);
router.get("/featured", getFeaturedProducts);
router.post("/", protectRoute, adminRoute, createProduct);


export default router;