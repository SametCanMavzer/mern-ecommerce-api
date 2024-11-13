import express from "express";
import dotenv from "dotenv";
import authRoutes from "./src/routes/auth.route.js";
dotenv.config();

const app = express();



app.use("/api/auth", authRoutes);

app.listen(process.env.PORT, () => {
	console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

