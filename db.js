const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('your_mongodb_connection_string', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      connectTimeoutMS: 20000,
      socketTimeoutMS: 20000,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit process if connection fails
  }
};

module.exports = connectDB;
