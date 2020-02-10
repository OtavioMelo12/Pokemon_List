import React from 'react';

import { Container } from './styles';

const Card = ({ pokemon }) => {
  return (
    <Container>
      <h1>{pokemon.name}</h1>
    </Container>
  )
}

export default Card;
