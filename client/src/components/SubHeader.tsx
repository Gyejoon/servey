import React from 'react';
import styled from 'styled-components';

interface SubHeaderProps {}

const SubHeaderBlock = styled.div``;

const SubHeader: React.SFC<SubHeaderProps> = () => {
  return <SubHeaderBlock>SubHeader 입니다.</SubHeaderBlock>;
};

export default SubHeader;
