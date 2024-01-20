const maintenanceMiddleware = (config) => {
    return (req, res, next) => {
        // Check if the system is in maintenance mode
        if (config.status) {
            // If in maintenance mode, check if the requested route is allowed
            const isAllowedRoute = config.routes.some(route => req.path.startsWith(route));
            if (isAllowedRoute) {
                return res.status(503).json({
                    status: false,
                    message: 'The system is currently in maintenance mode. Please try again later.',
                    data: null
                });
            }
        }

        // If not in maintenance mode or the route is allowed, proceed to the next middleware
        next();
    };
};

module.exports = maintenanceMiddleware;
