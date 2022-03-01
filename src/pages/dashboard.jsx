import React, { Component } from "react";

import { SideNav } from "../common/sidenav";
import "./css/dashboard.scss"
import "../common/css/sidenav.scss";

class Dashboard extends Component {
  state = {};

  navToggle = (_) => {
    document.querySelector(".body").classList.toggle("nav-is-open");
  };

  render() {
    const navStyles = {
      background: "white",
      justifyContent: "space-between"

    };
    return (
      <div>
        <div className="body">
          
            <SideNav />
            <div className="main-page container-all">
            <header className="header" style={navStyles}>
              <div>
                <button onClick={this.navToggle} className="menu-button">
                  <span className="open-icon">&#9776;</span>
                  <span className="close-icon">&larr;</span>
                </button>
              </div>
            
              <nav>
                
                <ul className="navigation flex">
                  <li>
                    <a href="/#">bell</a>
                  </li>
                  <li>
                    <a href="/#">mail</a>
                  </li>
                  <li>
                    <a href="/#">user</a>
                  </li>
                </ul>
              </nav>
              </header>
            </div>
          
        </div>
      </div>
    );
  }
}

export { Dashboard };
