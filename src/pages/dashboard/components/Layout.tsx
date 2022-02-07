import { refresh } from 'assets/img';
import React, { useState } from 'react';
import styled from 'styled-components';
import AllFilter from './AllFilter';
import FormFilter from './FormFilter';
import Header from './Header';
import NoResults from './NoResults';
import Production from './Production';
import Toggle from './Toggle';

const Container = styled.div`
  width: 100%auto;
  height: 100%;
`;

const Conternt = styled.div`
  padding: 40px 155px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.span`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Explanation = styled.span`
  font-size: 24px;
  margin-bottom: 32px;
`;

function Layout() {
  return (
    <Container>
      <Header />
      <Conternt>
        <Title>들어온 요청</Title>
        <Explanation>파트너님에게 딱 맞는 요청서를 찾아보세요.</Explanation>
        <AllFilter />
        <Production />
        <NoResults />
      </Conternt>
    </Container>
  );
}

export default Layout;
