import React from 'react';

import { Container } from './styles';

import logo from '../../assets/pokeapi_256.png'

const Navbar = () => {
  return (
    <Container>
      <img src={logo} alt="logo"/>
    </Container>
  )
}

export default Navbar;
