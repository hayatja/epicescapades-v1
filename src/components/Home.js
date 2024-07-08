import { Row, Col, Button, Container } from 'react-bootstrap';

import EscapadesCard from './EscapadesCard';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className='home-container'>
        <Container fluid={true}>
          <Row className='align-items-center no-bg'>
            <Col md={6}>
              <h1>Take your adventures to the next level</h1>
              <div className='subtext-container text-center'>
                Explore breathtaking destinations and unique experiences curated
                just for you.
              </div>
            </Col>
            <Col md={6} className='text-center'>
              <img
                src='res/mountain.png'
                alt='Mountain'
                className='img-fluid'
              />
              <Link to='/destinations'>
                <Button className='adventure-button'>
                  Start a new adventure
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>

        <Container fluid={true} className='align-items-center white-bg'>
          <h2>Top Destinations</h2>
          <Row>
            <Col>
              <EscapadesCard
                title='Hike the Himalayas'
                subtitle='10-Day Trekking Experience!'
                backgroundColor='#4A0D2C'
              />
            </Col>
            <Col>
              <EscapadesCard
                title='Explore the Amazon'
                subtitle='Guided Jungle Expedition!'
                backgroundColor='#2C2E4A'
              />
            </Col>
            <Col>
              <EscapadesCard
                title='Cultural Wonders'
                subtitle='Discover Ancient Civilizations!'
                backgroundColor='#259384'
              />
            </Col>
          </Row>
        </Container>

        <Container fluid={true} className='align-items-center no-bg'>
          <h2>Featured Adventures</h2>
          <Row>
            <Col>
              <EscapadesCard
                title='Conquer the Peaks'
                subtitle='Mountain Adventures Await!!'
                backgroundColor='#4A0D2C'
              />
            </Col>
            <Col>
              <EscapadesCard
                title='Dive Deep'
                subtitle='Scuba Diving in Exotic Locations!'
                backgroundColor='#2C2E4A'
              />
            </Col>
            <Col>
              <EscapadesCard
                title='City Lights'
                subtitle='Discover Vibrant Urban Escapes!'
                backgroundColor='#259384'
              />
            </Col>
          </Row>
        </Container>

        <Container fluid={true} className='align-items-center white-bg'>
          <h2>What Our Adventurers Say</h2>
          <Row className='text-center'>
            <Col>
              <EscapadesCard
                title='Name - Trip'
                subtitle='⭐⭐⭐'
                backgroundColor='#4A0D2C'
              />
            </Col>
            <Col>
              <EscapadesCard
                title='Name - Trip'
                subtitle='⭐⭐⭐⭐⭐'
                backgroundColor='#2C2E4A'
              />
            </Col>
            <Col>
              <EscapadesCard
                title='Name - Trip'
                subtitle='⭐⭐'
                backgroundColor='#259384'
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
