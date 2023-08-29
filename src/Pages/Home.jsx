import React, { useState, useEffect } from "react";
import Layout from "../Components/Layout";
import { FaAngleUp } from "react-icons/fa";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
import img from "../assest/img/man-01.png";
import AImg from "../assest/img/About-img.png";
import { Link } from "react-router-dom";
function Home() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
      window.addEventListener("scroll", () => {
          if (window.scrollY > 400) {
              setShowTopBtn(true);
          } else {
              setShowTopBtn(false);
          }
      });
  }, []);
  const goToTop = () => {
      window.scrollTo({
          top: 0,
          behavior: "smooth",
      });
  };
  return (
    <Layout>
      {/* banner  */}

      <div className="wrapper">
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
            <Col sm={12} lg={6} md={6}>
              <div className="wrapper-container">
                <article>
                  <h1>I am Jonathan Doe</h1>
                  <p>
                    i'm Jonathan, professional web developer with long time
                    experience in this field​
                  </p>
                  <div className="link">
                    <Link to="/" className=" portfolio-link">
                      My portfolio
                    </Link>
                    <Link to="" className="popup-link">
                      {">"}
                    </Link>
                  </div>
                </article>
              </div>
            </Col>
            <Col sm={12} lg={6} md={6} className="">
              <div className="wrapper-img-box">
                <img
                  src={img}
                  className="img-fluid"
                  loading="lazy"
                  alt="no-img"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* banner  */}

      {/* About  ME */}
      <div className="Wrapper-About">
        <Container>
          <div className="wrapper-About-head">
            <h1>
              <b>About Me</b>
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
              <br />
              industry. Lorem Ipsum standard dummy text.
            </p>
          </div>

          <Row className="d-flex justify-content-center align-items-center">
            <Col lg={6} md={6} sm={12} className="my-2">
              <div className="Wrapper-About-right">
                <img src={AImg} loading="lazy" alt="" />
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} className="my-2">
              <div className="About-left">
                <h1 className="mb-3 text-white">
                  <strong>Hi There</strong>
                </h1>
                <p className="mb-3 text-white">
                  Hi There In id nulla magna. Nullam posuere fermentum mattis.
                  Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam
                  tempus, nunc id efficitur sagittis, urna est ultricies eros,
                  ac porta sem turpis
                </p>
                <p className="mb-3 text-white">
                  nunc id efficitur sagittis, urna est ultricies eros, ac porta
                  sem turpis porta sem turpis quis leo. Nulla in feugiat elit
                </p>
                <div className="About-left-Row">
                  <div className="left-col">
                    <h4 className="text-white">Name</h4>

                    <p className="text-white">Jonathan</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* About  ME */}

      {/* services */}
      <div className="wrapper-services">
        <Container>
          <div className="wrapper-service-head">
            <span>SERVICES</span>
            <h1>My Services </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
              <br />
              industry. Lorem Ipsum standard dummy text.
            </p>
          </div>

          <Row>
            <Col sm={12} lg={4} md={4} className="my-2 ">
              <div className="service-card">
                <div className="service-card-icon">
                  <img src="" alt="no-img" loading="lazy" />
                </div>
                <div className="service-card-heading">
                  <h5>Web Development</h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing typesetting
                    industry. simply dummy
                  </p>
                </div>
              </div>
            </Col>
            {/* Web Development */}
            {/* Web Design */}
            <Col sm={12} lg={4} md={4} className="my-2">
              <div className="service-card">
                <div className="service-card-icon">
                  <img src="" alt="no-img" loading="lazy" />
                </div>
                <div className="service-card-heading">
                  <h5>Web Design</h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing typesetting
                    industry. simply dummy
                  </p>
                </div>
              </div>
            </Col>
            {/* Web Design */}
            {/* Web Design */}
            <Col sm={12} lg={4} md={4} className="my-2">
              <div className="service-card">
                <div className="service-card-icon">
                  <img src="" alt="no-img" loading="lazy" />
                </div>
                <div className="service-card-heading">
                  <h5>Video Editing</h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing typesetting
                    industry. simply dummy
                  </p>
                </div>
              </div>
            </Col>
            {/* Web Design */}
            {/* Web Design */}
            <Col sm={12} lg={4} md={4} className="my-2">
              <div className="service-card">
                <div className="service-card-icon">
                  <img src="" alt="no-img" loading="lazy" />
                </div>
                <div className="service-card-heading">
                  <h5>Photography</h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing typesetting
                    industry. simply dummy
                  </p>
                </div>
              </div>
            </Col>
            {/* Web Design */}
            {/* Web Design */}
            <Col sm={12} lg={4} md={4} className="my-2">
              <div className="service-card">
                <div className="service-card-icon">
                  <img src="" alt="no-img" loading="lazy" />
                </div>
                <div className="service-card-heading">
                  <h5>App Developing</h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing typesetting
                    industry. simply dummy
                  </p>
                </div>
              </div>
            </Col>
            {/* Web Design */}
            {/* Web Design */}
            <Col sm={12} lg={4} md={4} className="my-2">
              <div className="service-card">
                <div className="service-card-icon">
                  <img src="" alt="no-img" loading="lazy" />
                </div>
                <div className="service-card-heading">
                  <h5>Seo Expert</h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing typesetting
                    industry. simply dummy
                  </p>
                </div>
              </div>
            </Col>
            {/* Web Design */}
          </Row>
        </Container>
      </div>

      {/* services */}

      {/* Topics I Discuss */}
      <div className="Wrapper-toppic">
        <Container>
          <div className="toppic-title">
            <h1>
              <strong>Topics I Discuss</strong>
            </h1>
          </div>

          <Row className="d-flex justify-content-center">
            <Col sm={12} md={6} lg={3} className="my-2">
              <div className="toppic-box">
                <div className="toppic-number mb-3">
                  <h6>01.</h6>
                </div>
                <div className="toppic-title">
                  <h4 className="text-white">Motivation</h4>
                </div>
                <div className="toppic-ph">
                  <p className="text-white">
                    Lorem dictumst vitae commodo sagittis consectetur mi, varius
                    id gravida tincidunt faucibus.
                  </p>
                </div>
              </div>
            </Col>
            {/* 2 */}
            <Col sm={12} md={6} lg={3} className="my-2">
              <div className="toppic-box">
                <div className="toppic-number mb-3">
                  <h6>02.</h6>
                </div>
                <div className="toppic-title">
                  <h4 className="text-white">Motivation</h4>
                </div>
                <div className="toppic-ph">
                  <p className="text-white">
                    Lorem dictumst vitae commodo sagittis consectetur mi, varius
                    id gravida tincidunt faucibus.
                  </p>
                </div>
              </div>
            </Col>
            {/* 3 */}
            <Col sm={12} md={6} lg={3} className="my-2">
              <div className="toppic-box">
                <div className="toppic-number mb-3">
                  <h6>03.</h6>
                </div>
                <div className="toppic-title">
                  <h4 className="text-white">Motivation</h4>
                </div>
                <div className="toppic-ph">
                  <p className="text-white">
                    Lorem dictumst vitae commodo sagittis consectetur mi, varius
                    id gravida tincidunt faucibus.
                  </p>
                </div>
              </div>
            </Col>
            {/* 4 */}
            <Col sm={12} md={6} lg={3} className="my-2">
              <div className="toppic-box">
                <div className="toppic-number mb-3">
                  <h6>04.</h6>
                </div>
                <div className="toppic-title">
                  <h4 className="text-white">Motivation</h4>
                </div>
                <div className="toppic-ph">
                  <p className="text-white">
                    Lorem dictumst vitae commodo sagittis consectetur mi, varius
                    id gravida tincidunt faucibus.
                  </p>
                </div>
              </div>
            </Col>
            {/* 5 */}
            <Col sm={12} md={6} lg={3} className="my-2">
              <div className="toppic-box">
                <div className="toppic-number mb-3">
                  <h6 className="">05.</h6>
                </div>
                <div className="toppic-title">
                  <h4 className="text-white">Motivation</h4>
                </div>
                <div className="toppic-ph">
                  <p className="text-white">
                    Lorem dictumst vitae commodo sagittis consectetur mi, varius
                    id gravida tincidunt faucibus.
                  </p>
                </div>
              </div>
            </Col>
            {/* 6 */}
            <Col sm={12} md={6} lg={3} className="my-2">
              <div className="toppic-box">
                <div className="toppic-number mb-3">
                  <h6>06.</h6>
                </div>
                <div className="toppic-title">
                  <h4 className="text-white">Motivation</h4>
                </div>
                <div className="toppic-ph">
                  <p className="text-white">
                    Lorem dictumst vitae commodo sagittis consectetur mi, varius
                    id gravida tincidunt faucibus.
                  </p>
                </div>
              </div>
            </Col>
            {/* 7 */}
            <Col sm={12} md={6} lg={3} className="my-2">
              <div className="toppic-box">
                <div className="toppic-number mb-3">
                  <h6>07.</h6>
                </div>
                <div className="toppic-title">
                  <h4 className="text-white">Motivation</h4>
                </div>
                <div className="toppic-ph">
                  <p className="text-white">
                    Lorem dictumst vitae commodo sagittis consectetur mi, varius
                    id gravida tincidunt faucibus.
                  </p>
                </div>
              </div>
            </Col>
            {/* 8 */}
            <Col sm={12} md={6} lg={3} className="my-2">
              <div className="toppic-box">
                <div className="toppic-number mb-3">
                  <h6>08.</h6>
                </div>
                <div className="toppic-title">
                  <h4 className="text-white">Motivation</h4>
                </div>
                <div className="toppic-ph">
                  <p className="text-white">
                    Lorem dictumst vitae commodo sagittis consectetur mi, varius
                    id gravida tincidunt faucibus.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Topics I Discuss */}

      {/* Let's Connect With Us */}
      <div className="Wrapper-Connect-Withus">
        <Container>
          <Row>
            <Col sm={12} md={6} lg={6} className="my-2">
              <div className="Connect-Withus-right">
                <div className="Connect-Withus-right-span">
                  <span className="text-white">I'M Expert ON</span>
                </div>
                <div className="Connect-Withus-right-h1">
                  <h1 className="text-white">Let's Work Together</h1>
                </div>
                <div className="Connect-Withus-right-ph">
                  <p className="text-white">
                    Phasellus accumsan scelerisque dolor, quis mattis justo
                    bibendum non. Nulla sollicitudin turpis in enim elementum
                    varius. Vestibulum ante ipsum primis in faucibus orci luctus
                    et ultrices posuere cubilia Curae
                  </p>
                </div>
                <div className="Connect-Withus-right-link">
                  <Link className="text-white" to="/">Hire Me Now</Link>
                </div>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6} className="my-2">
              <div className="Connect-Withus-left">
                <div className="Connect-withus-left-link">
                  <Link className="text-white" to={""}>One-on-one / CEO Coaching</Link>
                  <span>{"-->"}</span>
                </div>
                <div className="Connect-withus-left-link">
                  <Link className="text-white" to={""}>Business Coaching</Link>
                  <span>{"-->"}</span>
                </div>
                <div className="Connect-withus-left-link">
                  <Link className="text-white" to={""}>Management Coaching</Link>
                  <span>{"-->"}</span>
                </div>
                <div className="Connect-withus-left-link">
                  <Link className="text-white"to={""}>Workshops & Seminars</Link>
                  <span>{"-->"}</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Let's Connect With Us */}

      {/* Client Say's  */}
      <div className="Wrapper-Client-Says">
        <Container>
          <div className="Wrapper-Client-Title mb-5">
            <h2>What Clients Are Saying</h2>
          </div>

          <Row>
            <Col sm={12} md={6} lg={6} className="my-2">
              <div className="Client-box d-flex justify-content-center ">
                <div className="Client-img">
                  <img
                    src={
                      "https://websitedemos.net/business-consulting-02/wp-content/uploads/sites/777/2021/02/business-couching-consulting-template-reviewer-2.jpg"
                    }
                    className="img-fluid "
                    alt=""
                  />
                </div>
                <div className="Client-content">
                  <blockquote>
                    <p className="text-white">
                      “Justo vestibulum risus imperdiet consectetur consectetur
                      pretium urna augue etiam risus accumsan volutpat urna, eu
                      semper enim, est aliquam laoreet urna fringilla viverra.”
                    </p>
                  </blockquote>
                  <h4 className="text-white">DANIEL JOHNSON</h4>
                </div>
              </div>
            </Col>
            {/* 2 */}
            <Col sm={12} md={6} lg={6} className="my-2">
              <div className="Client-box d-flex justify-content-center ">
                <div className="Client-img">
                  <img
                    src={
                      "https://websitedemos.net/business-consulting-02/wp-content/uploads/sites/777/2021/02/business-couching-consulting-template-reviewer-2.jpg"
                    }
                    className="img-fluid "
                    alt=""
                  />
                </div>
                <div className="Client-content">
                  <blockquote>
                    <p className="text-white">
                      “Justo vestibulum risus imperdiet consectetur consectetur
                      pretium urna augue etiam risus accumsan volutpat urna, eu
                      semper enim, est aliquam laoreet urna fringilla viverra.”
                    </p>
                  </blockquote>
                  <h4 className="text-white">DANIEL JOHNSON</h4>
                </div>
              </div>
            </Col>

            {/* 3 */}
            <Col sm={12} md={6} lg={6} className="my-2">
              <div className="Client-box d-flex justify-content-center ">
                <div className="Client-img">
                  <img
                    src={
                      "https://websitedemos.net/business-consulting-02/wp-content/uploads/sites/777/2021/02/business-couching-consulting-template-reviewer-2.jpg"
                    }
                    className="img-fluid "
                    alt=""
                  />
                </div>
                <div className="Client-content">
                  <blockquote>
                    <p className="text-white">
                      “Justo vestibulum risus imperdiet consectetur consectetur
                      pretium urna augue etiam risus accumsan volutpat urna, eu
                      semper enim, est aliquam laoreet urna fringilla viverra.”
                    </p>
                  </blockquote>
                  <h4 className="text-white">DANIEL JOHNSON</h4>
                </div>
              </div>
            </Col>
            {/* 4 */}
            <Col sm={12} md={6} lg={6} className="my-2">
              <div className="Client-box d-flex justify-content-center ">
                <div className="Client-img">
                  <img
                    src={
                      "https://websitedemos.net/business-consulting-02/wp-content/uploads/sites/777/2021/02/business-couching-consulting-template-reviewer-2.jpg"
                    }
                    className="img-fluid "
                    alt=""
                  />
                </div>
                <div className="Client-content">
                  <blockquote>
                    <p className="text-white">
                      “Justo vestibulum risus imperdiet consectetur consectetur
                      pretium urna augue etiam risus accumsan volutpat urna, eu
                      semper enim, est aliquam laoreet urna fringilla viverra.”
                    </p>
                  </blockquote>
                  <h4 className="text-white">DANIEL JOHNSON</h4>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Client Say's  */}

      {/* Work Together */}
      <div className="Wrapper-Wrok-Together">
        <Container>
          <Row>
            <Col lg={12} className="my-2">
              <div className="Worktogather">
                <div className="mb-3 Work-title">
                  <h1 className="text-white">
                    If You Have Any Question, <br />
                    Feel Free to Call 123-456-7890
                  </h1>
                </div>
                <div className="Work-ph mb-3 text-center">
                  <p className="text-white">
                    Ac cum nunc vitae ut turpis praesent nunc odio lorem
                    dictumst <br /> vestibulum sem pharetra urna pretium
                  </p>
                </div>
                <div className="Work-link text-center">
                  <Link className="text-white">Let's Work Together</Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Work Together */}
      <div className="top-to-btm">
            {" "}
            {showTopBtn && (
                <FaAngleUp
                    className="icon-position icon-style"
                    onClick={goToTop}
                />
            )}{" "}
        </div>
    </Layout>
    
  );
}

export default Home;
