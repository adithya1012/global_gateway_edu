import React, { Component } from "react";
class UniversityListItem extends Component {
  render() {
    return (
      <div className="UL-item">
        <tr>
          <td className="ulist">1.</td>
          <td className="ulist">Purdue University</td>
          <td className="ulist">Computer Science</td>
          <td className="ulist">Fort Wayne, Indiana</td>
          <td className="ulist">3.5</td>
        </tr>
      </div>
    );
  }
}

export default UniversityListItem;
