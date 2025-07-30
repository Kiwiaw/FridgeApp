// backend/server.js
const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config();

// Function to reset database
const resetDatabase = async () => {
  try {
    // Get all collections
    const collections = await mongoose.connection.db.collections();
    
    // Drop all collections
    for (let collection of collections) {
      await collection.drop();
    }
    
    console.log("Database reset: All collections dropped");
  } catch (error) {
    console.log("Database reset: No existing collections to drop");
  }
};

// Try Atlas first, fallback to local MongoDB
const connectDB = async () => {
  try {
    // Try Atlas connection
    if (process.env.MONGO_URI) {
      await mongoose.connect(process.env.MONGO_URI);
      console.log("Connected to MongoDB Atlas");
    } else {
      // Fallback to local MongoDB
      await mongoose.connect('mongodb://localhost:27017/fridge');
      console.log("Connected to local MongoDB");
    }
  } catch (error) {
    console.log("Atlas connection failed, trying local MongoDB...");
    try {
      await mongoose.connect('mongodb://localhost:27017/fridge');
      console.log("Connected to local MongoDB");
    } catch (localError) {
      console.error("Failed to connect to any MongoDB instance:", localError.message);
      console.log("Please install MongoDB locally or fix your Atlas connection");
      process.exit(1);
    }
  }
};

connectDB().then(async () => {
  // Reset database on startup
  await resetDatabase();
  
  app.listen(5000, () => console.log("Server running on port 5000"));
});
