import React from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import '../styles/BookingForm.css';

const BookingForm = () => {
  return (
    <Container className='mt-5 booking-container'>
      <h2 className='text-center mb-4'>Create Your Own Adventure Plan!</h2>
      <Row>
        <Col md={6}>
          <h3>Client Details</h3>
          <Form>
            <Form.Group controlId='formName'>
              <Form.Label>Your Name*</Form.Label>
              <Form.Control type='text' placeholder='Enter your name' />
            </Form.Group>
            <Form.Group controlId='formEmail' className='mt-3'>
              <Form.Label>Email Address*</Form.Label>
              <Form.Control type='email' placeholder='Enter your email' />
            </Form.Group>
            <Form.Group controlId='formPhone' className='mt-3'>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type='text' placeholder='Enter your phone number' />
            </Form.Group>
            <Form.Group controlId='formNotes' className='mt-3'>
              <Form.Label>Additional Notes:</Form.Label>
              <Form.Control as='textarea' rows={3} />
            </Form.Group>
            <Form.Group controlId='formConsent' className='mt-3'>
              <Form.Check
                type='checkbox'
                label='I consent that I am at least 18 years old or older, and all adventurers are over the age of 16 and/or accompanied by a guardian.'
              />
            </Form.Group>
          </Form>
        </Col>
        <Col md={6}>
          <h3>Booking Details</h3>
          <p>Package: City Lights - Discover Vibrant Urban Escapes</p>
          <p>Difficulty: Easy</p>
          <p>Location: Lorem ipsum dolor</p>
          <p>Duration: 3 hr 30 min</p>
          <Form.Group controlId='formAdventurers' className='mt-3'>
            <Form.Label>Select # Adventurers</Form.Label>
            <Form.Control as='select'>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId='formDate' className='mt-3'>
            <Form.Label>Pick a Date</Form.Label>
            <Form.Control type='date' />
          </Form.Group>
          <Form.Group controlId='formTime' className='mt-3'>
            <Form.Label>Select Time</Form.Label>
            <InputGroup>
              <Form.Control type='number' placeholder='02' />
              <InputGroup.Text>:</InputGroup.Text>
              <Form.Control type='number' placeholder='30' />
              <InputGroup.Text>PM</InputGroup.Text>
            </InputGroup>
          </Form.Group>
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col md={6}>
          <h3>Payment Details</h3>
          <p>Subtotal: CA$199</p>
          <p>Tax: CA$25.87</p>
          <hr />
          <p>Total: CA$224.87</p>
        </Col>
        <Col md={6} className='d-flex justify-content-end align-items-center'>
          <Button variant='secondary' className='me-2'>
            Add to Cart
          </Button>
          <Button variant='success'>Book Now</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default BookingForm;
