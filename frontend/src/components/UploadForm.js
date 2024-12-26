import React, { useState } from 'react';
import { Button, Typography, Box, TextField } from '@mui/material';
import API from '../utils/api';

const UploadForm = ({ onFileUpload }) => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage('Please select a file');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const { data } = await API.post('/files/upload', formData);
      setMessage(data.message);
      onFileUpload(data.file);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: 'auto', mt: 5 }}>
      <Typography variant="h5" gutterBottom>
        Upload File
      </Typography>
      {message && (
        <Typography color="error" gutterBottom>
          {message}
        </Typography>
      )}
      <TextField
        type="file"
        fullWidth
        onChange={handleFileChange}
        InputLabelProps={{ shrink: true }}
        margin="normal"
      />
      <Button variant="contained" color="primary" type="submit" fullWidth sx={{ mt: 2 }}>
        Upload
      </Button>
    </Box>
  );
};

export default UploadForm;

