import React from 'react';

function ContactUs() {
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
      <div style={rightSectionStyle} >
        <div style={formCardStyle}>
          <h2 style={headingStyle}>Connect with us</h2>
          <form style={formStyle}>
            <div style={formGroupStyle}>
              <label htmlFor="name" style={labelStyle}>Name</label>
              <input type="text" className="form-control" id="name" style={inputStyle} />
            </div>
            <div style={formGroupStyle}>
              <label htmlFor="email" style={labelStyle}>Email address</label>
              <input type="email" className="form-control" id="email" style={inputStyle} />
            </div>
            <div style={formGroupStyle}>
              <label htmlFor="message" style={labelStyle}>Message</label>
              <textarea className="form-control" id="message" rows="3" style={textareaStyle}></textarea>
            </div>
            <button type="submit" className="btn btn-primary align-cneter" style={buttonStyle}>Submit</button>
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
  marginRight:'10px'
  ,backgroundColor:'red'
};

const headingStyle = {
    fontSize: '2.5rem',
    marginBottom: '30px',
    marginRight: '20px', // Add margin to the left instead of marginRight
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
  backgroundColor: '#f9f9f9',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
};

const formStyle = {
  maxWidth: '400px',
};

const formGroupStyle = {
  marginBottom: '20px',
};

const labelStyle = {
  fontSize: '1.4rem',
  marginBottom: '5px',
  display: 'block',
  color: 'grey',
  
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
  width: '80%',
  padding: '10px',
  fontSize: '1rem',
  border: '1px solid #ccc',
  borderRadius: '5px',
  margin: '5px',
};

const buttonStyle = {
    padding: '12px 20px',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    marginTop: '10px',
    display: 'block', // Make the button a block-level element
    margin: 'auto', // Center the button horizontally
  };

export default ContactUs;
