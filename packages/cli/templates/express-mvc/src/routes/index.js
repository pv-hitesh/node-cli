import express from 'express';

export const router = express.Router();

// Example route
router.get('/', (req, res) => {
  res.json({ 
    message: 'Welcome to your API!',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

// Users routes (example)
router.get('/users', (req, res) => {
  res.json({ 
    users: [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
    ]
  });
});