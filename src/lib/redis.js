import Redis from "ioredis"
import dotenv from "dotenv"

dotenv.config()

export const redis = new Redis(process.env.UPSTASH_REDIS_URL,{
  connectTimeout: 30000,        
  maxRetriesPerRequest: 5,      
  retryStrategy(times) {
    return Math.min(times * 500, 5000);
  }
}
// Increased timeout values for development with slow internet connection
// TODO: Adjust these values or remove them in production for better performance
);

