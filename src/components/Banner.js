import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Logo from './Logo';
import pdf from '../assets/cv/JGD-CV.pdf';
import '../styles/Banner.css';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  // eslint-disable-next-line
  const [index, setIndex] = useState(1);
  const toRotate = [
    'Web Designer',
    'Web Developer',
    'Front-End Developer',
    'Backe-End Developer',
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
    // eslint-disable-next-line
  }, [delta, text]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center mx-auto">
          <Col xs={12} md={6} xl={8}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__pulse' : ''
                  }
                >
                  <span className="tagline">👋 Welcome to my Portfolio </span>
                  <h1>{`I'm Jean Gonzalez `}</h1>
                  <h1
                    className="txt-rotate"
                    dataPeriod="1000"
                    data-rotate='[
                        "Web Designer",
                        "Web Developer",ñ
                        "Front-End Developer",
                        "Backe-End Developer",
                      ]'
                  >
                    <span className="wrap">{text}</span>
                  </h1>
                  <p>
                    Full-stack web developer with high skills in Front-End
                    development, good Back-End performance and Database
                    management. Accustomed to working under pressure and
                    teamwork, with high expectations for professional growth and
                    capable of generating added value to the organization by
                    creating ideas and own initiative to solve problems.
                  </p>
                  <div className="download-cv mt-5">
                    <a
                      href={pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      download="JGD-CV.pdf"
                    >
                      Download CV
                    </a>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>

          <Col xs={12} md={6} xl={4}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'my-5 animate__animated animate__zoomIn' : ''
                  }
                >
                  <Logo />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
