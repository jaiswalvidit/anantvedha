import React, { useState } from 'react';
import { Button, Typography, Grid, TextField } from '@mui/material';
import "./Contactus.css"; // Import CSS file for additional styling

function ContactUs() {
  // State variables for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    const errors = {};
    if (!name.trim()) {
      errors.name = 'Name is required';
    }
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
    if (!message.trim()) {
      errors.message = 'Message is required';
    }
    setErrors(errors);

    // If no errors, submit the form
    if (Object.keys(errors).length === 0) {
      // Here you can submit the form data, e.g., send it to a backend server
      console.log('Form submitted:', { name, email, message });
      // Reset form fields
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full md:w-1/2 p-8 bg-white shadow-lg rounded-lg">
        <Typography variant="h5" className="mb-4 text-center text-gray-800">
          Get in touch
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container direction="column" spacing={2}>
            <Grid item className="mb-4">
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={!!errors.name}
                helperText={errors.name}
                className="bg-gray-100"
              />
            </Grid>
            <Grid item className="mb-4">
              <TextField
                label="Email"
                variant="outlined"
                type="email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!errors.email}
                helperText={errors.email}
                className="bg-gray-100"
              />
            </Grid>
            <Grid item className="mb-4">
              <TextField
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                error={!!errors.message}
                helperText={errors.message}
                className="bg-gray-100"
              />
            </Grid>
            <Grid item>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                className="hover:bg-blue-700 transition-colors duration-300"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
      <div className="hidden md:block md:w-1/2">
        {/* Replace the image source with your own contact image */}
        <img src="contact_us_image.jpg" alt="Contact Us" className="contact-image" />
      </div>
    </div>
  );
}

export default ContactUs;
