import styled from 'styled-components';
import { Logo, Building, Divider } from 'assets/images';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  background-color: ${({ theme }) => theme.navColor};
  position: absolute;
  top: 0;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  align-items: center;
`;

const LogoBox = styled.img`
  position: absolute;
  left: 40px;
  height: 20px;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.ul`
  display: flex;
  position: absolute;
  right: 40px;
  height: 20px;
  justify-content: center;
  align-items: center;
`;

const Button = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  height: 20px;
  color: white;
  margin: 32px;
  cursor: pointer;
`;

const BuildingBox = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15px;
`;

export default function Navbar() {
  return (
    <Wrapper>
      <LogoBox alt="logo" src={Logo} />
      <ButtonContainer>
        <img alt="building" src={Building} />
        <Button>A 가공 업체</Button>
        <img alt="divider" src={Divider} />
        <Button>로그아웃</Button>
      </ButtonContainer>
    </Wrapper>
  );
}
