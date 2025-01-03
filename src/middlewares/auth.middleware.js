const jwt = require('jsonwebtoken');
const { jwtHelper } = require('../helpers');



module.exports = (req, res, next) => {
    try {
      const token = req.headers.authorization.split(' ')[1];
      if(!token) {
        return res.status(400).json({ message: 'No token provided' });
      }
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded.user;
      next();
    } catch (error) {
      res.status(401).json({ message: 'Unauthorized' });
    }
  };