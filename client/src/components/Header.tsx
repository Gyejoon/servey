import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderBlock = styled.div`
  display: flex;
  align-items: center;
  height: 64px;
  background-color: #9c9c9c;
  box-shadow: 0 2px 8px #f0f1f2;
`;

const HeaderTitle = styled.span`
  flex: 1;
  padding-left: 16px;
  font-size: 1.4rem;
`;

const HeaderRight = styled.span`
  padding-right: 16px;
  font-size: 16px;
`;

interface HeaderProps {
  username?: string;
}

const Header: React.SFC<HeaderProps> = props => {
  const { username } = props;
  return (
    <HeaderBlock>
      <HeaderTitle>설문조사 관리자</HeaderTitle>
      {username && (
        <HeaderRight>
          {username}님 안녕하세요. <Link to="/logout"> 로그아웃</Link>
        </HeaderRight>
      )}
    </HeaderBlock>
  );
};

export default Header;
