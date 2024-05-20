import React from "react";
import hack from "./images/startup/hack.jpg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import tex2 from "./images/startup/tex2.jpg";
import tex4 from "./images/startup/tex4.jpg";
import tex5 from "./images/startup/tex5.jpg";
import cert from "./images/startup/cert.jpg";

export default function Event() {
  const cardsContent = [
    {
      title: "Hackathon",
      ques: "Why Hackathon?",
      listItems: [
        "Students will get the opportunity to work as a team under timeline pressure.",
        "They will get fresh ideas to solve similar problems from their friends.",
      ],
      image: hack,
    },
    {
      title: "Events & Workshops",
      ques: "Why Events and Mentorship sessions?",
      listItems: [
        "Events and workshops encourage discussion among students.",
        "Mentorship encourages self-reflection and helps individuals make decisions related to career and personal life.",
      ],
      image: tex2,
    },
    {
      title: "Certification",
      listItems: [
        "Earning a certification indicates that you have met specific standards and possess a certain level of knowledge and skills.",
        "Pursuing certifications often involves engaging with a community of professionals in the same field.",
      ],
      image: cert,
    },
    {
      title: "Industry Visits",
      listItems: [
        "Industry visits provide students with firsthand exposure to how theoretical concepts taught in the classroom are applied in real-world settings.",
        "These visits enhance their understanding and appreciation of academic subjects.",
      ],
      image: tex5,
    },
  ];

  const renderCardContent = (index) => (
    <div className="card-body animate-fade-in">
      <div className="card-title text-4xl">{cardsContent[index].title}</div>
      <ul className="list-decimal text-lg">
        {cardsContent[index].listItems.map((item, i) => (
          <li key={i} style={{ padding: "0.5rem 0rem", listStyle: "none" }}>
            <div style={{ display: "flex", alignItems: "start" }}>
              <ArrowForwardIosIcon style={{ margin: "0.5rem 0.5rem",fontSize:'1rem'}}/> {item}
            </div>
          </li>
        ))}
      </ul>
      <div className="card-actions justify-end"></div>
    </div>
  );

  const renderCard = (index) => {
    const isOdd = index % 2 !== 0;
    return (
      <div
        key={index}
        className={`card card-side bg-base-100 shadow-xl m-10 flex flex-col md:flex-row animate-slide-in ${isOdd ? 'md:flex-row-reverse' : ''}`}
      >
        <figure
          className="md:w-2/5"
          style={{ flexBasis: "40%", margin: "10px 10px", borderRadius: "10px" }}
        >
          <img
            src={cardsContent[index].image}
            alt={cardsContent[index].title}
            style={{ height: "50vh", width: "100%" }}
          />
        </figure>
        <div className="card-content md:w-3/5" style={{ flexBasis: "60%" }}>
          {renderCardContent(index)}
        </div>
      </div>
    );
  };

  return (
    <div>
      <div
        className="text-3xl md:text-5xl text-blue-900 text-center ml-8 px-4 my-2"
        style={{ fontWeight: "600", fontFamily: "cursive" }}
      >
        Future Goals
      </div>
      {cardsContent.map((_, index) => renderCard(index))}
    </div>
  );
}

// Tailwind CSS custom animation classes
const styles = `
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes slideIn {
  from { transform: translateY(50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
.animate-fade-in {
  animation: fadeIn 1s ease-in-out;
}
.animate-slide-in {
  animation: slideIn 1s ease-in-out;
}
`;

// Inject styles into the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
