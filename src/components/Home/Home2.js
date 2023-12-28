import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/ReadyPlayerMe-Avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
const MyComponent = () => {
  const [rotation, setRotation] = useState(0);
function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C++, Python. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Machine Learning Models </b> and
                also in areas related to{" "}
                <b className="purple">
                  Development.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Machine Learning</b> and
              <i>
                <b className="purple">
                  {" "}
                  Python Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> Pandas,Matplotlib,Scikit-Learn,pickle and opencv</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              tiltMaxAngleX={30}
              tiltMaxAngleY={30}
              glareEnable={true}
              glareMaxOpacity={0.5}
              scale={1.02}
              onMouseEnter={() => setRotation(10)}
              onMouseLeave={() => setRotation(0)}
              style={{ transform: `rotate(${rotation}deg)` }}
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ruchi-04"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ruchii20/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
