import React, { Component } from "react";
import "../styles/universityListBody.css";
import UniversityListItem from "./universityListItem";
import course from "../scripts/course.json";
class UniversityListBody extends Component {
  state = {
    courses: course,
  };
  render() {
    return (
      <body className="ul-body">
        <div className="ul-heading">
          <h2 className="universityList-heading">
            Search through the best Universities in the USA.
          </h2>
        </div>
        <div className="ul-span">
          <form className="ul-form">
            <pre>
              {this.state.courses.map((course) => console.log(course.name))}
              Select a degree :{" "}
              <select id="degreeName" name="degreeName">
                <option value="Master">Master's</option>
                <option value="Bachelor">Bachelor's</option>
              </select>
              {"  "}
              Select a Major you want to study :{" "}
              <select id="courseName" name="courseName">
                <option value="CS">Computer Science</option>
                <option value="EE">Electrical Engineering</option>
                <option value="EC" selected>
                  Electronics And Communication
                </option>
                <option value="CE">Chemical Engineering</option>
              </select>{" "}
            </pre>
          </form>
        </div>
        <table>
          <UniversityListItem />
        </table>
        <script type="module" src="/scripts/UniversityList.js"></script>
      </body>
    );
  }
}

export default UniversityListBody;
