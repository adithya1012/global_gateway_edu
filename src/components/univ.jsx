import React, { Component } from "react";

import "../styles/univRecommendation.css";

function Univ(props) {
  return (
    <>
      <tr className="UL-item-r" style={{ padding: 0 }}>
        <td className="ulist-r">{props.item.rank}</td>
        <td className="ulist-r">{props.item.name}</td>
        <td className="ulist-r" style={{ width: "20rem" }}>
          {props.item.universityname}
        </td>
        <td className="ulist-r" style={{ width: "14rem" }}>
          {props.item.city}
        </td>
        <td className="ulist-r" style={{ width: "4rem" }}>
          {props.item.rating}
        </td>
        <td className="ulist-r">{props.item.tutionfee}</td>
      </tr>
    </>
  );
}

export default Univ;
