import React from "react";
// import './Text.css';  // Import the CSS file for custom animations

export default function Text() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="p-6 bg-white shadow-md rounded-lg flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front ">
            <h2 className="text-2xl font-bold mb-4 text-center">
              What is STEAM Education?
            </h2>
            <div className="motion-safe:animate-fadeIn">
              <p className="text-base md:text-lg leading-relaxed mb-4">
                STEAM is an acronym that stands for Science, Technology, Engineering, Arts, and Mathematics. This educational approach teaches children to design and create their own imaginative projects in the real world using all five elements of STEAM. This model helps students build the creative problem-solving and critical thinking skills necessary for the 21st-century workforce. As Leonardo Da Vinci famously said, "To develop a complete mind: study the science of art; study the art of science. Learn how to see. Realize that everything connects to everything else."
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6 bg-white shadow-md rounded-lg mt-8 flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h2 className="text-2xl font-bold mb-4 text-center mx-4">
              Problem We Are Trying to Solve
            </h2>
            <div className="motion-safe:animate-fadeIn">
              <p className="text-base md:text-lg leading-relaxed mb-4">
                Every year, India produces about one million graduates according to the Ministry of Education. However, about 5 million graduates remain unemployed at any given time due to the lack of practical skills demanded by the industry. As the number of college graduates continues to rise, the need for skilled individuals in the Indian workforce becomes increasingly critical to avoid stagnation.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6 bg-white shadow-md rounded-lg mt-8 flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Solution We Are Providing
            </h2>
            <div className="motion-safe:animate-fadeIn">
              <p className="text-base md:text-lg leading-relaxed mb-4">
                AnantVedha offers low-cost makerspaces in schools, supported by a curriculum aligned with their academic syllabus. Our programs provide hands-on experience, enabling students to understand concepts deeply rather than through rote learning. Our goal is to nurture the next generation of developers, creators, and entrepreneurs, propelling India toward becoming a developed nation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
