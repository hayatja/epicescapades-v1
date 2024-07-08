import { Link } from 'react-router-dom';
import {
  Container,
  Form,
  InputGroup,
  Card,
  Row,
  Col,
  Button,
} from 'react-bootstrap';
import { FaSearch, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import '../styles/SearchBar.css';

const Packages = () => {
  return (
    <>
      <div className='recommended-articles mt-4'>
        <h4 className='text-center mb-4'>Trending Packages</h4>
        <div className='d-flex justify-content-between align-items-center'>
          <Button variant='outline-secondary' className='arrow-button'>
            <FaArrowLeft />
          </Button>
          <Row className='recommended-cards'>
            {[
              'Explore the Amazon',
              'Cultural Wonders',
              'Hike the Himalayas',
              'Explore the Nile',
            ].map((title, index) => (
              <Col
                key={index}
                className={`recommended-card mb-3 color-${index % 3}`}
              >
                <Card>
                  <Card.Body>{title}</Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Button variant='outline-secondary' className='arrow-button'>
            <FaArrowRight />
          </Button>
        </div>
      </div>

      <h2 className='text-center mb-4 mt-5'>Find Your Perfect Expedition!</h2>
      <h5 className='text-center mb-4'>
        Click on any package to start planning your perfect adventure instantly!
      </h5>
      <Container className='search-bar-container mt-4'>
        <Row>
          <Col md={10}>
            <InputGroup className='search-bar'>
              <Form.Control
                type='text'
                placeholder='Search Destinations'
                aria-label='Where'
                className='search-input'
              />
              <Form.Control
                type='text'
                placeholder='Add Days'
                aria-label='Duration'
                className='search-input'
              />
              <Form.Control
                type='text'
                placeholder='Novice to Expert'
                aria-label='Difficulty'
                className='search-input'
              />
              <Form.Control
                type='text'
                placeholder='Add Guests'
                aria-label='Who'
                className='search-input'
              />
            </InputGroup>
          </Col>
          <Col md={2} className='d-flex align-items-center'>
            <Button variant='outline-secondary' className='search-button'>
              <FaSearch />
            </Button>
          </Col>
        </Row>
      </Container>

      <div className='recommended-articles mt-4'>
        <h4 className='text-center mb-4'>Forest Fantasy</h4>
        <div className='d-flex justify-content-between align-items-center'>
          <Button variant='outline-secondary' className='arrow-button'>
            <FaArrowLeft />
          </Button>
          <Row className='recommended-cards'>
            {[
              'Explore the Amazon',
              'Cultural Wonders',
              'Hike the Himalayas',
              'Explore the Nile',
            ].map((title, index) => (
              <Col
                key={index}
                className={`recommended-card mb-3 color-${index % 3}`}
              >
                <Card>
                  <Card.Body>{title}</Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Button variant='outline-secondary' className='arrow-button'>
            <FaArrowRight />
          </Button>
        </div>
      </div>

      <div className='recommended-articles mt-4'>
        <h4 className='text-center mb-4'>Volcanic Voyage</h4>
        <div className='d-flex justify-content-between align-items-center'>
          <Button variant='outline-secondary' className='arrow-button'>
            <FaArrowLeft />
          </Button>
          <Row className='recommended-cards'>
            {[
              'Explore the Amazon',
              'Cultural Wonders',
              'Hike the Himalayas',
              'Explore the Nile',
            ].map((title, index) => (
              <Col
                key={index}
                className={`recommended-card mb-3 color-${index % 3}`}
              >
                <Card>
                  <Card.Body>{title}</Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Button variant='outline-secondary' className='arrow-button'>
            <FaArrowRight />
          </Button>
        </div>
      </div>

      <div className='recommended-articles mt-4'>
        <h4 className='text-center mb-4'>Ocean Oasis</h4>
        <div className='d-flex justify-content-between align-items-center'>
          <Button variant='outline-secondary' className='arrow-button'>
            <FaArrowLeft />
          </Button>
          <Row className='recommended-cards'>
            {[
              'Explore the Amazon',
              'Cultural Wonders',
              'Hike the Himalayas',
              'Explore the Nile',
            ].map((title, index) => (
              <Col
                key={index}
                className={`recommended-card mb-3 color-${index % 3}`}
              >
                <Card>
                  <Card.Body>{title}</Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Button variant='outline-secondary' className='arrow-button'>
            <FaArrowRight />
          </Button>
        </div>
      </div>

      <div className='text-center mt-5'>
        <h3>
          <Link
            to='/plan'
            style={{
              color: '#fff',
              background: 'black',
              padding: '20px',
              borderRadius: '10px'
            }}
          >
            Sample Planning Page
          </Link>
        </h3>
      </div>
    </>
  );
};

export default Packages;
