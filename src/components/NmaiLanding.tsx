import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  InputAdornment,
  Fade,
  Chip,
  Stack
} from '@mui/material';
import {
  Search,
  Analytics,
  TrendingUp,
  Security,
  Speed
} from '@mui/icons-material';

export const NmaiLanding = () => {
  const [transactionId, setTransactionId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!transactionId.trim()) return;
    
    setIsLoading(true);
    // Simulate API call delay
    setTimeout(() => {
      setIsLoading(false);
      navigate(`/nmai/transaction/${transactionId}`);
    }, 1000);
  };

  const features = [
    { icon: <Analytics />, title: 'AI-Powered Analysis', desc: 'Advanced transaction insights' },
    { icon: <TrendingUp />, title: 'Pattern Recognition', desc: 'Identify similar transactions' },
    { icon: <Security />, title: 'Secure Processing', desc: 'Enterprise-grade security' },
    { icon: <Speed />, title: 'Real-time Results', desc: 'Instant analysis and comparison' }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* Header Section */}
        <Fade in timeout={800}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 700,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2
              }}
            >
              NmAi
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ mb: 3, maxWidth: 600, mx: 'auto' }}
            >
              Neural Network Transaction Analysis & Intelligence Platform
            </Typography>
            <Stack direction="row" spacing={1} justifyContent="center" flexWrap="wrap">
              <Chip label="AI-Powered" color="primary" variant="outlined" />
              <Chip label="Real-time Analysis" color="secondary" variant="outlined" />
              <Chip label="Enterprise Ready" color="success" variant="outlined" />
            </Stack>
          </Box>
        </Fade>

        {/* Main Input Section */}
        <Fade in timeout={1200}>
          <Paper
            elevation={8}
            sx={{
              p: 4,
              borderRadius: 3,
              background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.95) 100%)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.2)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              maxWidth: 500,
              width: '100%',
              mb: 6
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{ textAlign: 'center', mb: 3, fontWeight: 600 }}
            >
              Enter Transaction ID
            </Typography>
            
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                value={transactionId}
                onChange={(e) => setTransactionId(e.target.value)}
                placeholder="e.g., TXN123456789"
                variant="outlined"
                size="medium"
                sx={{
                  mb: 3,
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    backgroundColor: 'rgba(255,255,255,0.8)',
                    fontSize: '1.1rem',
                    padding: '4px 0',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.9)',
                    },
                    '&.Mui-focused': {
                      backgroundColor: 'white',
                    }
                  }
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search color="action" />
                    </InputAdornment>
                  ),
                }}
              />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                disabled={!transactionId.trim() || isLoading}
                sx={{
                  py: 1.5,
                  borderRadius: 2,
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  boxShadow: '0 4px 20px rgba(102, 126, 234, 0.4)',
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)',
                    boxShadow: '0 6px 25px rgba(102, 126, 234, 0.5)',
                    transform: 'translateY(-2px)'
                  },
                  '&:disabled': {
                    background: '#ccc'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                {isLoading ? 'Analyzing...' : "Let's Go!"}
              </Button>
            </form>
          </Paper>
        </Fade>

        {/* Features Grid */}
        <Fade in timeout={1600}>
          <Box sx={{ maxWidth: 800, width: '100%' }}>
            <Typography
              variant="h6"
              sx={{ textAlign: 'center', mb: 4, color: 'text.secondary' }}
            >
              Powered by Advanced AI Technology
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' },
                gap: 3
              }}
            >
              {features.map((feature, index) => (
                <Paper
                  key={index}
                  elevation={2}
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    borderRadius: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                    }
                  }}
                >
                  <Box
                    sx={{
                      color: 'primary.main',
                      mb: 2,
                      '& svg': { fontSize: 40 }
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.desc}
                  </Typography>
                </Paper>
              ))}
            </Box>
          </Box>
        </Fade>
      </Box>
    </Container>
  );
}; 