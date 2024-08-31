import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user and wallet details from the backend
    const fetchUserData = async () => {
      try {
        const userId = localStorage.getItem("userId"); // Assuming you stored the user ID after login
        const response = await axios.get(
          `http://localhost/login.php?uid=${userId}`
        );
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <div className="hero_area">
        {/*  header section starts */}
        <header className="header_section">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container ">
              <a className="navbar-brand">
                <Link to="/">
                  <span>Cryptop</span>
                </Link>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link">
                        <Link to="/"> Home </Link>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link">
                        <Link to="/about"> About </Link>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link">
                        <Link to="/how"> How </Link>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link">
                        <Link to="/Wallet">
                          <span>Wallet</span>
                          <img src="images/wallet.png" alt="" />
                        </Link>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link">
                        <Link to="/login"> Login</Link>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link">
                        <Link to="/Signup"> Sign Up </Link>
                      </a>
                    </li>
                  </ul>
                  <div className="user_option">
                    <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                      <button
                        className="btn  my-2 my-sm-0 nav_search-btn"
                        type="submit"
                      ></button>
                    </form>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>

        {/* Display user and wallet information after login */}
        {userData && (
          <div>
            <h3>User Details</h3>
            <p>Name: {userData.name}</p>
            <label>Email: {userData.email}</label>
            {/* {userData.wallet && (
              // <div>
              //   <h4>Wallet Details</h4>
              //   <p>BTC: {userData.wallet.BTC}</p>
              //   <p>ETH: {userData.wallet.ETH}</p>
              //   <p>DOGE: {userData.wallet.DOGE}</p>
              // </div>
            )} */}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
