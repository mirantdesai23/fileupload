import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check if the user is logged in when the app loads
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const { data } = await axios.get('/api/auth/me'); // Adjust endpoint as per backend
        setUser(data.user);
      } catch (error) {
        console.error('Authentication check failed:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  // Login function
  const login = async (credentials) => {
    try {
      const { data } = await axios.post('/api/auth/login', credentials);
      setUser(data.user);
      localStorage.setItem('token', data.token);
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  // Register function
  const register = async (credentials) => {
    try {
      const { data } = await axios.post('/api/auth/register', credentials);
      setUser(data.user);
      localStorage.setItem('token', data.token);
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);

export default AuthContext;

