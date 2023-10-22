import React, { Component } from "react";
import Navbar from "./navbar";
import "../styles/homeBody.css";
class HomeBody extends Component {
  render() {
    return (
      <>
        <Navbar />
        <body>
          <aside>
            <img src="../images/home_page_image.jpg" width="350" height="400" />
          </aside>
          <p className="asside-text">
            <em>
              "Studying abroad is like opening a book to pages you've never
              imagined, with each chapter filled with adventure, knowledge, and
              personal growth."
            </em>
            <br />
            <br />
            <br />
            <p className="getStartedText">
              Empowering Minds, Bridging Worlds: <br />
              Your Global Education Journey Begins Here.
            </p>
            <br />
            <br />
            <button className="get-started">GET STARTED</button>
          </p>
          <br />
        </body>
      </>
    );
  }
}

export default HomeBody;
