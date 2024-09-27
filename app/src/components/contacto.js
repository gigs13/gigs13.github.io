import { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  IconButton,
  Container,
  Box,
  Typography,
  Collapse,
  Alert,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { FormControl } from "@mui/base";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

const Contacto = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};

    if (!formValues.name) {
      errors.name = "Your name is required";
    }

    if (!formValues.email) {
      errors.email = "Your email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = "Must be a valid email address";
    }

    if (!formValues.message) {
      errors.message = "A message is required for good fortune";
    }

    return errors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      try {
        const formData = new URLSearchParams();
        for (const key in formValues) {
          formData.append(key, formValues[key]);
        }
        const response = await fetch("https://formkeep.com/f/ea5bec0ac885", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formData.toString(),
        });
        if (response.ok) {
          setSubmitSuccess(true);
          setSubmitError(false);
          setAttempts(0);
          setFormValues({
            name: "",
            email: "",
            message: "",
          });
          setFormErrors({});
        } else {
          setSubmitSuccess(false);
          setSubmitError(true);
          setAttempts(attempts + 1);
        }
      } catch (error) {
        console.error("Error submitting the form:", error);
        setSubmitSuccess(false);
        setSubmitError(true);
        setAttempts(attempts + 1);
      }
    } else {
      setFormErrors(errors);
      setSubmitError(true);
      setAttempts(attempts + 1);
    }
  };

  return (
    <Container
      id="contact"
      sx={{
        p: 2,
        margin: "auto",
        flexGrow: 1,
      }}
    >
      <Box component="form" onSubmit={handleSubmit}>
        <Grid
          container
          spacing={2}
          sx={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid item xs={12}>
            <Box color="success.main" sx={{ width: "100%" }}>
              <Collapse in={submitSuccess}>
                <Alert
                  severity="success"
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setSubmitSuccess(false);
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                  sx={{ mb: 2 }}
                >
                  Your request has been submitted, I'll get in touch soon!
                </Alert>
              </Collapse>
            </Box>
            <Box color="error.main" sx={{ width: "100%" }}>
              <Collapse in={submitError}>
                <Alert
                  severity="error"
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setSubmitError(false);
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                  sx={{ mb: 2 }}
                >
                  {attempts < 2
                    ? "Your request has not been submitted, please check your input data before requesting again."
                    : "If the error persists, please contact me through my social media."}
                </Alert>
              </Collapse>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" color="secondary">
              Get in touch
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl>
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Name"
                value={formValues.name}
                onChange={handleChange}
                error={Boolean(formErrors.name)}
                helperText={formErrors.name}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                type="email"
                inputMode="email"
                value={formValues.email}
                onChange={handleChange}
                error={Boolean(formErrors.email)}
                helperText={formErrors.email}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl>
              <TextField
                fullWidth
                id="message"
                name="message"
                label="Message"
                multiline
                rows={4}
                value={formValues.message}
                onChange={handleChange}
                error={Boolean(formErrors.message)}
                helperText={formErrors.message}
              />
            </FormControl>
          </Grid>
          <Grid item>
            <Button
              color="primary"
              variant="contained"
              type="submit"
              endIcon={<SendRoundedIcon />}
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Contacto;
