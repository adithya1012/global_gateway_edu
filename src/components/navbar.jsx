import React, { Component } from "react";
class Navbar extends Component {
  render() {
    return (
      <div>
        <header id="header">
          <div className="searchBar">
            <div className="column-one">
              <img src="../images/logo1.png" width="105px" height="50px" />
            </div>
            <div className="column-two">
              <form role="search">
                <label htmlFor="search">Search for stuff</label>
                <input
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
            <div className="column-three">
              <button className="login">LOG IN </button>
            </div>
          </div>
          <nav className="links">
            <Link to="/">Services</Link>
            <Link to="/universityList">University List</Link>
            <Link to="/">Events</Link>
            <Link to="/">Aluminni Connect</Link>
            <a href="#">Services</a>
            <a href="#">University List</a>
            <a href="#">Events</a>
            <a href="#">Aluminni Connect</a>
            <span className="line"></span>
          </nav>
        </header>
      </div>
    );
  }
}

export default Navbar;
