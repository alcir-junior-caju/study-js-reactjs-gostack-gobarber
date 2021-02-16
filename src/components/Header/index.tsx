import React from 'react';
import { FiPower, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { useAuth } from '@hooks/auth';

import logo from '@assets/logo.svg';

import { Container, HeaderContent, Profile } from './styles';

const Header: React.FC = () => {
  const {
    signOut,
    user: { name, avatarUrl }
  } = useAuth();

  return (
    <Container>
      <HeaderContent>
        <img src={logo} alt="GoBarber" />
        <Profile>
          {avatarUrl ? (
            <img src={avatarUrl} alt={name} />
          ) : (
            <FiUser size={30} />
          )}
          <div>
            <span>Bem-vindo,</span>
            <Link to="/profile">
              <strong>{name}</strong>
            </Link>
          </div>
        </Profile>

        <button type="button" onClick={signOut}>
          <FiPower size={20} />
        </button>
      </HeaderContent>
    </Container>
  );
};

export default Header;
