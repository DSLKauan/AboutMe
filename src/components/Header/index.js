import React from 'react';
// React Router DOM
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// ICONS
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
// Componentes estilizados
import { Nav } from './styled';

export default function Header() {
  const botaoClicado = useSelector((state) => state.example.botaoClicado);

  return (
    <Nav>
      <Link to="/">
        <FaHome size={21} />
      </Link>

      <Link to="/login">
        <FaUserAlt size={17} />
      </Link>

      <Link to="/">
        <FaSignInAlt size={21} />
      </Link>
      {botaoClicado ? <span>Clicado</span> : <span>Não clicado</span>}
    </Nav>
  );
}
