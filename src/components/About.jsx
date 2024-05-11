import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './About.css';

const AboutUs = () => {
  const sections = [
    {
      title: "Who we are",
      content: "Anantvedha is a pioneering startup dedicated to fostering a culture of innovation and entrepreneurship among students. Founded by a team of passionate educators, technologists, and innovators, our goal is to empower the next generation with the skills and mindset they need to thrive in a rapidly changing world."
    },
    {
      title: "Our Vision",
      content: "Our vision is to create a world where everyone has equal access to quality education regardless of geographical barriers or socioeconomic status. We strive to foster a global community of lifelong learners who are passionate about acquiring knowledge and skills to thrive in the ever-evolving world."
    },
    {
      title: "What We Offer",
      content: "We specialize in setting up innovation labs in both private and government schools, providing students with access to state-of-the-art tools and technologies for STEM education. From robotics kits to 3D printers, our labs are equipped to inspire creativity, curiosity, and critical thinking among students of all ages."
    },
    {
      title: "Why Choose Us?",
      content: "Innovative Approach: At Anantvedha, innovation is at the core of everything we do. We offer a unique blend of hands-on learning experiences, cutting-edge technology, and curriculum support to transform traditional classrooms into hubs of creativity and exploration.\n\nTailored Solutions: We understand that every school is unique, which is why we work closely with educators to tailor our programs to meet the specific needs and goals of each institution. Whether you're a private school or a government school in a rural area, we have solutions designed just for you.\n\nImpactful Partnerships: By partnering with Anantvedha, schools gain access to a network of educators, mentors, and industry experts who are committed to supporting student innovation. Together, we can empower students to unleash their potential and make a positive impact on their communities."
    },
    {
      title: "Get Started Today!",
      content: "Join the thousands of learners who have already embarked on their learning journey with Anantvedha Edutech. Explore our course catalog, enroll in your desired courses, and take the first step towards achieving your educational goals today!"
    }
  ];

  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (index) => {
    setExpandedSections(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  const sectionCards = sections.map((section, index) => (
    <div className="col-md-6" key={index}>
      <div className="card mb-4">
        <div className="card-body" onClick={() => toggleSection(index)}>
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title">{section.title}</h5>
            <IconButton style={{ fontSize: '1.5rem', color: '#007bff' }}>
              {expandedSections[index] ? <ExpandMoreIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <CSSTransition
            in={expandedSections[index]}
            timeout={300}
            classNames="content"
            unmountOnExit
          >
            <p className="card-text text-secondary">{section.content}</p>
          </CSSTransition>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="m-4">
      <h2 className="mt-4 mb-6">About Us</h2>
      <div className="row">
        {sectionCards}
      </div>
    </div>
  );
};

export default AboutUs;
