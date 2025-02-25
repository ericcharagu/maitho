import React from "react";
import { motion } from "framer-motion";
import {
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  ResponsiveContainer,
} from "recharts";
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const Conversions = () => {
  // Styled components
  const CardTitle = styled(Typography)(({ theme }) => ({
    fontSize: "1.75rem",
    fontWeight: 700,
    background: "linear-gradient(45deg, #2563eb 30%, #7c3aed 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: theme.spacing(3),
    position: "relative",
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: "-8px",
      left: 0,
      width: "0px",
      height: "4px",
      background: "linear-gradient(45deg, #2563eb 30%, #7c3aed 90%)",
      borderRadius: "2px",
    },
  }));

  const FeatureTitle = styled(Typography)(({ theme }) => ({
    fontSize: "1.1rem",
    fontWeight: 600,
    color: theme.palette.grey[800],
    marginBottom: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    "&:before": {
      content: '""',
      width: "8px",
      height: "8px",
      backgroundColor: "#2563eb",
      borderRadius: "50%",
      marginRight: theme.spacing(1),
      display: "inline-block",
    },
  }));

  const FeatureDescription = styled(Typography)(({ theme }) => ({
    fontSize: "0.95rem",
    lineHeight: 1.6,
    color: theme.palette.grey[600],
    marginLeft: theme.spacing(2),
    borderLeft: `2px solid ${theme.palette.grey[200]}`,
    paddingLeft: theme.spacing(2),
  }));

  const conversionData = [
    { month: "Jan", actual: 65, predicted: 62 },
    { month: "Feb", actual: 72, predicted: 70 },
    { month: "Mar", actual: 85, predicted: 80 },
    { month: "Apr", actual: 78, predicted: 75 },
    { month: "May", actual: 90, predicted: 88 },
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
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
            overflow: "hidden",
            borderRadius: 3,
            backgroundColor: "white",
            "&:hover": {
              transform: "translateY(-4px)",
              transition: "transform 0.3s ease-in-out",
              boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
            },
          }}
        >
          <Box p={4}>
            <CardTitle>Conversion Predictions</CardTitle>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
                gap: 4,
                alignItems: "center",
              }}
            >
              <Box sx={{ width: { xs: "100%", lg: "50%" } }}>
                <ResponsiveContainer width="100%" height={250}>
                  <AreaChart data={conversionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="actual"
                      fill="#2563eb"
                      stroke="#2563eb"
                    />
                    <Area
                      type="monotone"
                      dataKey="predicted"
                      fill="#7c3aed"
                      stroke="#7c3aed"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </Box>

              <Box sx={{ width: { xs: "100%", lg: "50%" } }}>
                <List sx={{ "& > li": { py: 2 } }}>
                  <ListItem>
                    <ListItemText
                      primary={<FeatureTitle>Behavioral Insights</FeatureTitle>}
                      secondary={
                        <FeatureDescription>
                          DeepSORT helps in understanding customer behavior by
                          analyzing their actions and interactions with
                          products, which can be used to predict purchasing
                          intent..
                        </FeatureDescription>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary={
                        <FeatureTitle>Heatmaps and Engagement</FeatureTitle>
                      }
                      secondary={
                        <FeatureDescription>
                          By creating heatmaps of customer engagement, retailers
                          can identify high-conversion areas and optimize
                          marketing strategies to drive sales.
                        </FeatureDescription>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary={
                        <FeatureTitle>Personalized Marketing</FeatureTitle>
                      }
                      secondary={
                        <FeatureDescription>
                          s to reduce congestion and enhance the overall
                          shopping experience, potentially leading to increased
                          sales.
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

export default Conversions;
