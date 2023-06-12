import styled from 'styled-components';

export const FormContainer = styled.div`
  display: ${({ mobile }) => (mobile === 'true' ? 'none' : 'flex')};
  flex-direction: column;
  align-items: center;
  width: 366px;
  height: 474px;
  margin: 0px 18px 0px auto;
  background-color: #303a53;
  border-radius: 10px;
  padding: 50px 60px;
  @media (max-width: 500px) {
    width: 328px;
    height: 423px;
    padding: 41px 21px;
  }
  @media (max-width: 992px) {
    display: ${({ mobile }) => (mobile === 'true' ? 'flex' : 'none')};
    border-radius: 9px;
    margin: 0px auto 36px auto;
  }
`;
export const FormTitle = styled.p`
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  text-align: center;
  color: #ffffff;
  @media (max-width: 500px) {
    font-size: 20px;
    line-height: 23px;
  }
`;
export const FormComponent = styled.form`
  display: grid;
  margin-bottom: 20px;
`;

export const FormInput = styled.input`
  width: 248px;
  height: 51px;
  margin-bottom: 14px;
  border-radius: 5px;
  background-color: #272d3d;
  border: none;
  padding: 13px 22px;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  color: #d7d7d7;
  &::placeholder {
    color: #d7d7d7;
  }
  @media (max-width: 500px) {
    width: 286px;
    height: 46px;
  }
`;
export const FormBtnSubmit = styled.button`
  width: 248px;
  height: 51px;
  border-radius: 5px;
  background-color: #ff3459;
  border: none;
  font-weight: 700;
  font-size: 15px;
  line-height: 24px;
  color: #ffffff;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 500px) {
    width: 222px;
    height: 45px;
    background-color: #0048ff;
    border-radius: 4.5px;
    justify-self: center;
  }
`;
export const FormAgree = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  @media (max-width: 500px) {
    font-size: 11px;
  }
`;
