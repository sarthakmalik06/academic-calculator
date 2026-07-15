import mongoose from 'mongoose';

/**
 * Connects to MongoDB using the MONGO_URI from environment variables.
 * Exits the process immediately if the connection fails —
 * there's no point running the server without a database.
 */
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
