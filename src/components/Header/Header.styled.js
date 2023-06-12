import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  height: 120px;
  @media (max-width: 992px) {
    height: 96px;
  }
`;
export const LogoImg = styled.img`
  margin: 34px auto auto 12.7%;
  @media (max-width: 1200px) {
    margin: 34px auto auto 6%;
  }
  @media (max-width: 992px) {
    margin: 28px auto auto 18px;
  }
  @media (max-width: 768px) {
    width: 101px;
    height: 32px;
  }
`;
export const HeaderInfoContainer = styled.div`
  display: flex;
  margin: 42px 12.7% auto auto;
  @media (max-width: 1200px) {
    margin: 42px 6% auto auto;
  }
  @media (max-width: 992px) {
    margin: 32px 0px auto auto;
  }
`;
export const HeaderInfo = styled.div`
  width: 141px;
  height: 40px;
  padding: 9px 0 0 24px;
  border-radius: 10px;
  background-color: #302e5a;
  color: white;
  margin-right: 18px;
  font-size: 14px;
  font-weight: 600;
  z-index: 2;
  @media (max-width: 768px) {
    width: 88px;
    height: 24px;
    font-size: 11px;
    padding: 4px 0 0 2px;
    margin-right: 6px;
    border-radius: 6px;
    text-align: center;
  }
`;
export const InfoImg = styled.img`
  margin-right: 7px;
  transform: translateY(-2px);
  @media (max-width: 768px) {
    margin-right: 4px;
    transform: translateY(-1px);
  }
`;
