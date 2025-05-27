import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
  Fade,
  Skeleton,
  Stack,
  Divider
} from '@mui/material';
import {
  ExpandMore,
  ArrowBack,
  CompareArrows,
  Analytics,
  Visibility,
  QuestionAnswer,
  TrendingUp
} from '@mui/icons-material';

interface SimilarTransaction {
  id: string;
  image: string;
  similarity: number;
  amount: number;
  date: string;
  merchant: string;
  qa: Array<{ question: string; answer: string }>;
}

interface ComparisonData {
  field: string;
  current: string;
  average: string;
  status: 'good' | 'warning' | 'critical';
}

export const TransactionDetails = () => {
  const { transactionId } = useParams<{ transactionId: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [comparisonExpanded, setComparisonExpanded] = useState(false);
  const [similarExpanded, setSimilarExpanded] = useState(false);
  const [qaExpanded, setQaExpanded] = useState<{ [key: string]: boolean }>({});

  // Mock data - in real app, this would come from API
  const [transactionData, setTransactionData] = useState<any>(null);
  const [similarTransactions, setSimilarTransactions] = useState<SimilarTransaction[]>([]);
  const [comparisonData, setComparisonData] = useState<ComparisonData[]>([]);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setTransactionData({
        id: transactionId,
        image: '/api/placeholder/400/300',
        amount: 125.50,
        merchant: 'Tech Store Inc.',
        date: '2024-01-15',
        category: 'Electronics',
        status: 'Approved'
      });

      setComparisonData([
        { field: 'Amount', current: '$125.50', average: '$98.30', status: 'warning' },
        { field: 'Processing Time', current: '2.3s', average: '1.8s', status: 'good' },
        { field: 'Risk Score', current: '0.23', average: '0.18', status: 'warning' },
        { field: 'Merchant Trust', current: '8.9/10', average: '8.5/10', status: 'good' }
      ]);

      setSimilarTransactions([
        {
          id: 'TXN987654321',
          image: '/api/placeholder/300/200',
          similarity: 94.5,
          amount: 119.99,
          date: '2024-01-10',
          merchant: 'Tech Store Inc.',
          qa: [
            { question: 'Is this transaction legitimate?', answer: 'Yes, based on merchant history and user patterns.' },
            { question: 'Why is the similarity so high?', answer: 'Same merchant, similar amount, and matching user behavior patterns.' }
          ]
        },
        {
          id: 'TXN456789123',
          image: '/api/placeholder/300/200',
          similarity: 87.2,
          amount: 134.25,
          date: '2024-01-08',
          merchant: 'Electronics Hub',
          qa: [
            { question: 'What makes this similar?', answer: 'Similar transaction category and amount range.' },
            { question: 'Should I be concerned?', answer: 'No, this is within normal spending patterns.' }
          ]
        },
        {
          id: 'TXN789123456',
          image: '/api/placeholder/300/200',
          similarity: 82.8,
          amount: 112.75,
          date: '2024-01-05',
          merchant: 'Digital Goods Co.',
          qa: [
            { question: 'Why is this transaction flagged as similar?', answer: 'Similar merchant category and transaction timing patterns.' },
            { question: 'Is this a recurring purchase?', answer: 'No, but it follows typical user purchasing behavior.' }
          ]
        }
      ]);

      setLoading(false);
    }, 1500);
  }, [transactionId]);

  const toggleQA = (transactionId: string) => {
    setQaExpanded(prev => ({
      ...prev,
      [transactionId]: !prev[transactionId]
    }));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'success';
      case 'warning': return 'warning';
      case 'critical': return 'error';
      default: return 'default';
    }
  };

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Stack spacing={3}>
          <Skeleton variant="rectangular" height={60} />
          <Skeleton variant="rectangular" height={300} />
          <Skeleton variant="rectangular" height={200} />
          <Grid container spacing={3}>
            {[1, 2, 3].map((i) => (
              <Grid item xs={12} md={4} key={i}>
                <Skeleton variant="rectangular" height={400} />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Fade in timeout={500}>
        <Box sx={{ mb: 4 }}>
          <Button
            startIcon={<ArrowBack />}
            onClick={() => navigate('/nmai')}
            sx={{ mb: 2 }}
          >
            Back to Search
          </Button>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
            Transaction Analysis
          </Typography>
          <Typography variant="h6" color="text.secondary">
            ID: {transactionId}
          </Typography>
        </Box>
      </Fade>

      {/* Transaction Image */}
      <Fade in timeout={800}>
        <Paper elevation={4} sx={{ mb: 4, overflow: 'hidden', borderRadius: 3 }}>
          <Box sx={{ position: 'relative' }}>
            <img
              src={transactionData?.image}
              alt="Transaction"
              style={{
                width: '100%',
                height: '400px',
                objectFit: 'cover'
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: 16,
                right: 16,
                background: 'rgba(0,0,0,0.7)',
                color: 'white',
                px: 2,
                py: 1,
                borderRadius: 1
              }}
            >
              <Typography variant="h6">
                ${transactionData?.amount}
              </Typography>
            </Box>
          </Box>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="body2" color="text.secondary">Merchant</Typography>
                <Typography variant="body1" fontWeight={600}>{transactionData?.merchant}</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="body2" color="text.secondary">Date</Typography>
                <Typography variant="body1" fontWeight={600}>{transactionData?.date}</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="body2" color="text.secondary">Category</Typography>
                <Typography variant="body1" fontWeight={600}>{transactionData?.category}</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="body2" color="text.secondary">Status</Typography>
                <Chip label={transactionData?.status} color="success" size="small" />
              </Grid>
            </Grid>
          </CardContent>
        </Paper>
      </Fade>

      {/* Comparison Table */}
      <Fade in timeout={1200}>
        <Accordion
          expanded={comparisonExpanded}
          onChange={() => setComparisonExpanded(!comparisonExpanded)}
          sx={{ mb: 4, borderRadius: 2, '&:before': { display: 'none' } }}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            sx={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              borderRadius: comparisonExpanded ? '8px 8px 0 0' : '8px',
              '& .MuiAccordionSummary-content': { alignItems: 'center' }
            }}
          >
            <CompareArrows sx={{ mr: 2 }} />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Comparison Analysis
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ p: 0 }}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: 'grey.50' }}>
                    <TableCell sx={{ fontWeight: 600 }}>Metric</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Current Transaction</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Average</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {comparisonData.map((row, index) => (
                    <TableRow key={index} hover>
                      <TableCell sx={{ fontWeight: 500 }}>{row.field}</TableCell>
                      <TableCell>{row.current}</TableCell>
                      <TableCell>{row.average}</TableCell>
                      <TableCell>
                        <Chip
                          label={row.status.toUpperCase()}
                          color={getStatusColor(row.status) as any}
                          size="small"
                          variant="outlined"
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
      </Fade>

      {/* Similar Transactions */}
      <Fade in timeout={1600}>
        <Accordion
          expanded={similarExpanded}
          onChange={() => setSimilarExpanded(!similarExpanded)}
          sx={{ borderRadius: 2, '&:before': { display: 'none' } }}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            sx={{
              background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
              color: 'white',
              borderRadius: similarExpanded ? '8px 8px 0 0' : '8px',
              '& .MuiAccordionSummary-content': { alignItems: 'center' }
            }}
          >
            <TrendingUp sx={{ mr: 2 }} />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Top 3 Similar Transactions
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ p: 3 }}>
            <Grid container spacing={3}>
              {similarTransactions.map((transaction, index) => (
                <Grid item xs={12} md={4} key={transaction.id}>
                  <Card
                    elevation={3}
                    sx={{
                      height: '100%',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                      }
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={transaction.image}
                      alt={`Transaction ${transaction.id}`}
                    />
                    <CardContent>
                      <Stack spacing={2}>
                        <Box>
                          <Typography variant="h6" gutterBottom>
                            {transaction.merchant}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            ID: {transaction.id}
                          </Typography>
                        </Box>
                        
                        <Divider />
                        
                        <Grid container spacing={1}>
                          <Grid item xs={6}>
                            <Typography variant="body2" color="text.secondary">Amount</Typography>
                            <Typography variant="body1" fontWeight={600}>
                              ${transaction.amount}
                            </Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography variant="body2" color="text.secondary">Date</Typography>
                            <Typography variant="body1" fontWeight={600}>
                              {transaction.date}
                            </Typography>
                          </Grid>
                        </Grid>
                        
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Typography variant="body2" color="text.secondary">
                            Similarity:
                          </Typography>
                          <Chip
                            label={`${transaction.similarity}%`}
                            color="primary"
                            size="small"
                            sx={{ fontWeight: 600 }}
                          />
                        </Box>
                        
                        <Button
                          fullWidth
                          variant="outlined"
                          startIcon={<QuestionAnswer />}
                          onClick={() => toggleQA(transaction.id)}
                          sx={{ mt: 2 }}
                        >
                          {qaExpanded[transaction.id] ? 'Hide' : 'Show'} Q&A
                        </Button>
                        
                        {qaExpanded[transaction.id] && (
                          <Box sx={{ mt: 2 }}>
                            {transaction.qa.map((qa, qaIndex) => (
                              <Paper
                                key={qaIndex}
                                elevation={1}
                                sx={{ p: 2, mb: 1, backgroundColor: 'grey.50' }}
                              >
                                <Typography
                                  variant="body2"
                                  fontWeight={600}
                                  sx={{ mb: 1 }}
                                >
                                  Q: {qa.question}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                  A: {qa.answer}
                                </Typography>
                              </Paper>
                            ))}
                          </Box>
                        )}
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Fade>
    </Container>
  );
}; 