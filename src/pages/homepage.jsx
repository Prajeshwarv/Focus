import React, { Component } from "react";

import "./css/homepage.scss";
class HomePage extends Component {
  state = {};
  navToggle = (_) => {
    const primaryNav = document.querySelector(".primary-navigation");
    const navToggle = document.querySelector(".mobile-nav-toggle");
    const visibility = primaryNav.getAttribute("data-visible");
    if (visibility === "false") {
      primaryNav.setAttribute("data-visible", "true");
      navToggle.setAttribute("aria-expanded", "true");
    } else if (visibility === "true") {
      primaryNav.setAttribute("data-visible", "false");
      navToggle.setAttribute("aria-expanded", "false");
    }
  };
  render() {
    return (
      <div>
        <header class="primary-header flex">
          <div class="logo">
            <h4>Focus</h4>
          </div>
          <button
            onClick={this.navToggle}
            className="mobile-nav-toggle"
            aria-controls="primary-navigation"
            aria-expanded="false"
          >
            &#9776;
          </button>
          <nav>
            <ul
              id="primary-navigtion"
              data-visible="false"
              class="primary-navigation flex"
            >
              <li>
                <a href="/#">
                  <span>Home</span>{" "}
                </a>
              </li>
              <li>
                <a href="/dashboard">
                  <span> Dashboard</span>
                </a>
              </li>
              <li>
                <a href="/#">
                  <span>Login</span>{" "}
                </a>
              </li>
              <li>
                <a href="/#">
                  <span>Signup</span>{" "}
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export { HomePage };
