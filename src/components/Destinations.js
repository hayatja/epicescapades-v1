import React from 'react';
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
import '../styles/Destinations.css';

const Destinations = () => {
  return (
    <Container>
      <div className='search-bar mt-5'>
        <InputGroup>
          <Form.Control
            type='text'
            placeholder='Start typing here ...'
            aria-label='Search'
          />
          <InputGroup.Text>
              <FaSearch />
          </InputGroup.Text>
        </InputGroup>
      </div>

      <div className='articles mt-4'>
        <Card className='article-card mb-3'>
          <Card.Body>
            <Card.Title>Into the Wild: Forest Expeditions</Card.Title>
            <Card.Subtitle className='mb-2 text-muted'>
              Author: Emily Green of EpicEscapades
            </Card.Subtitle>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='article-card mb-3'>
          <Card.Body>
            <Card.Title>
              Green Escapes: Unleashing Your Inner Explorer in the Forests
            </Card.Title>
            <Card.Subtitle className='mb-2 text-muted'>
              Author: Michael Wood of EpicEscapades
            </Card.Subtitle>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='article-card mb-3'>
          <Card.Body>
            <Card.Title>
              Mysteries of the Forest: A Journey Through Nature’s Secrets
            </Card.Title>
            <Card.Subtitle className='mb-2 text-muted'>
              Author: John Pine of EpicEscapades
            </Card.Subtitle>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div className='recommended-articles mt-4'>
        <h4 className='text-center mb-4'>Articles recommended for you!</h4>
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
    </Container>
  );
};

export default Destinations;
