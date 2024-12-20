import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./src/lib/db.js";
import cookieParser from "cookie-parser";

// Routes
import authRoutes from "./src/routes/auth.route.js";
import productRoutes from "./src/routes/product.route.js";
import cartRoutes from "./src/routes/cart.route.js";
import couponRoutes from "./src/routes/coupon.route.js";
import paymentRoutes from "./src/routes/payment.route.js";
import analyticsRoutes from "./src/routes/analytics.route.js";


dotenv.config();

const app = express();


app.use(express.json({limit: '5mb'})); // Parse JSON bodies
app.use(cookieParser()); // Parse cookies

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/coupons", couponRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/analytics", analyticsRoutes);





app.listen(process.env.PORT, () => {
	console.log(`Server is running on http://localhost:${process.env.PORT}`);
	connectDB();
});


