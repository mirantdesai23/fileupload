import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';

const FileList = ({ files }) => {
  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Uploaded Files
      </Typography>
      <Grid container spacing={2}>
        {files.map((file) => (
          <Grid item key={file._id} xs={12} sm={6} md={4}>
            <Box sx={{ border: '1px solid #ccc', p: 2, borderRadius: 2 }}>
              <Typography variant="h6">{file.filename}</Typography>
              <Typography>Size: {(file.size / 1024).toFixed(2)} KB</Typography>
              <Typography>Type: {file.mimetype}</Typography>
              <Typography>Uploaded: {new Date(file.uploadTime).toLocaleString()}</Typography>
              <Button
                variant="outlined"
                href={`http://localhost:5000/uploads/${file.filepath}`}
                target="_blank"
                fullWidth
                sx={{ mt: 1 }}
              >
                Download
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FileList;

