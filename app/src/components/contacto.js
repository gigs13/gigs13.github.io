import React, { useState, useRef, useEffect } from "react";
import {
  Grid,
  TextField,
  Button,
  Container,
  Box,
  Typography,
  Stack,
  Alert,
} from "@mui/material";
import { FormControl } from "@mui/base";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

const Contacto = () => {
  const myForm = useRef(null);
  useEffect(() => {
    myForm.current.action = "https://formkeep.com/f/ea5bec0ac885";
    myForm.current.method = "POST";
    myForm.current.acceptCharset = "UTF-8";
    myForm.current.enctype = "multipart/form-data";
  });

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
      errors.email = "Must be a valid email";
    }

    if (!formValues.message) {
      errors.message = "A message is required for good fortune";
    }

    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      alert(JSON.stringify(formValues, null, 2));
      setFormValues({
        name: "",
        email: "",
        message: "",
      });
      setFormErrors({});
    } else {
      setFormErrors(errors);
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
      <Box component="form" onSubmit={handleSubmit} ref={myForm}>
        <Grid
          container
          spacing={2}
          sx={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
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
