import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [userData, setUserData] = useState(null); // State to store user and wallet data

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous errors
    setSuccess(""); // Clear any previous success messages
    setUserData(null); // Clear previous user data

    try {
      const response = await axios({
        method: "post",
        url: "http://localhost/login.php",
        data: {
          email,
          password,
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      if (response.data.status === "success") {
        // Display success message
        setSuccess("Login successful! Redirecting...");

        // Store user data
        setUserData({
          userId: response.data.user_id,
          email: response.data.email,
          name: response.data.name,
          wallet: response.data.wallet, // Wallet details
        });

        // Redirect to another page (e.g., dashboard)
        setTimeout(() => {
          window.location.href = "/dashboard"; // Change to your target route
        }, 2000);
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError(
        "An error occurred while trying to log in. Please try again later."
      );
    }
  };

  return (
    <div className="page-container">
      <div className="content-wrap">
        <div className="hero_area">
          <header className="header_section">
            <div className="container-fluid">
              <nav className="navbar navbar-expand-lg custom_nav-container">
                <a className="navbar-brand" href="index.html">
                  <span>Cryptop</span>
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
                          <Link to="/">Home </Link>
                          <span className="sr-only">(current)</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link">
                          <Link to="/about"> About </Link>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link">
                          <Link to="/how">How </Link>{" "}
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link">
                          <Link to="/Wallet">
                            <span>Wallet</span>{" "}
                            <img src="images/wallet.png" alt="" />
                          </Link>
                        </a>
                      </li>
                      <li className="nav-item active">
                        <a className="nav-link">
                          <Link to="/login"> Login </Link>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link">
                          <Link to="/Signup"> Sign Up</Link>
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
        </div>
        <form onSubmit={handleLogin}>
          <label>Enter Email</label>
          <br />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
          />
          <br />
          <label>Enter Password</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />
          <br />
          <button type="submit">Login</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "green" }}>{success}</p>}
        </form>
      </div>
      {/*  info section */}
      <section className="info_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="info_contact">
                <div className="info_logo">
                  <a href="index.html">
                    <span>Cryptop</span>
                  </a>
                </div>
                <h5>Contact Us</h5>
                <div>
                  <div className="img-box">
                    <img src="images/location.png" width="18px" alt="" />
                  </div>
                  <p>DEMO</p>
                </div>
                <div>
                  <div className="img-box">
                    <img src="images/phone.png" width="18px" alt="" />
                  </div>
                  <p>+01 1234567890</p>
                </div>
                <div>
                  <div className="img-box">
                    <img src="images/envelope.png" width="18px" alt="" />
                  </div>
                  <p>demo@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info_info">
                <h5>Invest Money</h5>
                <p></p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="info_links">
                <h5>Useful Links</h5>
                <ul></ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info_form">
                <h5>Newsletter</h5>
                <form action="">
                  <input type="email" placeholder="Enter your email" />
                  <button>Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* footer section  */}
      <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
      <script type="text/javascript" src="js/bootstrap.js"></script>
      <script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
      ></script>

      {/* owl carousel script  */}
      <script type="text/javascript">
        $(".owl-carousel").owlCarousel( loop: true, margin: 0, navText: [],
        center: true, autoplay: true, autoplayHoverPause: true, responsive: ( 0:
        ( items: 1 ), 1000: ( items: 3 ) ) );
      </script>
    </div>
  );
};

export default LoginPage;
