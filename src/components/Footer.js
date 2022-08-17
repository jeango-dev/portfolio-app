import { Container, Row, Col } from 'react-bootstrap';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon4.svg';
import '../styles/Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} className="mt-3 text-center ">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/jean-carlo-gonzalez-martinez-06865910b"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="Icon" />
              </a>
              <a
                href="https://github.com/jeancarlogm94"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon2} alt="Icon" />
              </a>
            </div>
            <p>
              <i className="fa-regular fa-copyright"></i> JG DEV 2022
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
