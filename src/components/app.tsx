import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  Grid,
  Card,
  CardContent,
  Chip,
  Divider
} from '@mui/material';
import {
  Rocket,
  Code,
  Speed,
  Security
} from '@mui/icons-material';

export const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: 2,
          p: 4,
          color: 'white',
          textAlign: 'center'
        }}
      >
        {/* Header Section */}
        <Paper
          elevation={6}
          sx={{
            p: 4,
            mb: 4,
            borderRadius: 3,
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            color: 'black',
            maxWidth: 800,
            width: '100%'
          }}
        >
          <Typography variant="h2" component="h1" gutterBottom fontWeight="bold">
            🎉 Welcome to Your React App!
          </Typography>
          <Typography variant="h5" component="p" sx={{ mb: 3, color: 'text.secondary' }}>
            Your microfrontend cockpit is up and running successfully
          </Typography>
          
          <Chip 
            label="✅ Ready to Develop" 
            color="success" 
            size="medium" 
            sx={{ fontSize: '1rem', py: 2 }}
          />
        </Paper>

        {/* Features Grid */}
        <Grid container spacing={3} sx={{ mb: 4, maxWidth: 1000 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%', textAlign: 'center', p: 2 }}>
              <CardContent>
                <Rocket sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  Fast Setup
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Zero configuration needed. Start building immediately.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%', textAlign: 'center', p: 2 }}>
              <CardContent>
                <Code sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  TypeScript
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Full TypeScript support for better development experience.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%', textAlign: 'center', p: 2 }}>
              <CardContent>
                <Speed sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  Hot Reload
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  See your changes instantly with webpack dev server.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%', textAlign: 'center', p: 2 }}>
              <CardContent>
                <Security sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  Production Ready
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Built with best practices and security in mind.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Getting Started Section */}
        <Paper
          sx={{
            p: 3,
            borderRadius: 2,
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(5px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            maxWidth: 600,
            width: '100%'
          }}
        >
          <Typography variant="h5" gutterBottom sx={{ color: 'white', mb: 2 }}>
            🚀 Next Steps
          </Typography>
          <Divider sx={{ mb: 2, bgcolor: 'rgba(255, 255, 255, 0.3)' }} />
          
          <Box sx={{ textAlign: 'left' }}>
            <Typography variant="body1" sx={{ mb: 1, color: 'rgba(255, 255, 255, 0.9)' }}>
              • Edit <code style={{ background: 'rgba(0,0,0,0.2)', padding: '2px 6px', borderRadius: '4px' }}>src/components/app.tsx</code> to start building
            </Typography>
            <Typography variant="body1" sx={{ mb: 1, color: 'rgba(255, 255, 255, 0.9)' }}>
              • Run <code style={{ background: 'rgba(0,0,0,0.2)', padding: '2px 6px', borderRadius: '4px' }}>npm run start:local</code> for development
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, color: 'rgba(255, 255, 255, 0.9)' }}>
              • Check out Material-UI components for beautiful UI
            </Typography>
          </Box>
          
          <Button
            variant="contained"
            size="large"
            sx={{
              mt: 2,
              background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
              boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
              '&:hover': {
                background: 'linear-gradient(45deg, #FE6B8B 60%, #FF8E53 100%)',
              }
            }}
            onClick={() => window.open('https://mui.com/', '_blank')}
          >
            Explore Material-UI
          </Button>
        </Paper>

        {/* Footer */}
        <Box sx={{ mt: 4, opacity: 0.8 }}>
          <Typography variant="body2">
            Built with ❤️ using React + TypeScript + Material-UI
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};
