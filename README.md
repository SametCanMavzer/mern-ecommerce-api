# MERN E-Commerce API

MERN E-Commerce API is a backend service for a modern e-commerce platform. It is built using Node.js, Express, Redis and MongoDB.

## Features

- User authentication with JWT
- Redis caching
- Product CRUD operations
- Shopping cart management
- Stripe payment integration
- Cloudinary image upload
- Coupon system
- Analytics for admin panel
- Featured products system

> Note: The frontend part of this project will be developed and available in the `mern-ecommerce-ui` repository on GitHub.

## Getting Started

These instructions will help you run the project on your local machine for development.

### Requirements

You need to have these installed:

- Node.js (v14 or higher)
- npm (comes with Node.js)
- MongoDB
- Redis

### Setup

1. Clone the repository:

   ```
   git clone https://github.com/SametCanMavzer/mern-ecommerce-api.git
   ```

2. Go to project folder:

   ```
   cd mern-ecommerce-api
   ```

3. Install packages:

   ```
   npm install
   ```

4. Create a `.env` file and add these variables:

   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   UPSTASH_REDIS_URL=your_redis_url
   ACCESS_TOKEN_SECRET=your_access_token_secret
   REFRESH_TOKEN_SECRET=your_refresh_token_secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
   CLIENT_URL=http://localhost:5173
   ```

5. Start the app:
   ```
   npm start
   ```

The app will run at `http://localhost:5000`.

## API Endpoints

### User Routes

- `POST /api/auth/signup`: Register new user
- `POST /api/auth/login`: User login
- `POST /api/auth/logout`: User logout
- `POST /api/auth/refresh-token`: Refresh access token
- `GET /api/auth/profile`: Get user profile

### Product Routes

- `GET /api/products`: Get all products
- `POST /api/products`: Add new product (Admin)
- `GET /api/products/featured`: Get featured products
- `GET /api/products/recommendations`: Get recommended products
- `GET /api/products/category/:category`: Get products by category
- `PATCH /api/products/:id`: Toggle product featured status (Admin)
- `DELETE /api/products/:id`: Delete product (Admin)

### Cart Routes

- `GET /api/cart`: Get cart items
- `POST /api/cart`: Add item to cart
- `DELETE /api/cart`: Remove all items from cart
- `PUT /api/cart/:id`: Update item quantity

### Coupon Routes

- `GET /api/coupons`: Get user's coupons
- `POST /api/coupons/validate`: Check coupon code

### Payment Routes

- `POST /api/payments/create-checkout-session`: Create payment session
- `POST /api/payments/checkout-success`: Handle successful payment

### Analytics Routes (Admin)

- `GET /api/analytics`: Get sales and user stats

## Development

To run in development mode:

```
npm run dev
```

This uses `nodemon` to restart the app when you make changes.
