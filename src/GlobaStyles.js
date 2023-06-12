import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
 body{
  font-family: 'Gilroy', sans-serif;
  background-color: #242731;
  --PhoneInputCountryFlag-height:20px;
  @media (max-width: 992px) {
    background-image: radial-gradient(at bottom right,#332F65, #242731 );
  }
 }
 .phone-input,.PhoneInputInput{
  width: 190px;
  height: 51px;
  margin-bottom: 14px;
  border-radius: 5px;
  background-color: #272d3d;
  border: none;
  padding: 13px 0px 13px 68px;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  color: #d7d7d7;
  &::placeholder {
    color: #d7d7d7;
  }
 }
 
 .PhoneInputCountry{
  position:absolute;
  top:21px;
  left:22px;
  transform:translateY(-6px);
 }
 .PhoneInput{
  position:relative;
 }
 
 
`;
