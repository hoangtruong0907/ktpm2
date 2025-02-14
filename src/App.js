import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import UserList from './components/UserList';
import HomePage from './components/HomePage'; // Import HomePage
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';

const PrivateRoute = ({ children }) => {
  const { token } = useAuth();
  return token ? children : <Navigate to="/login" />;
};

const Navigation = () => {
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          User Management
        </Typography>
        {!token ? (
          <>
            <Button color="inherit" onClick={() => navigate('/')}> {/* Quay về trang Home */}
              Trang chủ
            </Button>
            <Button color="inherit" onClick={() => navigate('/login')}>
              Login
            </Button>
            <Button color="inherit" onClick={() => navigate('/register')}>
              Register
            </Button>
          </>
        ) : (
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navigation />
        <Container sx={{ mt: 4 }}>
          <Routes>
            <Route path="/" element={<HomePage />} /> {/* Trang Home */}
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route
              path="/home"
              element={
                <PrivateRoute>
                  <UserList />
                </PrivateRoute>
              }
            />
          </Routes>
        </Container>
      </Router>
    </AuthProvider>
  );
};

export default App;
