import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/img/estuflix.png';
import './Menu.css';
import Button from '../Button'

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img src={Logo} className="Logo" alt="EstudaFlix" />
      </Link>

      <Button as={Link} to="/cadastro/video" className="ButtonLink">
        Novo Vídeo
      </Button>
    </nav>
  );
}

export default Menu;