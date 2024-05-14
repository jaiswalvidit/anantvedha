import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

function Card() {
  const timelineRef = useRef(null);

  useEffect(() => {
    const timelineElements = timelineRef.current.querySelectorAll('.timeline__event');

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      
      timelineElements.forEach((element, index) => {
        const elementOffset = element.offsetTop;
        const isVisible = scrollTop + windowHeight > elementOffset;
        
        if (isVisible) {
          element.classList.add('animate-fadeInLeft', `delay-${index + 1}s`);
        } else {
          element.classList.remove('animate-fadeInLeft', `delay-${index + 1}s`);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className=" py-12 px-12 mx-4" style={{backgroundColor:'#cce6ff'}}>
      <div className="text-3xl md:text-5xl text-blue-900 text-center ml-8 px-4 my-2" style={{fontWeight:'600',fontFamily:'cursive'}}>What we are offering</div>
      <div className="timeline flex flex-wrap justify-center" ref={timelineRef}>

        {/* First Event */}
        <motion.div className="timeline__event timeline__event--type4 bg-white shadow-lg mx-2 rounded-lg overflow-hidden my-4 w-full sm:w-1/2 md:w-1/3 px-4"style={{backgroundColor:'#b3b3ff',color:'#333300',fontWeight:'500'}}initial={{ opacity: 0, x: -1000 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: "easeInOut" }}>
          <div className="card transition duration-300 ease-in-out p-6" style={{width:'40vw'}}>
            <div className="text-xl md:text-2xl">Critical Thinking</div>
          </div>
        </motion.div>

        {/* Second Event */}
        <motion.div className="timeline__event timeline__event--type3 bg-white shadow-lg mx-2 rounded-lg overflow-hidden my-4 w-full sm:w-1/2 md:w-1/3 px-4" style={{backgroundColor:'#b3b3ff',color:'#000000',fontWeight:'500'}} initial={{ opacity: 0, x: 1000 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, ease: "easeInOut", delay: 1 }}>
          <div className="card transition duration-300 ease-in-out p-6">
            <div className="text-xl md:text-2xl">Creativity</div>
          </div>
        </motion.div>

        {/* Third Event */}
        <motion.div className="timeline__event timeline__event--type2 bg-white shadow-lg mx-2 rounded-lg overflow-hidden my-4 w-full sm:w-1/2 md:w-1/3 px-4" style={{backgroundColor:'#b3b3ff',color:'#000000',fontWeight:'500'}}  initial={{ opacity: 0, x: -1000 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, ease: "easeInOut", delay: 2 }}>
          <div className="card transition duration-300 ease-in-out p-6">
            <div className="text-xl md:text-2xl">Innovation</div>
          </div>
        </motion.div>

        {/* Fourth Event */}
        <motion.div className="timeline__event timeline__event--type1 bg-white mx-2 shadow-lg rounded-lg overflow-hidden my-4 w-full sm:w-1/2 md:w-1/3 px-4"  style={{backgroundColor:'#b3b3ff',color:'#000000',fontWeight:'500'}} initial={{ opacity: 0, x: 1000 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, ease: "easeInOut", delay: 3 }}>
          <div className="card transition duration-300 ease-in-out p-3 py-6">
            <div className="text-xl md:text-2xl">Real World Problem Solving</div>
          </div>
        </motion.div>

        {/* Fifth Event */}
        <motion.div className="timeline__event timeline__event--type1 bg-white mx-2 shadow-lg rounded-lg overflow-hidden my-4 w-full sm:w-1/2 md:w-1/3 px-4" style={{backgroundColor:'#b3b3ff',color:'#000000',fontWeight:'500'}}  initial={{ opacity: 0, x: -1000 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, ease: "easeInOut", delay: 4 }}>
          <div className="card transition duration-300 ease-in-out p-6">
            <div className="text-xl md:text-2xl">Experience-based Learning</div>
          </div>
        </motion.div>

        {/* Sixth Event */}
        <motion.div className="timeline__event timeline__event--type1 bg-white mx-2 shadow-lg rounded-lg overflow-hidden my-4 w-full sm:w-1/2 md:w-1/3 px-4" initial={{ opacity: 0, x: 1000 }} style={{backgroundColor:'#b3b3ff',color:'#333300',fontWeight:'500'}} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, ease: "easeInOut", delay: 5 }}>
          <div className="card transition duration-300 ease-in-out p-6">
            <div className="text-xl md:text-2xl">Creating Future Creators</div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

export default Card;

