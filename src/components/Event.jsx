import React from "react";
import hack from "./images/startup/hack.jpg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import tex2 from "./images/startup/tex2.jpg";
import tex4 from "./images/startup/tex4.jpg";
export default function Event() {
  const isOdd = (num) => num % 2 !== 0;

  const cardsContent = [
    {
      title: "Hackathon",
      listItems: [
        "Students experience a near real-life feel of a corporate workplace",
        "You perform under the timeline with a team, and apply skills",
        "Hackathons provide ample opportunities to learn new skills and tips from mentors or industry professionals",
      ],
      image: hack,
    },
    {
      title: "Events & Workshops",
      listItems: [
        "You could discover inspiration in other peoples ideas",
        "Events and workshops encourage discussion among students.",
        "Participants can share their ideas and views on tackling the problem, which can provide a new perspective on how to address it.",
        "Listening to any well-known individual speak at a seminar or workshop might assist a student in learning about their work or how things are done.",
      ],
      image: tex2,
    },
    {
      title: "Certification",
      listItems: [
        'Earning a certification indicates that you have met specific standards and possess a certain level of knowledge and skills.',
        'In competitive job markets, certifications can give you an edge over other candidates who do not possess them.',
        'Pursuing certifications often involves engaging with a community of professionals in the same field.'
      ],
      image: hack,
    },

    {
      title: "Mentorship Sessions",
      listItems: [
    ' Mentoring provides students with valuable guidance from experienced individuals who can offer insights into academic, personal, and career-related matters.',
'Entoring facilitates the development of essential skills such as communication, critical thinking, and leadership through personalized guidance and feedback.',
'Mentoring encourages self-reflection and personal growth, empowering students to discover their strengths, overcome limitations, and reach their full potential.'
      ],
      image: tex4,
    },
    {
        title: "Industry Visits",
        listItems: [
            'Industry visits provide students with firsthand exposure to how theoretical concepts taught in the classroom are applied in real-world settings, enhancing their understanding and appreciation of academic subjects.',
        ' Industry visits offer students the opportunity to explore various industries, professions, and career paths, helping them make informed decisions about their future academic and career goals.',
            'Industry visits expose students to cutting-edge technologies, processes, and innovations, stimulating their curiosity and creativity and encouraging them to think innovatively.'],
        image: hack,
      },
    // Define content for other cards similarly
  ];

  const renderCardContent = (index) => (
    <div className="card-body">
      <div className="card-title text-4xl">{cardsContent[index].title}</div>
      <ul className="list-decimal pl-6 text-xl">
        {" "}
        {/* Apply padding-left for spacing */}
        {cardsContent[index].listItems.map((item, i) => (
          <li key={i} style={{ padding: "1rem 0rem", listStyle: "none" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <ArrowForwardIosIcon style={{ height: "20px" }} /> {item}
            </div>
            {/* Left arrow symbol */}
          </li>
        ))}
      </ul>
      <div className="card-actions justify-end">
        {/* <button className="btn btn-primary">Watch</button> */}
      </div>
    </div>
  );

  const renderCard = (index) => {
    return (
      <div className="card card-side bg-base-100 shadow-xl m-10 flex flex-col md:flex-row">
        <figure className="md:w-2/5 md:order-1" style={{ flexBasis: "40%" }}>
          <img
            src={cardsContent[index].image}
            alt="Event"
            style={{ height: "50vh", width: "100%" }}
          />
        </figure>
        <div
          className="card-content md:w-3/5 md:order-2"
          style={{ flexBasis: "60%" }}
        >
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
