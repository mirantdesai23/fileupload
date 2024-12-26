import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import API from '../utils/api';

const AuthForm = ({ isLogin, onSuccess }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = isLogin ? '/auth/login' : '/auth/register';
      const { data } = await API.post(endpoint, formData);
      setMessage(data.message);
      if (isLogin && onSuccess) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('role', data.role);
        onSuccess();
      }
    } catch (error) {
      setMessage(error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: 'auto', mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        {isLogin ? 'Login' : 'Register'}
      </Typography>
      {message && (
        <Typography color="error" gutterBottom>
          {message}
        </Typography>
      )}
      <TextField
        fullWidth
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        margin="normal"
        required
      />
      <Button variant="contained" color="primary" type="submit" fullWidth sx={{ mt: 2 }}>
        {isLogin ? 'Login' : 'Register'}
      </Button>
    </Box>
  );
};

export default AuthForm;

