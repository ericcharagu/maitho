import React, { useState, useEffect } from "react";
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
  Autocomplete,
  IconButton,
  Alert,
  AlertTitle,
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";
import { Camera, Wifi, CheckCircle, Mail, Phone } from "lucide-react";
import { supabase } from "../../utils/superbase";

import "./getStarted.css";

// Dictionary of African countries and their states/provinces/counties
const africanCountriesAndRegions = {
  Kenya: [
    "Nairobi",
    "Mombasa",
    "Kisumu",
    "Nakuru",
    "Eldoret",
    "Kiambu",
    "Machakos",
    "Kajiado",
    "Nyeri",
    "Uasin Gishu",
  ],
  Nigeria: [
    "Lagos",
    "Kano",
    "Abuja",
    "Rivers",
    "Oyo",
    "Delta",
    "Kaduna",
    "Imo",
    "Kwara",
    "Plateau",
  ],
  "South Africa": [
    "Gauteng",
    "Western Cape",
    "KwaZulu-Natal",
    "Eastern Cape",
    "Free State",
    "Mpumalanga",
    "North West",
    "Limpopo",
    "Northern Cape",
  ],
  Ghana: [
    "Greater Accra",
    "Ashanti",
    "Eastern",
    "Western",
    "Central",
    "Northern",
    "Volta",
    "Brong-Ahafo",
    "Upper East",
    "Upper West",
  ],
  Ethiopia: [
    "Addis Ababa",
    "Oromia",
    "Amhara",
    "Tigray",
    "Sidama",
    "Somali",
    "Southern Nations",
    "Afar",
    "Benishangul-Gumuz",
    "Gambela",
  ],
  Tanzania: [
    "Dar es Salaam",
    "Arusha",
    "Dodoma",
    "Mwanza",
    "Zanzibar",
    "Kilimanjaro",
    "Tanga",
    "Mbeya",
    "Morogoro",
    "Iringa",
  ],
  Egypt: [
    "Cairo",
    "Alexandria",
    "Giza",
    "Shubra El-Kheima",
    "Port Said",
    "Suez",
    "Luxor",
    "Aswan",
    "Asyut",
    "Sinai",
  ],
  Uganda: [
    "Kampala",
    "Wakiso",
    "Mukono",
    "Jinja",
    "Gulu",
    "Mbarara",
    "Masaka",
    "Lira",
    "Arua",
    "Mbale",
  ],
  Morocco: [
    "Casablanca",
    "Rabat",
    "Marrakesh",
    "Fes",
    "Tangier",
    "Agadir",
    "Meknes",
    "Oujda",
    "Kenitra",
    "Tetouan",
  ],
  "Côte d'Ivoire": [
    "Abidjan",
    "Bouaké",
    "Daloa",
    "Yamoussoukro",
    "Korhogo",
    "San-Pédro",
    "Divo",
    "Man",
    "Gagnoa",
    "Abengourou",
  ],
};

// List of all African countries for the dropdown
const africanCountries = Object.keys(africanCountriesAndRegions).sort();

// Component styling
const GetStartedSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2, 0),
  backgroundColor: "#f8f9fa",
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: "16px",
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
}));

const FormTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "1.5rem",
  marginBottom: theme.spacing(3),
  color: "#1a237e",
}));

const RequirementsList = styled(List)(({ theme }) => ({
  backgroundColor: "rgba(63, 81, 181, 0.05)",
  borderRadius: "8px",
  padding: theme.spacing(2),
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
      width: "100%",
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
  margin: "0 auto",
}));

export default function GetStarted() {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    location: "",
    country: "",
    email: "",
    phone: "",
    camerasInstalled: "yes",
    estimateCamera: "1-50",
    internetConnection: "yes",
  });

  // State for available regions based on selected country
  const [availableRegions, setAvailableRegions] = useState([]);

  // Loading and success states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState(null);

  // Form validation
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
    business: false,
  });

  // Update available regions when country changes and handle submit success timeout
