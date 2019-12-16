import React from 'react';
import styled from 'styled-components';
import Header from '~components/Header';
import SubHeader from '~components/SubHeader';

interface HomeProps {}

const HomeBlock = styled.div``;

const Home: React.SFC<HomeProps> = () => {
  return (
    <HomeBlock>
      <Header username="강준영" />
      <SubHeader />
    </HomeBlock>
  );
};

export default Home;
