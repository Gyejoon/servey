import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from '~components/Header';
import SubHeader from '~components/SubHeader';
import useStores from '~helpers/useStores';
import { useObserver } from 'mobx-react';
import { useHistory } from 'react-router';

interface HomeProps {}

const HomeBlock = styled.div``;

const Home: React.SFC<HomeProps> = () => {
  const history = useHistory();
  const { authStore } = useStores();
  useObserver(() => {
    authStore.user;
  });
  const { logout, currentUser, checkAuth, user } = authStore;

  useEffect(() => {
    const getCurrentUser = async () => {
      const user = currentUser();

      if (!user) {
        await checkAuth();
      }
    };

    getCurrentUser();
  }, []);

  const logoutHandle = () => {
    history.push('/login');
    logout();
  };

  return (
    <HomeBlock>
      <Header name={user.name} logout={logoutHandle} />
      <SubHeader />
    </HomeBlock>
  );
};

export default Home;
