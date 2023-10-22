import React, { Component } from "react";
import "../styles/tileservice.css";
import "../styles/events.css";
import { useNavigate } from "react-router-dom";

const cardData = [
  {
    name: "Event 1",
    img: "../images/event-1.jpg",
    description: " Some Description",
    evlink: "href://somewhere",
  },
  {
    name: "Event 2",
    img: "../images/event-2.jpg",
    description: " Some Description",
    evlink: "href://somewhere",
  },
  {
    name: "Event 3",
    img: "../images/event-3.jpg",
    description: " Some Description",
    evlink: "href://somewhere",
  },
];

function Card({ name, img, description, evlink }) {
  const navigate = useNavigate();
  const handleCardClick = (path) => {
    navigate(path);
    console.log(clink);
  };

  return (
    <div
      className="card"
      style={{ width: "18rem" }}
      onClick={() => {
        handleCardClick(clink);
      }}
    >
      <div className="card-body" style={{ backgroundImage: { img } }}>
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
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
          <div className="grid-container">
            {cardData.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
        </div>
      </body>
    </>
  );
}

export default Events;
