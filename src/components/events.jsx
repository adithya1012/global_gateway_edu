import React, { Component } from "react";
import "../styles/tileservice.css";
import "../styles/events.css";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const cardData = [
  {
    name: "Master's Fair in Mumbai",
    img: "../images/event-1.jpg",
    description:
      "Interact with universities about their master's programmes based on your profile.",
    evlink: "https://qs.topuniversities.com/events/masters/mumbai",
  },
  {
    name: "Master's Meetings in Bangalore",
    img: "../images/event-2.jpg",
    description:
      "Interact with universities about their master's programmes based on your profile.",
    evlink: "https://qs.topuniversities.com/events/masters/bangalore",
  },
  {
    name: "Open Networking in New Delhi",
    img: "../images/event-3.jpg",
    description:
      "Interact with universities about their master's programmes based on your profile.",
    evlink: "https://qs.topuniversities.com/events/masters/newdelhi",
  },
];

function Card({ name, img, description, evlink }) {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(evlink);
    console.log(evlink);
  };

  return (
    <div style={{ "margin-top": "5vh" }}>
      <div
        className="card"
        style={{ width: "18rem", backgroundImage: "../images/event-3.jpg" }}
        // onClick={() => {
        //   handleCardClick(evlink);
        // }}
        onClick={handleCardClick}>
        <img src={img} style={{ width: "inherit" }}></img>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <a href={evlink} style={{ "align-item": "center" }}>
            Details
          </a>
        </div>
      </div>
    </div>
  );
}

function Events() {
  return (
    <>
      <body>
        <div className="ev-heading">
          <h2 className="event-heading">Upcoming Events</h2>
        </div>
        <br />
        <div className="ev-div">
          <Router>
          <div className="grid-container">
            {cardData.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
          </Router>
        </div>
      </body>
    </>
  );
}

export default Events;
