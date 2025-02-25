import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Container,
  Typography,
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";
import { Camera, Wifi, CheckCircle, Mail, Phone } from "lucide-react";
import "./getStarted.css"
const GetStartedSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2, 0),
  backgroundColor: "#f8f9fa",
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "'Montserrat', sans-serif",
  fontWeight: 700,
  fontSize: "2.5rem",
  marginBottom: theme.spacing(1),
  color: "#1a237e",
  textAlign: "center",
}));

const SectionSubtitle = styled(Typography)(({ theme }) => ({
 // fontFamily: "'Poppins', sans-serif",
  fontSize: "1.1rem",
  marginBottom: theme.spacing(5),
  maxWidth: "800px",
  margin: "0 auto",
  textAlign: "center",
  color: "#424242",
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: "16px",
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
}));

const FormTitle = styled(Typography)(({ theme }) => ({
//   fontFamily: "'Montserrat', sans-serif",
  fontWeight: 600,
  fontSize: "1.5rem",
  marginBottom: theme.spacing(3),
  color: "#1a237e",
}));

const RequirementsList = styled(List)(({ theme }) => ({
  backgroundColor: "rgba(63, 81, 181, 0.05)",
  borderRadius: "8px",
  padding: theme.spacing(2),
  marginBottom: theme.spacing(4),
}));

const RequirementItem = styled(ListItem)({
  padding: "8px 0",
});

const StyledListItemIcon = styled(ListItemIcon)({
  minWidth: "40px",
});

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  "& .MuiInputLabel-root": {
    backgroundColor: "#f8f9fa",
    padding: "0 8px",
    borderRadius: "4px",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#bdbdbd",
      width:"100%"
    },
    "&:hover fieldset": {
      borderColor: "#3f51b5",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#3f51b5",
    },
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputLabel-root": {
    backgroundColor: "#f8f9fa",
    padding: "0 8px",
    borderRadius: "4px",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#bdbdbd",
    },
    "&:hover fieldset": {
      borderColor: "#3f51b5",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#3f51b5",
    },
  },
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  fontFamily: "'Poppins', sans-serif",
  backgroundColor: "#3f51b5",
  color: "white",
  padding: theme.spacing(1.2, 4),
  borderRadius: "30px",
  textTransform: "none",
  fontSize: "1rem",
  fontWeight: 500,
  marginTop: theme.spacing(3),
  boxShadow: "0 4px 14px 0 rgba(63, 81, 181, 0.4)",
  "&:hover": {
    backgroundColor: "#303f9f",
    boxShadow: "0 6px 20px rgba(63, 81, 181, 0.6)",
  },
}));

const FormContainer = styled(Box)(({ theme }) => ({
  maxWidth: "100vw",
  margin: "0 auto",
}));

export default function GetStarted() {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    location: "",
    country:"",
    email: "",
    phone: "",
    camerasInstalled: "yes",
    estimateRange: "1-50",
    internetConnection: "yes",
    inquiry: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // You could add API call here
  };

  return (
    <GetStartedSection id="get-started">
      <Container sx={{ margin: "10px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <FormContainer>
            <Grid
              container
              spacing={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                flexWrap: "nowrap",
              }}
            >
              <Grid item  md={5}>
                <div>
                  <RequirementsList>
                    <FormTitle variant="h3">Requirements</FormTitle>
                    <Typography variant="body1" sx={{ mb: 3 }}>
                      To get started with Maitho's retail analytics platform,
                      you'll need:
                    </Typography>
                    <RequirementItem>
                      <StyledListItemIcon>
                        <Camera color="#3f51b5" size={24} />
                      </StyledListItemIcon>
                      <ListItemText
                        primary="Camera/CCTV System"
                        secondary="Existing cameras or new installation options available"
                      />
                    </RequirementItem>

                    <RequirementItem>
                      <StyledListItemIcon>
                        <Wifi color="#3f51b5" size={24} />
                      </StyledListItemIcon>
                      <ListItemText
                        primary="Internet Connection"
                        secondary="Stable connection for data transmission and real-time analytics"
                      />
                    </RequirementItem>

                    <Divider sx={{ my: 2 }} />

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 2, px: 2 }}
                    >
                      Our team will assist you with setup and integration,
                      regardless of your current technical infrastructure.
                    </Typography>
                  </RequirementsList>
                </div>
              </Grid>

              <Grid  md={7}>
                <StyledPaper elevation={0}>
                  <FormTitle variant="h3">Inquiry Form</FormTitle>
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      {/* Personal Info Section */}
                      <Grid  sx={{mt:2, width:"100%"}}>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            fontWeight: 600,
                            mb: 1,
                            color: "#3f51b5",
                            borderBottom: "1px solid #e0e0e0",
                            pb: 1,
                          }}
                        >
                          Personal Information
                        </Typography>
                      </Grid>
                      <Grid container  spacing={2} sx={{width:"100%"}} >
                      <Grid  size={{ xs: 12, md: 4 }}>
                        
                        <StyledTextField
                          fullWidth
                          label="Full Name"
                          id="name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          required
                          variant="outlined"
                          sx={{ display: "flex", justifyContent: "center" }}
                        />
                      </Grid>

                      <Grid  size={{ xs: 12, md: 4 }} >
                        <StyledTextField
                          fullWidth
                          label="Email Address"
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          required
                          variant="outlined"
                          InputProps={{
                            startAdornment: (
                              <Mail
                                size={18}
                                color="#757575"
                                style={{ marginRight: "8px" }}
                              />
                            ),
                          }}
                          sx={{ display: "flex", justifyContent: "center" }}
                        />
                      </Grid>

                      <Grid  size={{ xs: 12, md: 4 }}>
                        <StyledTextField
                          fullWidth
                          label="Phone Number"
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          required
                          variant="outlined"
                          InputProps={{
                            startAdornment: (
                              <Phone
                                size={18}
                                color="#757575"
                                style={{ marginRight: "8px" }}
                              />
                            ),
                          }}
                          sx={{ display: "flex", justifyContent: "center" }}
                        />
                      </Grid>
                          </Grid>
                      {/* Business Info Section */}
                      <Grid  sx={{ mt: 2 , width:"100%"}}>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            fontWeight: 600,
                            mb: 1,
                            color: "#3f51b5",
                            borderBottom: "1px solid #e0e0e0",
                            pb: 1,
                          }}
                        >
                          Business Information
                        </Typography>
                      </Grid>
                      <Grid container  spacing={2} sx={{width:'100%'}} >
                      <Grid  size={{ xs: 12, md: 4 }}>
                        <StyledTextField
                          fullWidth
                          label="Business Name"
                          id="business"
                          value={formData.business}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              business: e.target.value,
                            })
                          }
                          required
                          variant="outlined"
                          sx={{ display: "flex", justifyContent: "center" }}
                        />
                      </Grid>

                      <Grid  size={{ xs: 12, md: 4 }}>
                        <StyledTextField
                          fullWidth
                          label="State/County/Province"
                          id="location"
                          value={formData.location}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              location: e.target.value,
                            })
                          }
                          required
                          variant="outlined"
                          sx={{ display: "flex", justifyContent: "center" }}
                        />
                      </Grid>
                      <Grid  size={{ xs: 12, md: 4 }}>
                        <StyledTextField
                          fullWidth
                          label="Country"
                          id="country"
                          value={formData.country}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              country: e.target.value,
                            })
                          }
                          required
                          variant="outlined"
                          sx={{ display: "flex", justifyContent: "center" }}
                        />
                      </Grid>
