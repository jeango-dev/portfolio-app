import { Container, Row, Col } from 'react-bootstrap';
import profile from '../assets/img/Perfil500px.jpeg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import '../styles/Contact.css';

export const Contact = () => {
  const sendEmail = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        'service_qt8csi2',
        'template_fse9q9y',
        event.target,
        'U2h5rWJ6-W0urYNhL'
      )
      .then((response) => console.log(response));
    Swal.fire({
      title: '¡Message Sent!',
      icon: 'succes',
      text: 'Thanks for contacting me. I will contact you soon',
      button: 'Ok',
    });
    event.target.reset().catch((error) => console.log(error));
  };

  return (
    <section id="contact">
      <Container>
        <Row className="align-items-center px-4 contact">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? 'animate__animated animate__zoomIn' : ''
                  }
                  src={profile}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__pulse' : ''
                  }
                >
                  <h2>Contact Me</h2>
                  <form onSubmit={sendEmail}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        {/* <i className="fa-solid fa-circle-check"></i> */}
                        <input
                          type="text"
                          name="name"
                          placeholder="First Name *"
                          required
                        />

                        {/* <p>Este es un error</p> */}
                      </Col>

                      <Col size={12} sm={6} className="px-1">
                        {/* <i className="fa-solid fa-circle-check"></i> */}
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Last Name"
                        />
                        {/* <p>Este es un error</p> */}
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        {/* <i className="fa-solid fa-circle-check"></i> */}
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address *"
                          required
                        />
                        {/* <p>Este es un error</p> */}
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        {/* <i className="fa-solid fa-circle-check"></i> */}
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number"
                        />
                        {/* <p>Este es un error</p> */}
                      </Col>
                      <Col size={12} className="px-1">
                        {/* <i className="fa-solid fa-circle-check"></i> */}
                        <textarea
                          rows="6"
                          name="message"
                          placeholder="Message *"
                          required
                        ></textarea>
                        {/* <div>
                          <i className="fa-solid fa-triangle-exclamation"></i>
                          <p className="mx-4">
                            Completa el formulario correctamente
                          </p>
                        </div> */}
                        <button type="submit">
                          <span>Send</span>
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
