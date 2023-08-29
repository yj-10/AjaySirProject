import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

function Footer() {
  return (
    <>
      <footer className="Footer ">
        <Container>
          <Row>
            <Col lg={3} md={6} sm={12}>
              <div className="footer-box-one">
                <div className="box-title mb-5">
                  <h5 className="text-white">Ajay Sukla</h5>
                </div>
                <div className="box-ph text-white">
                  Amet suscipit urna turpis in malesuada et sapien semper
                  porttitor netus turpis molestie sit molestie quis vitae.
                </div>
                <div className="box-link">
                  <div className="li">
                    <Link>Li</Link>
                  </div>
                  <div className="li">
                    <Link>Li</Link>
                  </div>
                  <div className="li">
                    <Link>Li</Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="footer-box-two">
                <div className="box-title mb-5">
                  <h5 className="text-white">Services</h5>
                </div>
                <div className="second-content">
                  <div className="second-link">
                    <Link className="text-white">One-on-one Coaching</Link>
                  </div>
                  <div className="second-link">
                    <Link className="text-white">Group Coaching</Link>
                  </div>
                  <div className="second-link">
                    <Link> className="text-white"Workshop Facilitation</Link>
                  </div>
                  <div className="second-link">
                    <Link className="text-white">Keynotes & Seminars</Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="footer-box-three">
                <div className="box-title mb-5">
                  <h5 className="text-white">Quik Link</h5>
                </div>
                <div className="thired-content">
                  <div className="thired-link">
                    <Link className="text-white">Home</Link>
                  </div>
                  <div className="thired-link">
                    <Link className="text-white">About</Link>
                  </div>
                  <div className="thired-link">
                    <Link className="text-white">Service</Link>
                  </div>
                  <div className="thired-link">
                    <Link className="text-white">Contact</Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="footer-box-four">
                <div className="box-title mb-5">
                  <h5 className="text-white">Contact Info</h5>
                </div>
                <div className="forth-content">
                  <div className="forth-link">
                    <p className="text-white">123 Fifth Avenue, New York, NY 12004.</p>
                  </div>
                  <div className="forth-link">
                    <p className="text-white">United States.</p>
                  </div>
                  <div className="forth-link">
                    <p className="text-white"> mail@example.com</p>
                  </div>
                  <div className="forth-link">
                    <p className="text-white">+01 – 123 456 78 90</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <hr className="text-white" />

          <div className="footer-copyright">
            <p className="text-white">
              @ {new Date().getFullYear()} Ajaysukla.com • All Rights Reserved
            </p>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
