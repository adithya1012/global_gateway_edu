import React, { Component, useState } from "react";
import Navbar from "./navbar";
import "../styles/events.css";
import EventCard from "./eventCard";

const Events = () => {
  const [event, setEvent] = useState([
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
  ]);
  return (
    <>
      <Navbar />
      <body>
        <div className="ev-heading">
          <h2 className="event-heading">Upcoming Events</h2>
        </div>
        <br />
        <div className="ev-div">
          {/* {event.map((e) => {
            {
              console.log(e.name);
            } */}
          <EventCard />;
        </div>
      </body>
    </>
  );
};

export default Events;
