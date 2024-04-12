import React from "react";
import "../Styles/Footer.css";
import SubscribeNewsletter from "./SubscribeNewsletter";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="ft-info">
          <div className="ft-info-p1">
            <p className="ft-title">
              Health <span className="ft-sign">365</span>
            </p>
            <p className="ft-description">
              Talk to online doctors and get medical advice, online
              prescriptions, refills and medical notes within minutes. On-demand
              healthcare services at your fingertips.
            </p>
          </div>

          <SubscribeNewsletter />
        </div>

        <div className="ft-list">
          <p className="ft-list-title">Services</p>
          <ul className="ft-list-items">
            <li>
              <a href="#services">Emergency Care</a>
            </li>
            <li>
              <a href="#services">Heart Disease</a>
            </li>
            <li>
              <a href="#services">Dental Care</a>
            </li>
            <li>
              <a href="#services">Prescription</a>
            </li>
            <li>
              <a href="#services">Insights for doctors</a>
            </li>
          </ul>
        </div>

        <div className="ft-list">
          <p className="ft-list-title">Legal</p>
          <ul className="ft-list-items">
            <li>
              <Link to={"/legal"}>General Info</Link>
            </li>
            <li>
              <Link to={"/legal"}>Privacy Policy</Link>
            </li>
            <li>
              <Link to={"/legal"}>Terms of Services</Link>
            </li>
            <li>
              <Link to={"/legal"}>Consultations</Link>
            </li>
            <li>
              <Link to={"/legal"}>How it Works</Link>
            </li>
          </ul>
        </div>

        <div className="ft-list" id="contact">
          <p className="ft-list-title">Talk To Us</p>
          <ul className="ft-list-items">
            <li>
              <a href="mailto:support@health365.com">support@health365.com</a>
            </li>
            <li>
              <a href="mailto:appointment@health365.com">
                appointment@health365.com
              </a>
            </li>
            <li>
              <a href="tel:0416-2281000">+91 416 2281 000</a>
            </li>
            <li>
              <a href="tel: +91 94987 60000"> +91 94987 60000</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="ft-copyright">
        <p>© 2019-2024 Health 365. All rights reserved.</p>

        <ul className="ft-social-links">
          <li>
            <a
              href="https://www.linkedin.com/in/aryan-raina-8a00aa235/"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512">
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
              </svg>
            </a>
          </li>
          
          <li>
            <a
              href="https://github.com/AryanRaina"
              title="Github"
              target="_blank"
              rel="noopener noreferrer">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                height="1em" 
                viewBox="0 0 16 16">
                <path d="M8,0C3.6,0,0,3.6,0,8c0,3.526,2.315,6.534,5.498,7.591c0.377,0.055,0.52-0.179,0.52-0.385c0-0.19-0.007-0.693-0.011-1.361	c-2.225,0.483-2.695-1.072-2.695-1.072c-0.364-0.924-0.888-1.17-0.888-1.17c-0.726-0.496,0.055-0.486,0.055-0.486	c0.803,0.057,1.225,0.824,1.225,0.824c0.714,1.223,1.872,0.87,2.328,0.665c0.073-0.517,0.279-0.87,0.508-1.069	c-1.776-0.202-3.644-0.888-3.644-3.954c0-0.873,0.312-1.587,0.823-2.147C3.637,5.233,3.362,4.419,3.798,3.318	c0,0,0.672-0.215,2.2,0.82C6.636,3.961,7.32,3.872,8,3.869c0.679,0.003,1.364,0.092,2.003,0.269c1.527-1.035,2.198-0.82,2.198-0.82	c0.436,1.101,0.162,1.915,0.08,2.117c0.513,0.559,0.822,1.273,0.822,2.147c0,3.073-1.87,3.75-3.653,3.948	c0.287,0.247,0.543,0.735,0.543,1.482c0,1.07-0.01,1.932-0.01,2.195c0,0.208,0.141,0.443,0.521,0.385C13.686,14.532,16,11.526,16,8	C16,3.6,12.4,0,8,0z"></path>
              </svg>
            </a>
          </li>

          <li>
            <a
              href="https://twitter.com/AryanRaina12"
              title="Twitter"
              target="_blank"
              rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512">
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
