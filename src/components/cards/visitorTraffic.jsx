import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line, ResponsiveContainer } from 'recharts';
import { Paper, Typography, List, ListItem, ListItemText, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const VisitorTraffic = () => {
  // Styled components
  const CardTitle = styled(Typography)(({ theme }) => ({
    fontSize: '1.75rem',
    fontWeight: 700,
    background: 'linear-gradient(45deg, #2563eb 30%, #7c3aed 90%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: theme.spacing(3),
    position: 'relative',
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: '-8px',
      left: 0,
      width: '0px',
      height: '4px',
      background: 'linear-gradient(45deg, #2563eb 30%, #7c3aed 90%)',
      borderRadius: '2px'
    }
  }));

  const FeatureTitle = styled(Typography)(({ theme }) => ({
    fontSize: '1.1rem',
    fontWeight: 600,
    color: theme.palette.grey[800],
    marginBottom: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    '&:before': {
      content: '""',
      width: '8px',
      height: '8px',
      backgroundColor: '#2563eb',
      borderRadius: '50%',
      marginRight: theme.spacing(1),
      display: 'inline-block'
    }
  }));

  const FeatureDescription = styled(Typography)(({ theme }) => ({
    fontSize: '0.95rem',
    lineHeight: 1.6,
    color: theme.palette.grey[600],
    marginLeft: theme.spacing(2),
    borderLeft: `2px solid ${theme.palette.grey[200]}`,
    paddingLeft: theme.spacing(2),
  }));

  // Sample data for charts
  const trafficData = [
    { time: "8AM", visitors: 20, avgDuration: 15 },
    { time: "10AM", visitors: 45, avgDuration: 25 },
    { time: "12PM", visitors: 68, avgDuration: 30 },
    { time: "2PM", visitors: 52, avgDuration: 28 },
    { time: "4PM", visitors: 75, avgDuration: 35 },
    { time: "6PM", visitors: 60, avgDuration: 22 },
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
      <motion.div
        {...fadeIn}
        initial="initial"
        animate="animate"
        className="w-full"
      >
        <Paper 
          elevation={3} 
          sx={{
            overflow: 'hidden',
            borderRadius: 3,
            backgroundColor: 'white',
            '&:hover': {
              transform: 'translateY(-4px)',
              transition: 'transform 0.3s ease-in-out',
              boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
            }
          }}
        >
          <Box p={4}>
            <CardTitle>
            Visitor Traffic Patterns

            </CardTitle>
            
            <Box sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', lg: 'row' },
              gap: 4, alignItems:'center',
            }}>
              <Box sx={{ width: { xs: '100%', lg: '50%' } }}>
                <ResponsiveContainer width="100%" height={250}>
                <LineChart data={trafficData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="visitors"
                      stroke="#2563eb"
                      strokeWidth={2}
                    />
                    <Line
                      type="monotone"
                      dataKey="avgDuration"
                      stroke="#7c3aed"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Box>

              <Box sx={{ width: { xs: '100%', lg: '50%' } }}>
                <List sx={{ '& > li': { py: 2 } }}>
                  <ListItem>
                    <ListItemText
                      primary={
                        <FeatureTitle>
                         Real-Time Tracking
                        </FeatureTitle>
                      }
                      secondary={
                        <FeatureDescription>
                          DeepSORT can analyze the density of visitors in different zones, helping retailers manage crowds and ensure safety, especially during peak hours.

                        </FeatureDescription>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary={
                        <FeatureTitle>
                          Identity Preservation
                        </FeatureTitle>
                      }
                      secondary={
                        <FeatureDescription>
                          By understanding which areas are most frequented, retailers can allocate staff and resources more effectively, improving customer service and operational efficiency.

                        </FeatureDescription>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary={
                        <FeatureTitle>
                         Path Analysis
                        </FeatureTitle>
                      }
                      secondary={
                        <FeatureDescription>

Density analysis helps in optimizing store layouts to reduce congestion and enhance the overall shopping experience, potentially leading to increased sales.
</FeatureDescription>
                      }
                    />
                  </ListItem>
                </List>
              </Box>
            </Box>
          </Box>
        </Paper>
      </motion.div>
    </div>
  );
};

export default VisitorTraffic;