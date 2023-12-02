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
              <form
                onsubmit="event.preventDefault();"
                role="search"
                class="nav-form"
              >
                <label for="search" class="nav-label">
                  Search for stuff
                </label>
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
              <a href="/login">
                <button class="nav-login">LOG IN </button>
              </a>
            </div>
          </div>
          <nav class="nav-links">
            <a href="/">Services</a>
            <a href="/universityList">University List</a>
            <a href="/events">Events</a>

            <a href="/Alumni">Alumni Connect</a>
            <span className="line"></span>
          </nav>
        </header>
      </div>
    );
  }
}

export default Navbar;
