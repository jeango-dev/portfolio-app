import { Col } from 'react-bootstrap';
import go from '../assets/img/go.svg';

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="mx-2 proj-imgbx">
        <img src={imgUrl} alt="" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <p>{description}</p>
          <div className="social-icon">
            <a href={url} target="_blank" rel="noopener noreferrer">
              <img src={go} alt="" />
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};