useEffect(() => {
  // Handle success message timeout
  let timer;
  if (submitSuccess) {
    timer = setTimeout(() => {
      setSubmitSuccess(false);
    }, 10000);
  }
  
  // Handle country change and update regions
  if (formData.country && africanCountriesAndRegions[formData.country]) {
    setAvailableRegions(africanCountriesAndRegions[formData.country]);
    // Reset location if the country changes
    setFormData((prev) => ({ ...prev, location: "" }));
  } else {
    setAvailableRegions([]);
  }
  
  // Cleanup function
  return () => {
    clearTimeout(timer);
  };
}, [formData.country, submitSuccess]);

  // Validation functions
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    // Basic phone validation - allows different formats like +XX XXX XXX XXXX
    const regex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,9}$/;
    return regex.test(phone);
  };

  // Handle form validation
  const validateForm = () => {
    const newErrors = {
      name: !formData.name.trim(),
      email: !validateEmail(formData.email),
      phone: !validatePhone(formData.phone),
      business: !formData.business.trim(),
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      // Make request to Supabase REST API

      const { data, error } = await supabase
        .from("getstarted")
        .insert([formData]);

      if (error) throw new Error(error.message);

      setSubmitSuccess(true);

      // Reset form after successful submission
      /* setFormData({
        name: "",
        business: "",
        location: "",
        country: "",
        email: "",
        phone: "",
        camerasInstalled: "yes",
        estimateCamera: "1-50",
        internetConnection: "yes",
      });  */
    } catch (err) {
      setError(err.message || "Failed to submit form");
      console.error("Form submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle phone number input to only allow numbers, +, -, spaces and parentheses
  const handlePhoneInput = (e) => {
    const value = e.target.value;
    const regex = /^[0-9+\-() ]*$/;

    if (regex.test(value) || value === "") {
      setFormData({ ...formData, phone: value });
      // Clear error if valid
      if (validatePhone(value)) {
        setErrors({ ...errors, phone: false });
      }
    }
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
              <Grid item md={5}>
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

              <Grid md={7}>
                <StyledPaper elevation={0}>
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      {/* Personal Info Section */}
                      <Grid sx={{ mt: 2, width: "100%" }}>
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
                      <Grid container spacing={2} sx={{ width: "100%" }}>
                        <Grid size={{ xs: 12, md: 4 }}>
                          <StyledTextField
                            fullWidth
                            label="Full Name"
                            id="name"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            error={errors.name}
                            helperText={errors.name ? "Name is required" : ""}
                            required
                            variant="outlined"
                            sx={{ display: "flex", justifyContent: "center" }}
                          />
                        </Grid>

                        <Grid size={{ xs: 12, md: 4 }}>
                          <StyledTextField
                            fullWidth
                            label="Email Address"
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => {
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              });
                              if (validateEmail(e.target.value)) {
                                setErrors({ ...errors, email: false });
                              }
                            }}
                            error={errors.email}
                            helperText={
                              errors.email ? "Valid email is required" : ""
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

                        <Grid size={{ xs: 12, md: 4 }}>
                          <StyledTextField
                            fullWidth
                            label="Phone Number"
                            id="phone"
                            value={formData.phone}
                            onChange={handlePhoneInput}
                            error={errors.phone}
                            helperText={
                              errors.phone
                                ? "Valid phone number is required"
                                : ""
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
                      <Grid sx={{ mt: 2, width: "100%" }}>
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
                      <Grid container spacing={2} sx={{ width: "100%" }}>
                        <Grid size={{ xs: 12, md: 4 }}>
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
                            error={errors.business}
                            helperText={
                              errors.business ? "Business name is required" : ""
                            }
                            required
                            variant="outlined"
                            sx={{ display: "flex", justifyContent: "center" }}
                          />
                        </Grid>

                        <Grid size={{ xs: 12, md: 4 }}>
                          <StyledFormControl fullWidth>
                            <InputLabel id="country-label">Country</InputLabel>
                            <Select
                              labelId="country-label"
                              id="country"
                              value={formData.country}
                              label="Country"
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  country: e.target.value,
                                })
                              }
                              required
                            >
                              {africanCountries.map((country) => (
                                <MenuItem key={country} value={country}>
                                  {country}
                                </MenuItem>
                              ))}
                            </Select>
                          </StyledFormControl>
                        </Grid>

                        <Grid size={{ xs: 12, md: 4 }}>
                          <StyledFormControl
                            fullWidth
                            disabled={!formData.country}
                          >
                            <InputLabel id="location-label">
                              State/County/Province
                            </InputLabel>
                            <Select
                              labelId="location-label"
                              id="location"
                              value={formData.location}
                              label="State/County/Province"
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  location: e.target.value,
                                })
                              }
                              required
                            >
                              {availableRegions.map((region) => (
                                <MenuItem key={region} value={region}>
                                  {region}
                                </MenuItem>
                              ))}
                            </Select>
                          </StyledFormControl>
                        </Grid>
                      </Grid>
                      {/* Technical Requirements Section */}
                      <Grid xs={4} sx={{ mt: 2, width: "100%" }}>
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
                      <Grid
                        container
                        spacing={3}
                        sx={{ width: "100%" }}
                        id="formGrid"
                      >
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

                        <Grid size={{ xs: 12, md: 4 }}>
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

                        <Grid size={{ xs: 12, md: 4 }}>
                          <StyledFormControl fullWidth>
                            <InputLabel id="estimate-label">
                              Camera Estimate
                            </InputLabel>
                            <Select
                              labelId="estimate-label"
                              id="estimate"
                              value={formData.estimateCamera}
                              label="Camera Estimate"
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  estimateCamera: e.target.value,
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
                    </Grid>

                    <Box
                      sx={{ display: "flex", justifyContent: "center", mt: 4 }}
                    >
                      <SubmitButton
                        type="submit"
                        variant="contained"
                        size="large"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Get Started"}
                      </SubmitButton>
                    </Box>
                    <Box sx={{ mt: 3 }}>
                    {submitSuccess && (
  <Alert 
    severity="success"
    sx={{
      textAlign: "center",
      "& .MuiAlert-message": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
    }}
    onClose={() => setSubmitSuccess(false)}
    action={
      <IconButton
        aria-label="close"
        color="inherit"
        size="small"
        onClick={() => setSubmitSuccess(false)}
      >
        <CloseIcon fontSize="inherit" />
      </IconButton>
    }
  >
    <strong>Success.</strong> Form submitted successfully! Our team will contact you shortly.
  </Alert>
)}
                      {error && (
                        <Alert
                          severity="error"
                          icon={<AlertCircle size={24} />}
                          sx={{
                            mb: 3,
                            borderRadius: 2,
                            "& .MuiAlert-message": {
                              display: "flex",
                              alignItems: "center",
                            },
                          }}
                        >
                          <AlertTitle>Error</AlertTitle>
                          {error}
                        </Alert>
                      )}
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
