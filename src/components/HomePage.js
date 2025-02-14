import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Container sx={{ textAlign: 'center', mt: 4 }}>
      <Typography variant="h3" gutterBottom>
        Chào mừng đến với User Management
      </Typography>
      <Typography variant="h6" gutterBottom>
        Quản lý người dùng dễ dàng với hệ thống của chúng tôi.
      </Typography>
      <Box mt={4}>
        <Button variant="contained" color="primary" sx={{ mx: 1 }} onClick={() => navigate('/login')}>
          Đăng nhập
        </Button>
        <Button variant="outlined" color="primary" sx={{ mx: 1 }} onClick={() => navigate('/register')}>
          Đăng ký
        </Button>
      </Box>
    </Container>
  );
};

export default HomePage;
