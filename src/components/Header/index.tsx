import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
  active: 'list' | 'import';
}

const Header: React.FC<HeaderProps> = ({
  size = 'large',
  active,
}: HeaderProps) => {
  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <Link to="/" className={active === 'list' ? 'active' : ''}>
            Listagem
          </Link>
          <Link to="/import" className={active === 'import' ? 'active' : ''}>
            Importar
          </Link>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
