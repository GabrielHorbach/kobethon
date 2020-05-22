import React from 'react';

import GuitarPlaying from '../../assets/animations/playing_guitar.gif';

import Container from './styles';

function GuitarPlayingSection() {
  return (
    <Container>
      <img src={GuitarPlaying} alt="Guitar playing gif" />

      <div>
        <h2>Hobbies</h2>
        <p>Bom, definitivamente <strong>música</strong> é o maior deles.</p>
        <p><br />
          Desde muito pequeno amo música e ao longo dos anos aprendi diversos instrumentos e canto,
          sendo violão e guitarra meus favoritos.
        </p><br />
        <p>Sempre tive mais facilidade com instrumentos de corda, mas isso não impediu que eu arranhasse algo no piano, saxofone e bateria também.</p>
      </div>
    </Container>
  );
}

export default GuitarPlayingSection;
