import mongoose from "mongoose";

export const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI,{
		connectTimeoutMS: 30000,      
        serverSelectionTimeoutMS: 30000
			// Extended MongoDB timeouts for dev environment
			// TODO: Remove in production if stable connection is guaranteed
		});
		console.log(`MongoDB connected: ${conn.connection.host}`);
	} catch (error) {
		console.log("Error connecting to MONGODB", error.message);
		process.exit(1);
	}
};