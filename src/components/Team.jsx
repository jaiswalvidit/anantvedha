import React, { useState, useEffect } from 'react';
import Card1 from './Card1'; // Import the Card component
import mem1 from './images/startup/mem1.jpg';
import mem2 from './images/startup/mem2.jpg';
import mem3 from './images/startup/mem3.jpg';
import mem4 from './images/startup/mem4.jpg';

export default function Team() {
  const [cardCount, setCardCount] = useState(1);

  // Define different contents for each card
  const cardContents = [
    {
      imageSrc: mem1,
      title: "Sumit Sharma",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet ultrices nisl, nec ultrices eros."
    },
    {
      imageSrc: mem4,
      title: "Vidit Jaiswal",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet ultrices nisl, nec ultrices eros."
    },
    {
      imageSrc: mem2,
      title: "Gyanesh Dwivedi",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet ultrices nisl, nec ultrices eros."
    },
    {
      imageSrc: mem3,
      title: "Prakash Bhagat",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet ultrices nisl, nec ultrices eros."
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardCount(4); // Large screen: display 4 cards per row
      } else if (window.innerWidth >= 768) {
        setCardCount(2); // Medium screen: display 2 cards per row
      } else {
        setCardCount(cardContents.length); // Small screen: display all cards on different rows
      }
    };

    handleResize(); // Initial count based on window width

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [cardContents.length]); // Re-run effect when cardContents length changes

  return (
    <>
      <div className="text-3xl md:text-5xl text-blue-900 text-center mt-8">Our Teams</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center items-center mt-4" style={{ margin: '2px auto' }}>
        {cardContents.slice(0, cardCount).map((content, index) => (
          <div key={index}>
            <Card1
              imageSrc={content.imageSrc}
              title={content.title}
              description={content.description}
              // Add animation classes based on index
              className={`transition-all duration-500 delay-${index * 100} transform hover:scale-110`}
            />
          </div>
        ))}
      </div>
    </>
  );
}
