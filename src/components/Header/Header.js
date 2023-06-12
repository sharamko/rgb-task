import React from 'react';
import {
  HeaderContainer,
  HeaderInfo,
  HeaderInfoContainer,
  InfoImg,
  LogoImg,
} from './Header.styled';
import Logo from '../../assets/logo.png';
import timeImg from '../../assets/gg_time.png';
import dateImg from '../../assets/calendar_today.png';

function Header() {
  return (
    <HeaderContainer>
      <LogoImg img src={Logo} alt="logo" />
      <HeaderInfoContainer>
        <HeaderInfo>
          <InfoImg src={dateImg} alt="dateImg" />
          28 декабря
        </HeaderInfo>
        <HeaderInfo>
          <InfoImg src={timeImg} alt="timeImg" />
          3,5 часа
        </HeaderInfo>
      </HeaderInfoContainer>
    </HeaderContainer>
  );
}

export default Header;
