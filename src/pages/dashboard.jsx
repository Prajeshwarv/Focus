import React, { Component } from "react";

import { SideNav } from "../common/sidenav";
import "../common/css/sidenav.scss";

class Dashboard extends Component {
  state = {};

  navToggle = (_) => {
    document.querySelector(".body").classList.toggle("nav-is-open");
  };

  render() {
    return (
      <div>
        <div className="body">
          <SideNav />
          <div class="main-page container-all">
            <button onClick={this.navToggle} class="menu-button">
              <span class="open-icon">&#9776;</span>
              <span class="close-icon">&larr;</span>
            </button>
          </div>
        </div>
        <script src="js/nav.js"></script>
      </div>
    );
  }
}

export { Dashboard };
