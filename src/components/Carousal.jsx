import React, { useState, useEffect } from "react";
import img1 from './images/startup/img1.jpg';
import img2 from './images/startup/img2.jpg';
import img3 from './images/startup/img3.jpg';
import img4 from './images/startup/img4.jpeg';
import { CSSTransition } from 'react-transition-group';

export default function Carousel() {
  const imageUrls = [
    {
      image: img1,
      title: 'Enhance Your Practical Skills',
      color:'#b3ffff',
      caption: "AnantVedha is a workspace where young minds can give shape to their ideas through hands on do-it-yourself mode and learn innovation skills. Young children will get a chance to work with tools and equipment to understand the concepts of STEM (Science, Technology, Engineering and Math)."
    },
    {
      image: img4,
      title: 'Dive into world of AI & ML',
      color:'#e6ecff',
      caption: "Embark on an interactive journey through the boundless realms of Artificial Intelligence (AI) and Machine Learning (ML), where you are the architect of innovation. Engage with cutting-edge algorithms, uncover patterns, and unleash creativity to shape tomorrow's world. Join us as we explore, experiment, and redefine possibilities together."
    },
    {
      image: img3,
      color:'#fff3e6',
     title:' Unlock the Power of Future Technologies',
      caption: 'To empower our youth with the 21 century skills of creativity, innovation, critical thinking, design thinking . By empowering youth with future technology, we can unleash their potential to drive innovation, solve complex problems'
    },
    {
      image: img2,
      title:'Explore different carrers',
      color:'#ffe6ff',
      caption: 'Embarking on a journey to explore different careers opens up a world of opportunities and possibilities.From delving into the intricate realm of electronics to pioneering innovations in aerospace engineering, from unraveling the mysteries of Artificial Intelligence (AI) to harnessing the power of Machine Learning (ML), the landscape of career choices is vast and diverse.'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize(); // Initial resize check

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Run only once on component mount

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (activeIndex + 1) % imageUrls.length;
      setActiveIndex(nextIndex);
    }, 5000); // Change slide every 5 seconds

    return () => {
      clearInterval(intervalId);
    };
  }, [activeIndex, imageUrls.length]);

  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % imageUrls.length;
    setActiveIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex =
      activeIndex === 0 ? imageUrls.length - 1 : activeIndex - 1;
    setActiveIndex(prevIndex);
  };

  return (
    <div className="carousel w-full relative">
      {imageUrls.map((imageUrl, index) => (
        <div key={index} className={`carousel-item relative w-full ${index === activeIndex ? 'block' : 'hidden'}`} style={{ height: "95vh" }}>
          <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <div
  className={`w-full md:w-1/2 p-0 ${isSmallScreen ? 'absolute z-10' : 'relative'}`}
  style={{
    height: '80vh',
    backgroundColor: isSmallScreen ? 'transparent' : imageUrl.color,
   
    ...(isSmallScreen
      ? {borderRadius:'5px',width:'80vw',fontWeight:'600',color:'whitesmoke'}
      : {
          borderTopLeftRadius: '20%',
          borderBottomLeftRadius: '20%',
          marginLeft: '5%',
          paddingTop: '2rem',
          paddingBottom: '2rem',
        })
  }}
>
            <div className="text-4xl text-secondary p-10 m-auto" style={{ padding: '10px auto', textAlign: 'center' }}>{imageUrl.title}</div>

              <CSSTransition
                in={index === activeIndex}
                timeout={500}
                classNames="fade"
                unmountOnExit
              >
                <p className="text-xl text-white-50 p-10 rounded-md text-center word-spacing ">{imageUrl.caption}</p>
              </CSSTransition>
            </div>
            <div className="w-full md:w-1/2 p-0 relative z-0">
              <div className="aspect-w-16 aspect-h-9">
              <img
  src={imageUrl.image}
  alt={`Slide ${index + 1}`}
  className="object-cover object-center w-full"
  style={{
    height: '80vh',
    marginRight: '20px',
    width: isSmallScreen ? '90vw' : '40vw',
    ...(isSmallScreen
      ? {
          borderRadius: '5px',
          margin: '2px auto',
          backgroundColor: 'rgba(255, 0, 0, 0.8)',
          zIndex: '-2',
          backdropFilter: 'blur(5px)',
          WebkitBackdropFilter: 'blur(5px)',
          // backgroundColor: 'rgba(255, 0, 0, 0.8)',
          backdropOpacity: '95',
          backdropInvert: 'bg-white/30',
        }
      : {
          borderTopRightRadius: '20%',
          borderBottomRightRadius: '20%',
          // marginLeft: '5%'
        })
  }}
  
/>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
            <button onClick={handlePrev} className="btn btn-circle bg-white border border-gray-300 text-gray-600 focus:outline-none">❮</button>
            <button onClick={handleNext} className="btn btn-circle bg-white border border-gray-300 text-gray-600 focus:outline-none">❯</button>
          </div>
        </div>
      ))}
    </div>
  );
}
