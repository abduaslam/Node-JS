// app.js
const express = require('express');
const app = express();
const loggerMiddleware = require('./middleware/logger.middleware');
const authRoutes = require('./routes/auth.routes');
const apiRoutes = require('./routes/api.routes');

// Middleware
app.use(loggerMiddleware);

// Routes
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

module.exports = app;