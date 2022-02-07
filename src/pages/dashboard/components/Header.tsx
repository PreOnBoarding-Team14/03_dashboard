import { building, logo } from 'assets/img';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 25px 40px;
  background-color: #1565c0;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  align-items: center;
  color: white;
`;

const Logo = styled.img``;

const UserConatiner = styled.div`
  display: flex;
  align-items: center;
`;

const CompanyName = styled.span`
  padding-right: 32px;
  border-right: 2px solid white;
`;

const Img = styled.img`
  margin-right: 8px;
  height: 20px;
`;

const LogBox = styled.span`
  padding-left: 32px;
`;

function Header() {
  return (
    <Container>
      <Logo src={logo}></Logo>
      <UserConatiner>
        <CompanyName>
          <Img src={building} />A 가공 업체
        </CompanyName>
        <LogBox>로그아웃</LogBox>
      </UserConatiner>
    </Container>
  );
}

export default Header;
