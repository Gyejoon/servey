import React from 'react';
import styled from 'styled-components';
import { Icon, Tooltip } from 'antd';

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
  span {
  }
`;

interface HeaderProps {
  name?: string;
  logout: () => void;
}

const Header: React.SFC<HeaderProps> = props => {
  const { name, logout } = props;
  return (
    <HeaderBlock>
      <HeaderTitle>설문조사 관리</HeaderTitle>
      {name && (
        <HeaderRight>
          {name}님 안녕하세요.
          <Tooltip title="로그아웃" placement="topLeft">
            <Icon type="logout" onClick={logout} />
          </Tooltip>
        </HeaderRight>
      )}
    </HeaderBlock>
  );
};

export default Header;
