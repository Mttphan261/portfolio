import React from 'react';
import { Row, Container } from 'react-bootstrap';

function Contact() {
  return (
    <div>
        <h2 className='section-header'>Contact Me!</h2>
        <div className='socials-container'>
            <p className='socials'>mttphan261@gmail.com</p>
            <p className='socials'>LinkedIn</p>
            <p className='socials'>github</p>
        </div>
        <div className='footer'>
            <p>Made by Matt Phan © 2023</p>
        </div>
    </div>
  )
}

export default Contact