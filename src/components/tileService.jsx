import React, { Component } from "react";
import "../styles/tileservice.css";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const cardData = [
  {
    title: "Exam Preparation",
    text: "Confidently prepare for your GRE and IELTS exams with our comprehensive resources to excel academically and in your career",
    clink: "/greService",
  },
  {
    title: "Letter of Recommendation",
    text: "Effortlessly craft personalized and impactful Letters of Recommendation with our user-friendly platform",
    clink: "/lorService",
  },
  {
    title: "University Recommendation",
    text: "Discover a brighter educational future with tailored university recommendations based on your interests, goals, and preferences",
    clink: "/greService",
  },
  {
    title: "Visa Preparation",
    text: "Easily navigate the visa application process with our comprehensive resources and expert guidance",
    clink: "/greService",
  },
  {
    title: "Statement of Purpose",
    text: "Achieve your academic and career goals with a compelling Statement of Purpose and expert guidance",
    clink: "/SOP",
  },
  {
    title: "Financial Planning",
    text: "Empower your financial future with our resources and expert advice, making confident financial decisions for your education and beyond",
    clink: "/Finance",
  },
  {
    title: "Flight Booking",
    text: "Book affordable flights, compare fares, and secure your journey hassle-free with our trusted travel companion platform.",
    clink: "/greService",
  },
  {
    title: "University Deadline",
    text: "Never miss important university application deadlines with our platform informative alerts",
    clink: "/greService",
  },
  {
    title: "Resume Preparation",
    text: "Create personalized and impactful resumes with our user-friendly platform. Get comprehensive support for your resume needs.",
    clink: "/Resume",
  },
];

function Card({ title, text, clink }) {
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
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}

class TileService extends Component {
  render() {
    return (

  <div className="grid-container">
    {cardData.map((card, index) => (
      <Card key={index} {...card} />
    ))}
  </div>
  
    );
  }
}



export default TileService;
