import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from '~components/Header';
import SubHeader from '~components/SubHeader';
import useStores from '~helpers/useStores';
import { useObserver } from 'mobx-react';
import { useHistory } from 'react-router';
import ServeyList from '~pages/ServeyList';
import ServeyManage from '~pages/ServeyManage';
import PrivateRoute from '~components/PrivateRoute';

interface HomeProps {}

const HomeBlock = styled.div`
  width: 1250px;
  margin: auto;
  padding-top: 50px;
`;

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
    <>
      <Header name={user.name} logout={logoutHandle} />
      <SubHeader />
      <HomeBlock>
        <PrivateRoute path="/" component={ServeyList} redirectTo="/login" exact />
        <PrivateRoute
          path="/servey-create"
          component={ServeyManage}
          redirectTo="/login"
        />
      </HomeBlock>
    </>
  );
};

export default Home;
