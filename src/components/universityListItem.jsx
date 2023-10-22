import React, { Component } from "react";

function UniversityListItem(props) {
  return (
    <>
      <tr className="UL-item">
        <td className="ulist">{props.c.rank}</td>
        <td className="ulist">{props.c.name}</td>
        <td className="ulist" style={{ width: "20rem" }}>
          {props.c.universityname}
        </td>
        <td className="ulist" style={{ width: "14rem" }}>
          {props.c.city}
        </td>
        <td className="ulist" style={{ width: "4rem" }}>
          {props.c.rating}
        </td>
      </tr>
    </>
  );
}

export default UniversityListItem;
