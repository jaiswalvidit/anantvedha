import React, { useState } from 'react';
import { Button, Typography, Grid, TextField } from '@mui/material';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
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

    if (Object.keys(errors).length === 0) {
      console.log('Form submitted:', { name, email, message });
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full md:w-1/2 p-8 bg-white shadow-lg rounded-lg">
        <Typography variant="h5" className="mb-4 text-center text-gray-800">
          Get in touch
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container direction="column" spacing={3}>
            <Grid item>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={!!errors.name}
                helperText={errors.name}
              />
            </Grid>
            <Grid item>
              <TextField
                label="Email"
                variant="outlined"
                type="email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!errors.email}
                helperText={errors.email}
              />
            </Grid>
            <Grid item>
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
        <img src="contact_us_image.jpg" alt="Contact Us" className="object-cover w-full h-full" />
      </div>
    </div>
  );
}

export default ContactUs;
