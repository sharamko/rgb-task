import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  position: relative;
  margin: 86px 12.7% 0px 12.7%;
  @media (max-width: 1200px) {
    margin: 86px 6% 0px 6%;
  }
  @media (max-width: 992px) {
    margin: 0px 0px 0px 0px;
  }
`;
export const MainLeft = styled.div`
  width: 427px;
  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const MainIcon = styled.div`
  width: 119px;
  height: 32px;
  background-color: #4252d1;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  padding: 4px 0 0 13px;
  @media (max-width: 992px) {
    width: 89px;
    height: 24px;
    font-size: 12px;
    padding: 4px 0 0 8px;
    margin: 0 auto;
  }
`;
export const MainIconImg = styled.img`
  margin-right: 7px;
  transform: translateY(-1px);
`;

export const MainTitle = styled.h1`
  font-weight: 800;
  font-size: 77px;
  line-height: 94px;
  text-transform: uppercase;
  color: #ff3459;
  @media (max-width: 992px) {
    font-size: 52.7273px;
    line-height: 65px;
    text-align: center;
  }
`;
export const MainH2Container = styled.div`
  display: flex;
  margin-bottom: 20px;
  @media (max-width: 992px) {
    justify-content: center;
  }
`;

export const MainH2 = styled.div`
  min-width: 106px;
  height: 38px;
  margin-right: 12px;
  padding: 5px 11px;
  background-color: #ff3459;
  border-radius: 5px;
  transform: rotate(-3.5deg);
  @media (max-width: 992px) {
    min-width: 76px;
    height: 27px;
    padding: 4px 9px;
  }
`;
export const MainH2Text = styled.div`
  font-weight: 800;
  font-size: 23.6391px;
  line-height: 29px;
  text-transform: uppercase;
  color: #ffffff;
  transform: rotate(3.5deg);
  @media (max-width: 992px) {
    font-size: 16px;
    line-height: 20px;
  }
`;
export const MainH2Other = styled.div`
  font-weight: 600;
  font-size: 21.9494px;
  line-height: 26px;
  color: #ffffff;
  transform: translateY(5px);
  @media (max-width: 992px) {
    font-size: 15px;
    line-height: 18px;
  }
`;
export const MainText = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
  margin-bottom: 0px;
  @media (max-width: 992px) {
    font-size: 14px;
    line-height: 21px;
    margin-bottom: 0px;
    text-align: center;
  }
`;
export const MainTextEnd = styled.div`
  display: inline-block;
  width: 90px;
  height: 27px;
  margin: 0px 0px 52px 8px;
  padding: 0px 9px;
  font-weight: 700;
  font-size: 17.332px;
  line-height: 26px;
  color: #ffffff;
  background-color: #4252d1;
  border-radius: 3px;
  @media (max-width: 992px) {
    display: none;
  }
`;
export const MainTextEndMobile = styled.p`
  font-weight: 800;
  font-size: 14px;
  line-height: 21px;
  color: #4252d1;
  text-align: center;
  margin-bottom: 20px;
  @media (min-width: 992px) {
    display: none;
  }
`;
export const MainTextEndDesktop = styled.p`
  display: inline-block;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
  margin-bottom: 16px;
  @media (max-width: 992px) {
    display: none;
  }
`;
export const MainInfoWrapp = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 992px) {
    flex-direction: column-reverse;
    align-items: center;
    margin-bottom: 30px;
  }
`;
export const MainInfoContainer = styled.div`
  display: flex;
  margin-bottom: 16px;
  @media (max-width: 992px) {
    width: 224px;
  }
`;
export const MainInfoIcon1 = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 11px;
  @media (max-width: 992px) {
    width: 56px;
    height: 56px;
  }
`;
export const MainInfoIcon2 = styled.img`
  width: 38px;
  height: 38px;
  margin-right: 24px;
  @media (max-width: 992px) {
    width: 45px;
    height: 45px;
  }
`;
export const MainInfoRight = styled.div`
  display: flex;
  flex-direction: column;
`;
export const InfoRightTop2 = styled.div`
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  color: #ffffff;
`;
export const InfoRightTop1 = styled.div`
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  text-transform: uppercase;
  color: #ffffff;
`;
export const InfoRightBottom2 = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 19px;
  color: #ffffff;
  @media (max-width: 992px) {
    display: none;
  }
`;
export const InfoRightBottom1 = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 19px;
  color: #ffffff;
`;
export const InfoRightBottMobile = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 19px;
  color: #ffffff;
  @media (min-width: 992px) {
    display: none;
  }
`;
