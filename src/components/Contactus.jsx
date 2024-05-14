import React, { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import contact from './images/startup/contact.jpg';

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
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Image */}
      <div className="md:w-1/2 flex justify-center items-center" style={{ margin: '10px', padding: '20px' }}>
        <div className="text-center">
          <div className="text-3xl md:text-5xl text-blue-900 mt-8">
            Let's talk about everything
          </div>
          <img
            src={contact}
            alt="Contact Us"
            className="object-cover w-full md:w-80vw mt-8 rounded-lg"
            style={{ height: '50vh' }}
          />
        </div>
      </div>

      {/* Form */}
      <div className="w-90 md:w-1/2 p-8 bg-white shadow-lg rounded-lg" style={{ backgroundSize: 'cover', backgroundPosition: 'center', margin: '10px 20px ', padding: '20px 40px' }}>
      <form name="submit-to-google-sheet" action="https://script.google.com/macros/s/AKfycbwBPbEaEIAFG0trfL45xBUr0te5XEo9d422Q3BMgogNo9a6k7VAEcPZXxh1Yn1E6pZvCg/exec" method="POST">
          <Grid container direction="column" spacing={3}>
            <Grid item>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                name="name"
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
                type="mail"
                fullWidth
                value={email}
                name="email"
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
                name="message"
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
    </div>
  );
}

export default ContactUs;
