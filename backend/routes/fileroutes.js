const express = require('express');
const upload = require('../middleware/upload');
const { authenticateToken } = require('../config/jwt');
const File = require('../models/File');

const router = express.Router();

router.post('/upload', authenticateToken, upload.single('file'), async (req, res) => {
  const file = new File({
    userId: req.user.id,
    filename: req.file.originalname,
    filepath: req.file.path,
    size: req.file.size,
    mimetype: req.file.mimetype,
  });
  await file.save();
  res.status(201).json({ message: 'File uploaded successfully', file });
});

router.get('/:userId', authenticateToken, async (req, res) => {
  if (req.user.id !== req.params.userId) {
    return res.status(403).json({ message: 'Unauthorized access' });
  }
  const files = await File.find({ userId: req.params.userId });
  res.status(200).json({ files });
});

module.exports = router;

