import { Router } from 'express';

const router = Router();

/**
 * GET /api/health
 *
 * A simple health-check endpoint used to verify the server is running
 * and connected. Useful for monitoring tools (e.g., UptimeRobot) and
 * CI/CD deployment verifications.
 */
router.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    status: 'ok',
    message: 'Attendance & CGPA Calculator API is running 🚀',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
  });
});

export default router;
