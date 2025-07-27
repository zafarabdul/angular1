const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config(); // load .env

console.log("🔍 Loaded MONGODB_URI =", process.env.MONGODB_URI);

const MONGO_URI = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ MongoDB connection failed:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
