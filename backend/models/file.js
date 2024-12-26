const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  filename: { type: String, required: true },
  filepath: { type: String, required: true },
  size: { type: Number, required: true },
  mimetype: { type: String, required: true },
  uploadTime: { type: Date, default: Date.now },
});

module.exports = mongoose.model('File', fileSchema);

