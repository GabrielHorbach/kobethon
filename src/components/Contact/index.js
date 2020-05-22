import React from 'react';

import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';

import Container from './styles';

function Contact() {
  return (
    <Container>
      <h2>Me encontre aqui</h2>
      <div>
        <FaGithubSquare onClick={() => window.open('https://github.com/GabrielHorbach', 'blank')} />
        <FaLinkedin onClick={() => window.open('https://www.linkedin.com/in/gabrielhorbachmachado/', 'blank')} />
        <FaInstagramSquare onClick={() => window.open('https://www.instagram.com/gabrielhorbach_/', 'blank')} />
      </div>
    </Container>
  );
}

export default Contact;