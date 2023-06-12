import React from 'react';
import {
  InfoRightBottMobile,
  InfoRightBottom1,
  InfoRightBottom2,
  InfoRightTop1,
  InfoRightTop2,
  MainContainer,
  MainH2,
  MainH2Container,
  MainH2Other,
  MainH2Text,
  MainIcon,
  MainIconImg,
  MainInfoContainer,
  MainInfoIcon1,
  MainInfoIcon2,
  MainInfoRight,
  MainInfoWrapp,
  MainLeft,
  MainText,
  MainTextEnd,
  MainTextEndDesktop,
  MainTextEndMobile,
  MainTitle,
} from './MainContent.styled';
import mainIconImg from '../../assets/gg_time (1).png';
import mainInfoImg1 from '../../assets/Group3880.png';
import mainInfoImg2 from '../../assets/Group4018.png';
import Form from '../Form/Form';

function MainContent() {
  return (
    <MainContainer>
      <MainLeft>
        <MainIcon>
          <MainIconImg src={mainIconImg} alt="MainIconImg" />
          Вебинар
        </MainIcon>
        <MainTitle>front-end</MainTitle>
        <MainH2Container>
          <MainH2>
            <MainH2Text>с нуля</MainH2Text>
          </MainH2>
          <MainH2Other>легкий старт в IT профессии</MainH2Other>
        </MainH2Container>
        <MainText>
          Узнайте какими
          <b> навыками должен обладать фронтенд разработчик в 2022 году </b>и
          как начать карьеру в востребованной профессии
          <br />
        </MainText>
        <MainTextEndDesktop>с зарплатой</MainTextEndDesktop>
        <MainTextEndMobile>с зарплатой от 1000$</MainTextEndMobile>
        <MainTextEnd>от 1000$</MainTextEnd>
        <Form mobile="true" />
        <MainInfoWrapp>
          <MainInfoContainer>
            <MainInfoIcon1 src={mainInfoImg1} alt="infoIcon1" />
            <MainInfoRight>
              <InfoRightTop1>
                Кирилл <span style={{ color: '#4252D1' }}>КАСАТОНОВ</span>
              </InfoRightTop1>
              <InfoRightBottom1>
                6 лет коммерческого опыта с такими компаниями как
                <br /> Mercedes-Benz и другими крупными корпорациями
              </InfoRightBottom1>
            </MainInfoRight>
          </MainInfoContainer>
          <MainInfoContainer>
            <MainInfoIcon2 src={mainInfoImg2} alt="infoIcon2" />
            <MainInfoRight>
              <InfoRightTop2>Бонус за регистрацию</InfoRightTop2>
              <InfoRightBottom2>
                PDF-файл "5 преимуществ
                <br /> профессии фронтенд разработчика"
              </InfoRightBottom2>
              <InfoRightBottMobile>
                PDF-файл "5 преимуществ
                <br /> профессии веб-дизайнера"
              </InfoRightBottMobile>
            </MainInfoRight>
          </MainInfoContainer>
        </MainInfoWrapp>
      </MainLeft>
      <Form mobile="false" />
    </MainContainer>
  );
}

export default MainContent;
