import React from 'react';

import { Container } from './styles';

import pokemonTypesColor from '../../helpers/pokemonTypesColors';

const Card = ({ pokemon }) => {
  return (
    <Container>
      <img src={pokemon.data.sprites.front_default} alt="front_default"/>

      <h1>{pokemon.data.name.toUpperCase()}</h1>

      <div className="types">
        {pokemon.data.types.map(type => (
          <p style={{backgroundColor: pokemonTypesColor[type.type.name]}}>{type.type.name}</p>
        ))}
      </div>

      <div className="info">
        <div>
          <p className="title">Weight</p>
          <p>{pokemon.data.weight}</p>
        </div>

        <div>
          <p className="title">Height</p>
          <p>{pokemon.data.height}</p>
        </div>

        <div>
          <p className="title">Ability</p>
          <p>{pokemon.data.abilities[0].ability.name}</p>
        </div>
      </div>

    </Container>
  )
}

export default Card;
