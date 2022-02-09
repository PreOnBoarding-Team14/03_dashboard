import Modal from './Modal';
import NavStyle from '../assets/styles/NavStyle';
import { LOGO, WHITE_ICON } from 'assets/images';

const {
  NavBar,
  LeftLogo,
  MenuIconAndLogo,
  RightLogoBox,
  IconAndText,
  CompanyIcon,
  CompanyText,
  LogOutText,
} = NavStyle;

export default function Nav() {
  return (
    <NavBar>
      <MenuIconAndLogo>
        <Modal />
        <LeftLogo src={LOGO} alt="좌측 로고" />
      </MenuIconAndLogo>
      <RightLogoBox>
        <IconAndText>
          <CompanyIcon src={WHITE_ICON} alt="로고 이미지" />
          <CompanyText>A 가공업체</CompanyText>
        </IconAndText>
        <LogOutText>로그아웃</LogOutText>
      </RightLogoBox>
    </NavBar>
  );
}
