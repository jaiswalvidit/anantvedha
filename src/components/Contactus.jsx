import React, { useState } from 'react';

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
    <div style={containerStyle}>
      <div style={leftSectionStyle}>
        <h2 style={headingStyle}>Contact Information</h2>
        <div style={cardStyle}>
          <div style={cardContentStyle}>
            <h3 style={subHeadingStyle}>Our Office</h3>
            <p>Anantvedha Edutech</p>
            <p>123 Education Street, City</p>
          </div>
        </div>
        <div style={cardStyle}>
          <div style={cardContentStyle}>
            <h3 style={subHeadingStyle}>Business Hours</h3>
            <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
          </div>
        </div>
      </div>
      <div style={rightSectionStyle}>
        <div style={formCardStyle}>
          <h2 style={headingStyle}>Connect with us</h2>
          <form style={formStyle} onSubmit={handleSubmit}>
            <div style={formGroupStyle} className='p-2'>
              <label htmlFor="name" style={labelStyle}>Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={inputStyle}
              />
              {errors.name && <span style={errorStyle}>{errors.name}</span>}
            </div>
            <div style={formGroupStyle} className='p-2' >
              <label htmlFor="email" style={labelStyle}>Email address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle}
              />
              {errors.email && <span style={errorStyle}>{errors.email}</span>}
            </div>
            <div style={formGroupStyle} className='p-2'>
              <label htmlFor="message" style={labelStyle}>Message</label>
              <textarea
                id="message"
                rows="3"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={textareaStyle}
              ></textarea>
              {errors.message && <span style={errorStyle}>{errors.message}</span>}
            </div>
            <button type="submit" className="btn btn-primary" style={buttonStyle}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

// Styles
const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  margin: '50px auto',
  fontFamily: 'Arial, sans-serif',
};

const leftSectionStyle = {
  flex: '1',
  marginRight: '50px',
};

const rightSectionStyle = {
  flex: '1',
  marginRight: '10px',
};

const headingStyle = {
  fontSize: '2.5rem',
  marginBottom: '30px',
  color: '#333',
};

const subHeadingStyle = {
  fontSize: '1.8rem',
  marginBottom: '15px',
  color: '#333',
};

const cardStyle = {
  backgroundColor: '#f9f9f9',
  padding: '20px',
  marginBottom: '20px',
  borderRadius: '10px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
};

const cardContentStyle = {
  marginBottom: '20px',
};

const formCardStyle = {
  backgroundColor: '#e0f5ff', // Changed background color to light blue
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
};

const formStyle = {
  maxWidth: '400px',
  margin:'10px auto',
  marginBottom:'20px'

};

const formGroupStyle = {
  margin:'auto'
  
};

const labelStyle = {
  fontSize: '1.4rem',
  marginBottom: '5px',
  display: 'block',
  color: '#333', // Changed font color to dark grey
};

const inputStyle = {
  width: '100%',
  padding: '12px',
  fontSize: '1rem',
  border: '1px solid #ccc',
  borderRadius: '5px',
  marginTop: '5px',
};

const textareaStyle = {
  width: '100%',
  padding: '10px',
  fontSize: '1rem',
  border: '1px solid #ccc',
  borderRadius: '5px',
  margin: '5px 0',
};

const buttonStyle = {
  width: '100%',
  padding: '12px 20px',
  fontSize: '1rem',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '10px',
  cursor: 'pointer',
};

const errorStyle = {
  color: 'red',
  fontSize: '0.9rem',
  marginTop: '5px',
};

export default ContactUs;
