import React from 'react';
import Logo from '../../assets/img/estuflix.png';
import './Menu.css';
import Button from '../Button'

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img src={Logo} className="Logo" alt="EstudaFlix" />
      </a>

      <Button href="/" as="a" className="ButtonLink">
          Novo Vídeo
      </Button>
    </nav>
  );
}

export default Menu;