// Authentication Middleware
// Verifies JWT token and protects routes in future milestones.

const authMiddleware = (req, res, next) => {
  // Authentication check will be implemented here
  next();
};

module.exports = authMiddleware;
