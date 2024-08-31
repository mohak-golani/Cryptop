import React from "react";
import { Link } from "react-router-dom";

function Wallet() {
  return (
    <div>
      {/*  header section strats */}
      <header class="header_section">
        <div class="container-fluid">
          <nav class="navbar navbar-expand-lg custom_nav-container ">
            <a class="navbar-brand" href="index.html">
              <span>Cryptop</span>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <div class="d-flex ml-auto flex-column flex-lg-row align-items-center">
                <ul class="navbar-nav  ">
                  <li class="nav-item ">
                    <a class="nav-link">
                      {" "}
                      <Link to="/"> Home </Link>
                      <span class="sr-only">(current)</span>
                    </a>
                  </li>
                  <li class="nav-item ">
                    <a class="nav-link">
                      <Link to="/about"> About </Link>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link">
                      <Link to="/how"> How </Link>{" "}
                    </a>
                  </li>
                  <li class="nav-item active">
                    <a class="nav-link">
                      {" "}
                      <Link to="/wallet">
                        <span>Wallet</span>
                      </Link>{" "}
                      <img src="images/wallet.png" alt="" />
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link">
                      <Link to="/login"> Login</Link>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link">
                      {" "}
                      <Link to="/Signup"> Sign Up </Link>
                    </a>
                  </li>
                </ul>
                <div class="user_option">
                  <form class="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                    <button
                      class="btn  my-2 my-sm-0 nav_search-btn"
                      type="submit"
                    ></button>
                  </form>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
      {/*  end header section  */}
    </div>
  );
}

export default Wallet;