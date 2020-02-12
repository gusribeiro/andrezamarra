import React from 'react';
import 'assets/header.scss';

const Header = () => {
  return (
    <header className="site-header">
      <nav className="nav">
        <ul>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#obras">Obras</a></li>
          <li><a href="#exposicoes">Exposições</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
