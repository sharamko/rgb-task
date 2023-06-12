import styled from 'styled-components';

export const LeftEllipse = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const RightEllipse = styled.img`
  position: absolute;
  top: 0px;
  right: 0px;
  max-height: 100vh;
  @media (max-width: 992px) {
    display: none;
  }
`;
export const MobileEllipse = styled.img`
  position: fixed;
  display: none;
  bottom: 0px;
  @media (max-width: 360px) {
    display: block;
  }
`;
export const FeText = styled.img`
  position: fixed;
  bottom: 0px;
  right: 0px;
  max-width: 100%;
  padding-left: 8px;
  @media (max-width: 992px) {
    display: none;
  }
`;

export const HtmlImgContainer = styled.div`
  position: absolute;
  top: 242px;
  right: 36px;
  &:after {
    position: absolute;
    top: 8px;
    content: url(${({ htmlEllipse }) => htmlEllipse});
    width: 8px;
    height: 8px;
  }
  @media (max-width: 992px) {
    display: none;
  }
`;
export const CssImgContainer = styled.div`
  position: absolute;
  top: 364px;
  right: 133px;
  &:after {
    position: absolute;
    top: -16px;
    right: 4px;
    content: url(${({ cssEllipse }) => cssEllipse});
    width: 6px;
    height: 6px;
  }
  @media (max-width: 992px) {
    display: none;
  }
`;

export const JsImgContainer = styled.div`
  position: absolute;
  top: 404px;
  right: 36px;
  &:after {
    position: absolute;
    top: 10px;
    right: -15px;
    content: url(${({ jsEllipse }) => jsEllipse});
    width: 8px;
    height: 8px;
  }
  @media (max-width: 992px) {
    display: none;
  }
`;

export const STImgContainer = styled.div`
  position: absolute;
  top: 498px;
  right: 153px;
  &:after {
    position: absolute;
    top: -25px;
    right: 0px;
    content: url(${({ stEllipse }) => stEllipse});
    width: 6px;
    height: 6px;
  }
  @media (max-width: 992px) {
    display: none;
  }
`;
export const VSCImgContainer = styled.div`
  position: absolute;
  top: 568px;
  right: 66px;
  &:after {
    position: absolute;
    top: 43px;
    right: -10px;
    content: url(${({ vscEllipse }) => vscEllipse});
    width: 6px;
    height: 6px;
  }
  @media (max-width: 992px) {
    display: none;
  }
`;

export const HtmlImg = styled.img`
  width: 98px;
  height: 98px;
`;
export const CssImg = styled.img`
  width: 70px;
  height: 95px;
`;

export const JsImg = styled.img`
  width: 72px;
  height: 83px;
`;

export const STImg = styled.img`
  width: 64px;
  height: 64px;
`;
export const VSCImg = styled.img`
  width: 70px;
  height: 70px;
`;
