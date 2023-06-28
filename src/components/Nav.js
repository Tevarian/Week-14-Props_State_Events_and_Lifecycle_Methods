import React, { Component } from "react";
import "../styles/Nav.css";

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            HOME
            {/* future navigation bar using React Router */}
          </li>
        </ul>
      </nav>
    );
  }
}
