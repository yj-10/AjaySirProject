import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer bg-light text-center">
        <div className="footer-link">
            <ul>
                <li>
                    <Link  to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/Ceo-Coaching'}>Ceo Coaching</Link>
                </li>
                <li>
                    <Link to={'/About'}>About</Link>
                </li>
                <li>
                    <Link  to={'/'}></Link>
                </li>
            </ul>
        </div>
        <div className="footer-copyright">
          <p>
            {" "}
            @ {new Date().getFullYear()} Ajaysukla.com • All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
