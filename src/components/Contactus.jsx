import React, { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import contact from './images/startup/contact.jpg';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false); // State for form submission success

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
      setIsSubmitted(true); // Set form submission success to true
      // Optionally, you can reset the form fields here
     
  
      // Set a timeout to reset the isSubmitted state after 3 seconds (adjust as needed)
      setTimeout(() => {
        setIsSubmitted(false);
        setName('');
        setEmail('');
        setMessage('');
      }, 2000);
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
        <div className="text-3xl md:text-5xl text-blue-900 mb-8">
          Connect with us
        </div>
       
          <form name="submit-to-google-sheet" action="https://script.google.com/macros/s/AKfycbwBPbEaEIAFG0trfL45xBUr0te5XEo9d422Q3BMgogNo9a6k7VAEcPZXxh1Yn1E6pZvCg/exec" method="POST" onSubmit={handleSubmit}>
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
                  className="transition-all duration-300 ease-in-out transform hover:scale-105"
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
                  className="transition-all duration-300 ease-in-out transform hover:scale-105"
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
                  className="transition-all duration-300 ease-in-out transform hover:scale-105"
                />
              </Grid>
              <Grid item>
              <div className="flex justify-center">
  <Button
    type="submit"
    variant="contained"
    color="primary"
    fullWidth
    className={`bg-blue-500 hover:bg-blue-300 transition duration-300 ease-in-out transform hover:scale-105 ${isSubmitted ? 'bg-green-500 ease-in duration-500' : ''}`}
    style={{ width: '40vw' }}
  >
    {isSubmitted ? 'Submitted successfully' : 'Submit'}
  </Button>
</div>

              </Grid>
            </Grid>
          </form>
        
      </div>
    </div>
  );
}

export default ContactUs;
