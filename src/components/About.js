import { Col, Row } from 'react-bootstrap';
// import { MapContainer, TileLayer } from 'react-leaflet';

import '../styles/About.css';

const About = () => {
  return (
    <div
      className='d-flex justify-content-between align-items-center m-5'
      style={{
        backgroundColor: '#fff',
        padding: '20px',
        margin: '20px',
        borderRadius: '8px',
      }}
    >
      <div>
        <h3>About Us</h3>

        <p>
          Although all our services are online, if you wish to have an in person
          consult, you can reach us here! Please note, these hours represent the
          in personal consultation, the website is open 24/7!
        </p>

        <Row>
          <Col md={7}>
            <div>
              <h4>Address</h4>
              1234 Street St, Ottawa, Ontario, Canada
              <br />
              <iframe
                title='sample-map'
                width='100%'
                height='400'
                frameborder='0'
                marginheight='0'
                marginwidth='0'
                src='https://www.openstreetmap.org/export/embed.html?bbox=-75.9122%2C45.4215%2C-75.6122%2C45.6215&layer=mapnik'
                style={{ border: '1px solid black' }}
              ></iframe>
            </div>
          </Col>
          <Col md={5}>
            <div>
              <h3>Open Hours</h3>
              <br />
              <p className='small-p'>Monday: Closed</p>
              <p className='small-p'>Tuesday: Closed</p>
              <p className='small-p'>Wednesday: 11:00 am - 6:00 pm</p>
              <p className='small-p'>Thursday: 11:00 am - 6:00 pm</p>
              <p className='small-p'>Friday: 11:00 am - 7:00 pm</p>
              <p className='small-p'>Saturday: 11:00 am - 7:00 pm</p>
              <p className='small-p'>Sunday: Closed</p>
              <br />
              <h3>Contact Us</h3>
              <br />
              <p className='small-p'>
                <b>Phone:</b> +1 (999) 999-9999
              </p>
              <p className='small-p'>
                <b>Email:</b> hello@waggingtailspremium.ca
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default About;
