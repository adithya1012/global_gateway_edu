import React, { Component } from "react";

import "../styles/univRecommendation.css";

function Univ(props) {
  return (
    <>
      <tr className="UL-item-r">
        <td className="ulist-r" style={{ width: "3rem" }}>
          {props.item.rank}
        </td>
        <td className="ulist-r" style={{ width: "18rem" }}>
          {props.item.universityname}
        </td>
        <td className="ulist-r" style={{ width: "12rem" }}>
          {props.item.city}
        </td>
        <td className="ulist-r" style={{ width: "4rem" }}>
          {props.item.rating}
        </td>
        <td className="ulist-r" style={{ width: "7rem" }}>
          {props.item.tutionfee} ($)
        </td>
      </tr>
    </>
  );
}

export default Univ;
