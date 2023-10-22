import React, { Component } from "react";
import "../styles/homeBody.css";
import TileService from "./tileService";
import Navbar from "./navbar";
class HomeBody extends Component {
  render() {
    return (
      <>
        <body>
          <div className="homebody-body">
            <aside className="homebody-aside">
              <img
                src="../images/home_page_image.jpg"
                width="350"
                height="400"
              />
            </aside>
            <p className="homebody-asside-text">
              <em>
                "Studying abroad is like opening a book to pages you've never
                imagined, with each chapter filled with adventure, knowledge,
                and personal growth."
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
              <a href="/login">
                <button className="get-started">GET STARTED</button>
              </a>
            </p>
          </div>
          <TileService />
        </body>
      </>
    );
  }
}

export default HomeBody;
