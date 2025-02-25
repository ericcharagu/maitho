import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar, ResponsiveContainer } from 'recharts';
import { Paper, Typography, List, ListItem, ListItemText, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const ZoneDensityCard = () => {
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

  const heatmapData = [
    { zone: 'Zone A', morning: 45, afternoon: 65 },
    { zone: 'Zone B', morning: 30, afternoon: 23 },
    { zone: 'Zone C', morning: 60, afternoon: 48 },
    { zone: 'Zone D', morning: 25, afternoon: 52 }
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
              Zone Density Analysis
            </CardTitle>
            
            <Box sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', lg: 'row' },
              gap: 4, alignItems:'center'
            }}>
              <Box sx={{ width: { xs: '100%', lg: '50%' } }}>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={heatmapData}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                    <XAxis dataKey="zone" />
                    <YAxis />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        border: 'none',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                      }}
                    />
                    <Bar dataKey="morning" fill="#2563eb" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="afternoon" fill="#7c3aed" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </Box>

              <Box sx={{ width: { xs: '100%', lg: '50%' } }}>
                <List sx={{ '& > li': { py: 2 } }}>
                  <ListItem>
                    <ListItemText
                      primary={
                        <FeatureTitle>
                          Crowd Management
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
                          Resource Allocation
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
                          Optimized Layouts
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

export default ZoneDensityCard;