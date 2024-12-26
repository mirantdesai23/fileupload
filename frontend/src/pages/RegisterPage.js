import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import AuthForm from '../components/AuthForm';

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleRegisterSuccess = () => {
    // Redirect to the login page after a successful registration
    navigate('/login');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 8 }}>
      <Typography variant="h3" gutterBottom>
        Register
      </Typography>
      <AuthForm isLogin={false} onSuccess={handleRegisterSuccess} />
      <Typography sx={{ mt: 2 }}>
        Already have an account? <a href="/login">Login here</a>
      </Typography>
    </Box>
  );
};

export default RegisterPage;

