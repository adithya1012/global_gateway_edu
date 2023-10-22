import React, { Component, useState } from "react";
import "../styles/universityListBody.css";
import UniversityListItem from "./universityListItem";
import Navbar from "./navbar";

const UniversityListBody = () => {
  const [course, setCourse] = useState([
    {
      id: 1,
      rank: 1,
      name: "MS in Computer Science",
      universityname: "Massachusetts Institute of Technology (MIT)",
      city: "Cambridge, United States",
      rating: "94.6",
      code: "CS",
    },
    {
      id: 2,
      rank: 2,
      name: "MS in Computer Science",
      universityname: "Carnegie Mellon University",
      city: "Pittsburgh, United States",
      rating: "93.5",
      code: "CS",
    },
    {
      id: 3,
      rank: 3,
      name: "MS in Computer Science",
      universityname: "Stanford University",
      city: "Stanford, United States",
      rating: "93",
      code: "CS",
    },
    {
      id: 4,
      rank: 4,
      name: "MS in Computer Science",
      universityname: "University of California, Berkeley (UCB)",
      city: "Berkeley, United States",
      rating: "89.6",
      code: "CS",
    },
    {
      id: 5,
      rank: 5,
      name: "MS in Computer Science",
      universityname: "Harvard University",
      city: "Cambridge, United States",
      rating: "88.2",
      code: "CS",
    },
    {
      id: 6,
      rank: 6,
      name: "MS in Computer Science",
      universityname: "Princeton University",
      city: "Princeton, United States",
      rating: "83.7",
      code: "CS",
    },
    {
      id: 7,
      rank: 1,
      name: "MS in Electrical and Electronic",
      universityname: "Massachusetts Institute of Technology (MIT)",
      city: "Cambridge, United States",
      rating: "97.5",
      code: "EC",
    },
    {
      id: 8,
      rank: 2,
      name: "MS in Electrical and Electronic",
      universityname: "Stanford University",
      city: "Stanford, United States",
      rating: "94.4",
      code: "EC",
    },
    {
      id: 9,
      rank: 3,
      name: "MS in Electrical and Electronic",
      universityname: "University of California, Berkeley (UCB)",
      city: "Berkeley, United States",
      rating: "91.4",
      code: "EC",
    },
    {
      id: 10,
      rank: 4,
      name: "MS in Electrical and Electronic",
      universityname: "Harvard University",
      city: "Cambridge, United States",
      rating: "89.5",
      code: "EC",
    },
    {
      id: 11,
      rank: 5,
      name: "MS in Electrical and Electronic",
      universityname: "California Institute of Technology(Caltech)",
      city: "Pasadena, United States",
      rating: "86.4",
      code: "EC",
    },
  ]);
  const [selectedCourse, setSelectedCourse] = useState(course);
  const handleUnivSearch = (e) => {
    e.preventDefault();
    const selectedOption = document.getElementById("courseName").value;
    const requiredCourses = course.filter((c) =>
      c.code.includes(selectedOption)
    );
    console.log(requiredCourses);
    return setSelectedCourse(requiredCourses);
  };
  return (
    <>
      <Navbar />
      <div className="ul-body">
        <div className="ul-heading">
          <h2 className="universityList-heading">
            Search through the best Universities in the USA.
          </h2>
        </div>
        <div className="ul-span">
          <form className="ul-form">
            <pre>
              Select a degree :{" "}
              <select id="degreeName" name="degreeName">
                <option value="Master">Master's</option>
                <option value="Bachelor">Bachelor's</option>
              </select>
              {"  "}
              Select a Major you want to study :{" "}
              <select id="courseName" name="courseName" defaultValue={"CS"}>
                <option value="CS">Computer Science</option>
                <option value="EC">Electrical and Electronics</option>
                <option value="CE">Chemical Engineering</option>
              </select>{" "}
              <button onClick={handleUnivSearch}>Search</button>
            </pre>
          </form>
        </div>
        <br />
        <table>
          {selectedCourse.map((c) => (
            <UniversityListItem key={c.id} c={c} />
          ))}
        </table>
      </div>
    </>
  );
};

export default UniversityListBody;
