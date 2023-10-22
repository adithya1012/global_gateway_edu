import React, { Component } from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <div class="nav-body">
        <header id="nav-header">
          <div class="searchBar">
            <div class="nav-column-one">
              <img src="../images/logo1.png" width="105px" height="50px" />
            </div>
            <div class="nav-column-two">
              <form onsubmit="event.preventDefault();" role="search" class="nav-form">
                <label for="search" class="nav-label">Search for stuff</label>
                <input
                  class="nav-input"
                  id="search"
                  type="search"
                  placeholder="Search..."
                  autoFocus
                  required
                />
                <button className="goButton" type="submit">
                  Go
                </button>
              </form>
            </div>
            <div class="nav-column-three">
              <button class="nav-login">LOG IN </button>
            </div>
          </div>
          <nav class="nav-links">
            <Link to="/">Services</Link>
            <Link to="/universityList">University List</Link>
            <Link to="/">Events</Link>
            <Link to="/">Aluminni Connect</Link>
            {/* <a href="#">Services</a>
            <a href="#">University List</a>
            <a href="#">Events</a>
            <a href="#">Aluminni Connect</a> */}
            <span className="line"></span>
          </nav>
        </header>
      </div>
    );
  }
}

export default Navbar;
