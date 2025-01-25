// config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  const mongoURI = 'mongodb+srv://root:12345@cluster-1.3wtcg.mongodb.net/';
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

module.exports = connectDB;