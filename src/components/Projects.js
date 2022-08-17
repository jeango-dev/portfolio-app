import { Container, Row, Col } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import projImg1 from '../assets/projects/WeatherApp.jpg';
import projImg2 from '../assets/projects/RickymortyApp.jpg';
import projImg3 from '../assets/projects/PokedexApp.jfif';
import projImg4 from '../assets/projects/EcommerceApp.jpg';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';

import 'animate.css';

export const Projects = () => {
  const projects = [
    {
      title: 'Weather App',
      description: 'Design and Front-End Development with React JS',
      imgUrl: projImg1,
      url: 'https://jgd-weather.vercel.app/',
    },
    {
      title: 'Rick and Morty App',
      description: 'Design and Front-End Development with React JS',
      imgUrl: projImg2,
      url: 'https://jgd-rickandmorty.vercel.app/',
    },
    {
      title: 'Pokedex App',
      description: 'Design and Front-End Development with React JS',
      imgUrl: projImg3,
      url: 'https://jgd-pokedex.vercel.app/',
    },
    {
      title: 'E-Commerce App',
      description: 'Design and Front-End Development with React JS',
      imgUrl: projImg4,
      url: 'https://jgd-ecommerce.vercel.app/',
    },
  ];

  return (
    <section className="project " id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__pulse' : ''
                  }
                >
                  <h2 className="my-5">
                    Projects <ArrowRightCircle size={25}></ArrowRightCircle>
                  </h2>
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
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
