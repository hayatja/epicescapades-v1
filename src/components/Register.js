import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    travelerType: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Container className='d-flex justify-content-center align-items-center min-vh-50 mt-5'>
      <div className='register-box'>
        <h2 className='text-center mb-4'>Register</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId='formFullName'>
            <Form.Control
              type='text'
              name='fullName'
              placeholder='Full Name'
              className='mb-3'
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId='formEmail'>
            <Form.Control
              type='email'
              name='email'
              placeholder='Email Address'
              className='mb-3'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId='formTravelerType'>
            <Form.Control
              as='select'
              name='travelerType'
              className='mb-3'
              value={formData.travelerType}
              onChange={handleChange}
              required
            >
              <option value=''>Traveler Type</option>
              <option value='business'>Business</option>
              <option value='leisure'>Leisure</option>
              <option value='adventure'>Adventure</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId='formPassword'>
            <Form.Control
              type='password'
              name='password'
              placeholder='Unique Password'
              className='mb-3'
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId='formConfirmPassword'>
            <Form.Control
              type='password'
              name='confirmPassword'
              placeholder='Re-enter Password'
              className='mb-3'
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId='formPhoneNumber'>
            <Form.Control
              type='tel'
              name='phoneNumber'
              placeholder='Phone Number'
              className='mb-3'
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <div className='d-flex justify-content-center'>
            <Button variant='primary' type='submit' className='register-button'>
              →
            </Button>
          </div>

          <div className='text-center mt-3'>
            <Link to='/login' className='login-link'>
              login instead
            </Link>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default Register;
