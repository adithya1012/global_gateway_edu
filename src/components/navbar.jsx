import React, { Component } from "react";
class Navbar extends Component {
  render() {
    return (
      <div>
        <header id="header">
          <div class="searchBar">
            <div class="column-one">
              <img src="../images/logo1.png" width="105px" height="50px" />
            </div>
            <div class="column-two">
              <form onsubmit="event.preventDefault();" role="search">
                <label for="search">Search for stuff</label>
                <input
                  id="search"
                  type="search"
                  placeholder="Search..."
                  autofocus
                  required
                />
                <button class="goButton" type="submit">
                  Go
                </button>
              </form>
            </div>
            <div class="column-three">
              <button class="login">LOG IN </button>
            </div>
          </div>
          <nav class="links">
            <a href="#">Services</a>
            <a href="#">University List</a>
            <a href="#">Events</a>
            <a href="#">Aluminni Connect</a>
            <span class="line"></span>
          </nav>
        </header>
      </div>
    );
  }
}

export default Navbar;
