import React from 'react';
import Logo from '../../assets/img/LogoMain.png';
import './Menu.css'
import ButtonLink from './ButtonLink';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img src={Logo} className="Logo" alt="EstudaFlix" />
      </a>

      <ButtonLink href="/" className="ButtonLink">
          Novo Vídeo
      </ButtonLink>
    </nav>
  );
}

export default Menu;