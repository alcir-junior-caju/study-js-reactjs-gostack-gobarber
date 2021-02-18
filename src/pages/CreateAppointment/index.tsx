import React, { useCallback, useEffect, useState } from 'react';
import { FiUser } from 'react-icons/fi';
import { useRouteMatch } from 'react-router-dom';

import api from '@services/api';

import Header from '@components/Header';

import {
  Container,
  Content,
  Calendar,
  Schedule,
  ProviderList,
  List
} from './styles';

interface Provider {
  id: string;
  name: string;
  avatarUrl: string;
}

interface RepositoryParams {
  providerId: string;
}

const CreateAppointment: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  const [providers, setProviders] = useState<Provider[]>([]);
  const [selectedProvider, setSelectedProvider] = useState(params.providerId);

  useEffect(() => {
    api.get('providers').then(response => setProviders(response.data));
  }, []);

  const handleSelectProvider = useCallback((providerId: string) => {
    setSelectedProvider(providerId);
  }, []);

  return (
    <Container>
      <Header />

      <ProviderList>
        {providers.map(({ id, name, avatarUrl }) => {
          const checkProvider = selectedProvider === id;

          return (
            <List
              to={`/create-appointment/${id}`}
              key={id}
              selectedprovider={Number(!!checkProvider)}
              onClick={() => handleSelectProvider(id)}
            >
              {avatarUrl ? (
                <img src={avatarUrl} alt={name} />
              ) : (
                <FiUser size={30} />
              )}

              <strong>{name}</strong>
            </List>
          );
        })}
      </ProviderList>

      <Content>
        <Schedule>0</Schedule>
        <Calendar>0</Calendar>
      </Content>
    </Container>
  );
};

export default CreateAppointment;
