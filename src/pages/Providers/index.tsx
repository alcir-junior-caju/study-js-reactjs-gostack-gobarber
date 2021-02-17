import React, { useEffect, useState } from 'react';
import { FiCalendar, FiClock, FiUser } from 'react-icons/fi';

import api from '@services/api';

import Header from '@components/Header';

import { Container, Content, List } from './styles';

interface Provider {
  id: string;
  name: string;
  avatarUrl: string;
}

const Providers: React.FC = () => {
  const [providers, setProviders] = useState<Provider[]>([]);

  useEffect(() => {
    api.get('providers').then(response => setProviders(response.data));
  }, []);

  return (
    <Container>
      <Header />
      <h1>Barbeiros</h1>
      <Content>
        {providers.map(({ id, name, avatarUrl }) => (
          <List to={`/create-appointment/${id}`} key={id}>
            {avatarUrl ? (
              <img src={avatarUrl} alt={name} />
            ) : (
              <FiUser size={30} />
            )}

            <div>
              <strong>{name}</strong>
              <span>
                <FiCalendar />
                Segunda à sexta
              </span>
              <span>
                <FiClock />
                8h às 18h
              </span>
            </div>
          </List>
        ))}
      </Content>
    </Container>
  );
};

export default Providers;
