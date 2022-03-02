import React, { Component } from "react";

import { SideNav } from "../common/sidenav";
import "./css/dashboard.scss";
import "../common/css/sidenav.scss";

import img1 from "../assets/img1.jfif";
import img2 from "../assets/img2.jfif";
import img3 from "../assets/img3.jfif";

class Dashboard extends Component {
  state = {};

  navToggle = (_) => {
    document.querySelector(".body").classList.toggle("nav-is-open");
  };

  render() {
    const navStyles = {
      background: "white",
      justifyContent: "space-between",
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
                    <a href="/#">
                      <i class="fa-solid fa-bell"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i class="fa-solid fa-envelope"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i class="fa-solid fa-user"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </header>
            <main>
              <section>
                <div className="container">
                  <div className="product-grid">
                    <div className="card stacked featured">
                      <img src={img1} alt="" className="card-img" />
                      <div className="card-content">
                        <h2 className="card-title">asd</h2>
                        <p className="card-price">assdssddsd</p>
                        <p className="card-description">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. 
                        </p>
                      </div>
                    </div>
                    <div className="card stacked">
                      <img src={img2} alt="" className="card-img" />
                      <div className="card-content">
                        <h2 className="card-title">asd</h2>
                        <p className="card-price">assdssddsd</p>
                        <p className="card-description">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. 
                        </p>
                      </div>
                    </div>
                    <div className="card stacked">
                      <img src={img3} alt="" className="card-img" />
                      <div className="card-content">
                        <h2 className="card-title">asd</h2>
                        <p className="card-price">assdssddsd</p>
                        <p className="card-description">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. 
                        </p>
                      </div>
                    </div>
                    <div className="card stacked">
                      <img src={img3} alt="" className="card-img" />
                      <div className="card-content">
                        <h2 className="card-title">asd</h2>
                        <p className="card-price">assdssddsd</p>
                        <p className="card-description">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. 
                        </p>
                      </div>
                    </div>
                    <div className="card stacked">
                      <img src={img3} alt="" className="card-img" />
                      <div className="card-content">
                        <h2 className="card-title">asd</h2>
                        <p className="card-price">assdssddsd</p>
                        <p className="card-description">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. 
                        </p>
                      </div>
                    </div>
                    <div className="card stacked">
                      <img src={img3} alt="" className="card-img" />
                      <div className="card-content">
                        <h2 className="card-title">asd</h2>
                        <p className="card-price">assdssddsd</p>
                        <p className="card-description">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export { Dashboard };
