import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Card1 from "./Card1"; // Import the Card component
import mem1 from "./images/startup/mem1.jpg";
import mem2 from "./images/startup/mem2.jpg";
import mem3 from "./images/startup/mem3.jpg";
import mem4 from "./images/startup/mem4.jpg";

export default function Team() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ backgroundColor: "#ffffcc", margin: "10px", padding:'10px' }}>
      <div
        className="text-3xl md:text-5xl text-blue-900 text-center "
        style={{ fontWeight: "600", fontFamily: "cursive", textAlign:"center" }}
      >
        Our Teams
      </div>
      <div style={{ display: "flex", flexDirection: isSmallScreen ? "column" : "row", alignItems: isSmallScreen ? "center" : "" }}>

        <div
          className="image-container"
          style={{ margin: isSmallScreen ? "5px auto" : "5px 10vh", width: isSmallScreen ? "80vw" : "70vw", padding: isSmallScreen ? "5px" : "0" }}
        >
          <div className="image-row">
            <motion.img
              src={mem1}
              alt="Team member 1"
              className="team-image"
              style={{
                height: isSmallScreen?'40vh' :'50vh',
                width: isSmallScreen ? '55vw' : '20vw',
                padding:'4px 0px',
                marginLeft: isSmallScreen ? 'auto' : '',
                marginRight: isSmallScreen ? 'auto' : '',
                marginBottom: isSmallScreen ? '0px' : '5px',
                borderRadius: "5px",
              }}
              initial={{ opacity: 0, y: -1000 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 2 }}
            />
            <motion.img
              src={mem2}
              alt="Team member 2"
              className="team-image"
              style={{
                padding:'4px 0px',
                height: isSmallScreen?'40vh' :'50vh',
                width: isSmallScreen ? '55vw' : '20vw',
                marginLeft: isSmallScreen ? 'auto' : '22vw',
                marginTop: isSmallScreen ? '0px' : '-20vh',
                marginRight: isSmallScreen ? 'auto' : '',
                borderRadius: "5px",
              }}
              initial={{ opacity: 0, y: -1000 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
            />
          </div>
          <div className="image-row">
            <motion.img
              src={mem3}
              alt="Team member 3"
              className="team-image"
              style={{
                padding:'4px 0px',
                height: isSmallScreen?'40vh' :'50vh',
                width: isSmallScreen ? '55vw' : '20vw',
                marginRight: isSmallScreen ? 'auto' : '',
                marginLeft: isSmallScreen ? 'auto' : '',
                marginTop: isSmallScreen ? '0px' : '-20vh',
                borderRadius: "5px",
              }}
              initial={{ opacity: 0, x: -1000 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 3 }}
            />
            <motion.img
              src={mem4}
              alt="Team member 4"
              className="team-image"
              style={{
                padding:'4px 0px',
                height: isSmallScreen?'40vh' :'50vh',
                width: isSmallScreen ? '55vw' : '20vw',
                marginLeft: isSmallScreen ? 'auto' : '22vw',
                marginTop: isSmallScreen ? '0px' : '-20vh',
                marginRight: isSmallScreen ? 'auto' : '',
                borderRadius: "5px",
              }}
              initial={{ opacity: 0, x: -1000 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 4 }}
            />
          </div>
        </div>
        <div style={{ width: "70vw", margin: "30vh 10px", textAlign: isSmallScreen ? "center" : "left" }}>
          <motion.div
            className="text-3xl md:text-4xl text-blue-900 px-4 my-10"
            style={{ fontWeight: "600", fontFamily: "cursive" }}
            initial={{ opacity: 0, rotate: -20 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 5 }}
          >
            Our mission and our goals
          </motion.div>
          <motion.div
            className="text-xl md:text-2xl text-grey-900 px-4 my-10"
            initial={{ opacity: 0, rotate: -20 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 6 }}
          >
            We are on a mission for the revolution to bring the next level of
            education with the advanced level of experimental and practical
            knowledge
          </motion.div>
        </div>
      </div>
    </div>
  );
}
