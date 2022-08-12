import React from "react";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <div class="footer-dark">
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-md-3 item">
              <h3>Useful Links</h3>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/signin">Sign in</Link>
                </li>
                <li>
                  <Link to="/order">Order</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div class="col-sm-6 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li>Company</li>
                <li>Team</li>
                <li>Careers</li>
              </ul>
            </div>
            <div class="col-md-6 item text">
              <h3>Grubhub</h3>
            </div>
          </div>
          <p class="copyright">@ 2022 Grubhub All Rights reserved</p>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
