import { Col, Container, Row } from 'react-bootstrap';
import html from '../assets/skills/html-1.svg';
import css from '../assets/skills/css-3.svg';
import js from '../assets/skills/javascript-1.svg';
import git from '../assets/skills/git.png';
import sass from '../assets/skills/sass.png';
import bootstrap from '../assets/skills/bootstrap-4.svg';
import react from '../assets/skills/react.png';
import redux from '../assets/skills/redux.svg';
import node from '../assets/skills/nodejs.png';
import express from '../assets/skills/expressjs.png';
import django from '../assets/skills/django.svg';
import python from '../assets/skills/python.png';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import '../styles/Skills.css';

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__zoomIn' : ''
                  }
                >
                  <h2 className="my-5">
                    Skills <ArrowRightCircle size={25} />
                  </h2>
                  <Row className="mx-auto" style={{ maxWidth: '900px' }}>
                    <Col className="skills">
                      <img src={html} alt="" />
                    </Col>
                    <Col className="skills">
                      <img src={css} alt="" />
                    </Col>
                    <Col className="skills">
                      <img src={js} alt="" />
                    </Col>
                    <Col className="skills">
                      <img src={git} alt="" />
                    </Col>
                    <Col className="skills">
                      <img src={sass} alt="" />
                    </Col>
                    <Col className="skills">
                      <img src={bootstrap} alt="" />
                    </Col>
                  </Row>
                  <Row className="mx-auto" style={{ maxWidth: '900px' }}>
                    <Col className="skills">
                      <img src={react} alt="" />
                    </Col>
                    <Col className="skills">
                      <img src={redux} alt="" />
                    </Col>
                    <Col className="skills">
                      <img src={node} alt="" />
                    </Col>
                    <Col className="skills">
                      <img src={express} alt="" />
                    </Col>
                    <Col className="skills">
                      <img src={python} alt="" />
                    </Col>
                    <Col className="skills">
                      <img src={django} alt="" />
                    </Col>
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
