const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET;

const generateToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, SECRET_KEY, { expiresIn: '1h' });
};

const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(403).json({ message: 'Token required' });

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });
    req.user = user;
    next();
  });
};

module.exports = { generateToken, authenticateToken };

