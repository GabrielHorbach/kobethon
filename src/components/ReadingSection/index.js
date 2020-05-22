import React from 'react';

import BookAnimation from '../../assets/animations/book_animation.gif';

import Container from './styles';

function ReadingSection() {
  return (
    <Container>
      <div>
        <p>Meu outro hobbie favorito é <strong>ler</strong>.</p><br />
        <p>Amo livros de fantasia, com destaque aqui para Harry Potter e Percy Jackson que eu nunca canso de reler.</p>
      </div>
      <img src={BookAnimation} alt="Book pages gif" />
    </Container>
  );
}

export default ReadingSection;
