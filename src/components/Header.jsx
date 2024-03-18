import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="main-header">
          <div className="container">
            <h1>FavFilm</h1>
            <form action="GET" role="form"></form>
            <label htmlFor="search-video"></label>
            <input
              type="search"
              name="search-video"
              id="search-video"
              placeholder="Recherche..."
            />
            <button type="submit" role="button">
              Go !
            </button>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
