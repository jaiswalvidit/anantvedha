import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import mem1 from "./images/startup/mem1.jpg";
import mem2 from "./images/startup/mem2.jpg";
import mem3 from "./images/startup/mem3.jpg";
import mem4 from "./images/startup/mem4.jpg";
import mem5 from "./images/startup/mem5.jpg";

export default function Team() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ backgroundColor: "#ffffcc", padding: "10px" }}>
      <div
        className="text-3xl md:text-5xl text-blue-900 text-center"
        style={{ fontWeight: "600", fontFamily: "cursive" }}
      >
        Our Teams
      </div>
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
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isSmallScreen ? "1fr" : "1fr 1fr",
          gridTemplateRows: isSmallScreen ? "auto" : "auto auto auto",
          gap: "10px",
          justifyItems: "center",
          alignItems: "center"
        }}
      >
        <motion.img
          src={mem1}
          alt="Team member 1"
          className="team-image"
          style={{
            height: isSmallScreen ? "40vh" : "50vh",
            width: isSmallScreen ? "60vw" : "20vw",
            padding: "4px",
            borderRadius: "5px",
            gridColumn: isSmallScreen ? "1" : "1",
            gridRow: isSmallScreen ? "auto" : "1",
          }}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 2 }}
        />
        <motion.img
          src={mem2}
          alt="Team member 2"
          className="team-image"
          style={{
            height: isSmallScreen ? "40vh" : "50vh",
            width: isSmallScreen ? "60vw" : "20vw",
            padding: "4px",
            borderRadius: "5px",
            gridColumn: isSmallScreen ? "1" : "2",
            gridRow: isSmallScreen ? "auto" : "1",
          }}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
        />
        <motion.img
          src={mem3}
          alt="Team member 3"
          className="team-image"
          style={{
            height: isSmallScreen ? "40vh" : "50vh",
            width: isSmallScreen ? "60vw" : "20vw",
            padding: "4px",
            borderRadius: "5px",
            gridColumn: "1 / -1",
            gridRow: isSmallScreen ? "auto" : "2",
          }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 3 }}
        />
        <motion.img
          src={mem4}
          alt="Team member 4"
          className="team-image"
          style={{
            height: isSmallScreen ? "40vh" : "50vh",
            width: isSmallScreen ? "60vw" : "20vw",
            padding: "4px",
            borderRadius: "5px",
            gridColumn: isSmallScreen ? "1" : "1",
            gridRow: isSmallScreen ? "auto" : "3",
          }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 4 }}
        />
        <motion.img
          src={mem5}
          alt="Team member 5"
          className="team-image"
          style={{
            height: isSmallScreen ? "40vh" : "50vh",
            width: isSmallScreen ? "60vw" : "20vw",
            padding: "4px",
            borderRadius: "5px",
            gridColumn: isSmallScreen ? "1" : "2",
            gridRow: isSmallScreen ? "auto" : "3",
          }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 3 }}
        />
      </div>
      <div
        style={{
          width: "70vw",
          margin: isSmallScreen ? "5vh 10px" : "10vh 10px",
          textAlign: isSmallScreen ? "center" : "left"
        }}
      >
        
      </div>
    </div>
  );
}
