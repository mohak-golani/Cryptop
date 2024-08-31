import React from "react";
import { Link } from "react-router-dom";

function about() {
  return (
    <div>
      <div class="hero_area">
        {/* header section strats  */}
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
                        <Link to="/">Home </Link>
                        <span class="sr-only">(current)</span>
                      </a>
                    </li>
                    <li class="nav-item active">
                      <a class="nav-link">
                        {" "}
                        <Link to="/about"> About </Link>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link">
                        {" "}
                        <Link to="/how">How </Link>{" "}
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link">
                        <Link to="/Wallet">
                          <span>Wallet</span>{" "}
                          <img src="images/wallet.png" alt="" />
                        </Link>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link">
                        {" "}
                        <Link to="/login"> Login </Link>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link">
                        {" "}
                        <Link to="/Signup">Sign Up</Link>{" "}
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
      </div>

      {/* about section  */}

      <section class="about_section layout_padding">
        <div class="container">
          <div class="heading_container">
            <h2>About Cryptop</h2>
          </div>
          <div class="box">
            <div class="img-box">
              <img src="/images/about-img.png" alt=""></img>
            </div>
            <div class="detail-box">
              <p>
                Cryptocurrencies creates economic freedom by ensuring that
                people can participate fairly in the economy, and Cryptop is on
                a mission to increase economic freedom for more than 1 billion
                people. We're updating the century-old financial system by
                providing a trusted platform that makes it easy for people and
                institutions to engage with crypto assets, including trading,
                staking, safekeeping, spending, and fast, free global transfers.
                We also provide critical infrastructure for onchain activity and
                support builders who share our vision that onchain is the new
                online. And together with the crypto community, we advocate for
                responsible rules to make the benefits of crypto available
                around the world.
              </p>
              <div class="btn-box">
                <Link to="/Signup">Get Started</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* info section  */}
      <section class="info_section layout_padding">
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <div class="info_contact">
                <div class="info_logo">
                  <a href="index.html">
                    <span>Cryptop</span>
                  </a>
                </div>
                <h5>Contact Us</h5>
                <div>
                  <div class="img-box">
                    <img src="images/location.png" width="18px" alt="" />
                  </div>
                  <p></p>
                </div>
                <div>
                  <div class="img-box">
                    <img src="images/phone.png" width="18px" alt="" />
                  </div>
                  <p>+01 1234567890</p>
                </div>
                <div>
                  <div class="img-box">
                    <img src="images/envelope.png" width="18px" alt="" />
                  </div>
                  <p>demo@gmail.com</p>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="info_info">
                <h5>Invest Money</h5>
                <p></p>
              </div>
            </div>

            <div class="col-md-3">
              <div class="info_links">
                <h5>Useful Links</h5>
                <ul>
                  {/* <li>
                    <a href="">There are many</a>
                  </li>
                  <li>
                    <a href="">variations of</a>
                  </li>
                  <li>
                    <a href="">passages of</a>
                  </li>
                  <li>
                    <a href="">Lorem Ipsum</a>
                  </li>
                  <li>
                    <a href="">available, but the</a>
                  </li>
                  <li>
                    <a href="">majority have</a>
                  </li>
                  <li>
                    <a href="">suffered</a>
                  </li> */}
                </ul>
              </div>
            </div>
            <div class="col-md-3">
              <div class="info_form ">
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
        $(".owl-carousel").owlCarousel(( loop: true, margin: 0, navText: [],
        center: true, autoplay: true, autoplayHoverPause: true, responsive: ( 0:
        ( items: 1 ), 1000: ( items: 3 ) ) ));
      </script>
    </div>
  );
}
export default about;
