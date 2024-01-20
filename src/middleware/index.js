const notFoundHandler = require('./notfound.middleware');
const errorHandler = require('./error.middleware');
const limiterHandler = require('./limiter.middleware');
const maintenanceHandler = require('./maintenance.middleware');

module.exports = {
    notFoundHandler,
    errorHandler,
    limiterHandler,
    maintenanceHandler
};