import React,{Component} from "react";
import '../styles/tileservice.css';

const cardData = [
    {
      title: 'Exam Preparation',
      text: 'Confidently prepare for your GRE and IELTS exams with our comprehensive resources to excel academically and in your career',
    },
    {
      title: 'Letter of Recommendation',
      text: 'Effortlessly craft personalized and impactful Letters of Recommendation with our user-friendly platform',
    },
    {
      title: 'University Recommendation',
      text: 'Discover a brighter educational future with tailored university recommendations based on your interests, goals, and preferences',
    },
    {
      title: 'Visa Preparation',
      text: 'Easily navigate the visa application process with our comprehensive resources and expert guidance',
    },
    {
      title: 'Statement of Purpose',
      text: 'Achieve your academic and career goals with a compelling Statement of Purpose and expert guidance',
    },
    {
      title: 'Financial Planning',
      text: 'Empower your financial future with our resources and expert advice, making confident financial decisions for your education and beyond',
    },
    {
      title: 'Flight Booking',
      text: 'Book affordable flights, compare fares, and secure your journey hassle-free with our trusted travel companion platform.',
    },
    {
      title: 'University Deadline',
      text: 'Never miss important university application deadlines with our platform informative alerts',
    },
    {
      title: 'Resume Preparation',
      text: 'Create personalized and impactful resumes with our user-friendly platform. Get comprehensive support for your resume needs.',
    },
  ];
  
  
  function Card({ title, text}) {
    return (
      <div className="card" style={{ width: '18rem' }}>
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