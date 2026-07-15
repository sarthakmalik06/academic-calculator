import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import apiRouter from './routes/index.js';
import errorHandler from './middleware/errorHandler.js';

// Connect to MongoDB before starting the HTTP server
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// ─────────────────────────────────────────────
//  Middleware
// ─────────────────────────────────────────────

// Allow requests from the React dev server (and eventually the deployed domain)
app.use(
  cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true,
  })
);

// Parse incoming JSON request bodies
app.use(express.json());

// Parse URL-encoded form data (useful if you later add form submissions)
app.use(express.urlencoded({ extended: true }));

// ─────────────────────────────────────────────
//  Routes
// ─────────────────────────────────────────────

// Mount all API routes under /api
app.use('/api', apiRouter);

// 404 handler — catches any request that didn't match a route above
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found`,
  });
});

// ─────────────────────────────────────────────
//  Global Error Handler (must be last middleware)
// ─────────────────────────────────────────────
app.use(errorHandler);

// ─────────────────────────────────────────────
//  Start Server
// ─────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`🚀 Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
