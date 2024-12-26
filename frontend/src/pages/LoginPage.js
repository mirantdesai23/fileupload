import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import AuthForm from '../components/AuthForm';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    // Redirect to the home page after a successful login
    navigate('/');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 8 }}>
      <Typography variant="h3" gutterBottom>
        Login
      </Typography>
      <AuthForm isLogin={true} onSuccess={handleLoginSuccess} />
      <Typography sx={{ mt: 2 }}>
        Don't have an account? <a href="/register">Register here</a>
      </Typography>
    </Box>
  );
};

export default LoginPage;

