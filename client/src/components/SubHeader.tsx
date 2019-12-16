import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

const SubHeaderBlock = styled.div`
  display: flex;
  height: 48px;
  background-color: #c9c9c9;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;

  Button {
    margin-left: auto;
    margin-right: 16px;
  }
`;

const PageName = styled.div`
  padding-left: 16px;
  font-size: 18px;
`;

interface SubHeaderProps {}

const SubHeader: React.SFC<SubHeaderProps> = () => {
  return (
    <SubHeaderBlock>
      <PageName>설문지 목록</PageName>
      <Button type="primary" icon="plus">
        설문지 추가
      </Button>
    </SubHeaderBlock>
  );
};

export default SubHeader;
