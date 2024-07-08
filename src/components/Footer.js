import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className='custom-footer'>
      <Container>
        <Row>
          <Col>
            <img src='./full_logo.png' alt='Logo' />
            <p>FIND YOUR PERFECT ADVENTURE</p>
            <p>© Copyright 2024</p>
          </Col>
          <Col>
            <p>1234 Street St, Ottawa, Ontario, Canada</p>
            <br />
            <p>+1 (999) 999-9999</p>
            <p>adventure@epicescapades.ca</p>
          </Col>
          <Col className='text-end'>
            <p>Contact Us</p>
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
            <p>FAQ</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
