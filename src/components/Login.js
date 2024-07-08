import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import '../styles/Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <Container className='d-flex justify-content-center align-items-center min-vh-50 mt-5'>
        <div className='login-box text-center sample-profile-btn'>
          <Link to="/profile">Link to sample profile page</Link>
        </div>
      </Container>
      <Container className='d-flex justify-content-center align-items-center min-vh-50 mt-5'>
        <div className='login-box'>
          <h2 className='text-center mb-4'>Login</h2>
          <Form>
            <Form.Group controlId='formBasicEmail'>
              <Form.Control type='email' placeholder='email' className='mb-3' />
            </Form.Group>

            <Form.Group controlId='formBasicPassword'>
              <Form.Control
                type='password'
                placeholder='********'
                className='mb-3'
              />
            </Form.Group>

            <div className='d-flex justify-content-center'>
              <Button variant='primary' type='submit' className='login-button'>
                →
              </Button>
            </div>

            <div className='text-center mt-3'>
              <Link to='/register' className='register-link'>
                register now!
              </Link>
            </div>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default Login;
