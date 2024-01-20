// env file
require('dotenv').config();

// modules
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { notFoundHandler, errorHandler, limiterHandler, maintenanceHandler } = require('./middleware');
const v1Route = require('./routes/v1');

// setup
const app = express();
const { PORT = 8000, IS_MAINTENANCE = false } = process.env;

// middlewares
app.use(cors());
app.use(helmet());
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ extended: false, limit: '5mb' }));
app.use(morgan('combined'));
app.use(limiterHandler);

// maintenance check
app.use(maintenanceHandler({
    routes: JSON.parse(process.env.MAINTENANCE_PATH || '[]'),
    status: IS_MAINTENANCE
}));

// index router
app.use('/v1', v1Route);

// server error handling middleware
app.use(notFoundHandler);
app.use(errorHandler);

// run server
app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});