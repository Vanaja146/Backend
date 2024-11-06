const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('your_mongodb_connection_string', {
      connectTimeoutMS: 20000,  // Set a timeout for establishing the connection
      socketTimeoutMS: 20000,   // Set a timeout for socket operations
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit process if connection fails
  }
};

module.exports = connectDB;
