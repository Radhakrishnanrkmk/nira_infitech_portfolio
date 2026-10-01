import express, { Request, Response } from 'express';
import { apiRouter } from '../src/server/routes.ts';

const app = express();

app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ extended: true, limit: '25mb' }));

// Mount the API routes
app.use('/api', apiRouter);

// Health check endpoint
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    service: 'NIRA Infotech Backend (Vercel Serverless Function)',
    timestamp: new Date().toISOString()
  });
});

export default app;