</Grid>
                      {/* Technical Requirements Section */}
                      <Grid xs={4} sx={{ mt: 2 , width:"100%"}}>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            fontWeight: 600,
                            mb: 1,
                            color: "#3f51b5",
                            borderBottom: "1px solid #e0e0e0",
                            pb: 1,
                          }}
                        >
                          Technical Requirements
                        </Typography>
                      </Grid>

                      {/* Evenly spaced technical requirement fields */}
                      <Grid container  spacing={3} sx={{width:'100%'}} id="formGrid" >
                        <Grid size={{ xs: 12, md: 4 }}>
                          <StyledFormControl fullWidth>
                            <InputLabel id="cameras-label">
                              Cameras Installed
                            </InputLabel>
                            <Select
                              labelId="cameras-label"
                              id="cameras"
                              value={formData.camerasInstalled}
                              label="Cameras Installed"
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  camerasInstalled: e.target.value,
                                })
                              }
                            >
                              <MenuItem value="yes">Yes</MenuItem>
                              <MenuItem value="no">No</MenuItem>
                            </Select>
                          </StyledFormControl>
                        </Grid>

                        <Grid  size={{ xs: 12, md: 4 }}>
                          <StyledFormControl fullWidth>
                            <InputLabel id="internet-label">
                              Internet Connection
                            </InputLabel>
                            <Select
                              labelId="internet-label"
                              id="internet"
                              value={formData.internetConnection}
                              label="Internet Connection"
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  internetConnection: e.target.value,
                                })
                              }
                            >
                              <MenuItem value="yes">Yes</MenuItem>
                              <MenuItem value="no">No</MenuItem>
                            </Select>
                          </StyledFormControl>
                        </Grid>

                        <Grid  size={{ xs: 12, md: 4 }}>
                          <StyledFormControl fullWidth>
                            <InputLabel id="estimate-label">
                              Camera Estimate
                            </InputLabel>
                            <Select
                              labelId="estimate-label"
                              id="estimate"
                              value={formData.estimateRange}
                              label="Camera Estimate"
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  estimateRange: e.target.value,
                                })
                              }
                            >
                              <MenuItem value="1-50">1-50</MenuItem>
                              <MenuItem value="51-100">51-100</MenuItem>
                              <MenuItem value="101-200">101-200</MenuItem>
                              <MenuItem value="201-500">201-500</MenuItem>
                              <MenuItem value="500+">500+</MenuItem>
                            </Select>
                          </StyledFormControl>
                        </Grid>
                      </Grid>

                      {/* Inquiry Section */}
                      <Grid   sx={{ mt: 2 , width:"100%"}}>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            fontWeight: 600,
                            mb: 1,
                            color: "#3f51b5",
                            borderBottom: "1px solid #e0e0e0",
                            pb: 1,
                          }}
                        >
                          Inquiry
                        </Typography>
                      </Grid>

                      <Grid  size={12}>
                        <StyledTextField
                          fullWidth
                          label="Your Inquiry or Comments"
                          id="inquiry"
                          value={formData.inquiry}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              inquiry: e.target.value,
                            })
                          }
                          variant="outlined"
                          multiline
                          rows={4}
                          placeholder="Please share any questions, specific requirements, or additional information about your business needs..."
                          sx={{ display: "flex", justifyContent: "center" }}
                        />
                      </Grid>
                    </Grid>

                    <Box
                      sx={{ display: "flex", justifyContent: "center", mt: 4 }}
                    >
                      <SubmitButton
                        type="submit"
                        variant="contained"
                        size="large"
                      >
                        Submit Inquiry
                      </SubmitButton>
                    </Box>
                  </form>
                </StyledPaper>
              </Grid>
            </Grid>
          </FormContainer>
        </motion.div>
      </Container>
    </GetStartedSection>
  );
}