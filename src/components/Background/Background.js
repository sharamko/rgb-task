import React from 'react';
import ellipse156 from '../../assets/Ellipse156.png';
import ellipse157 from '../../assets/Ellipse_157.png';
import htmlImg from '../../assets/1024px-HTML5_logo_and_wordmark.png';
import cssImg from '../../assets/1452px-CSS3_logo_and_wordmark.png';
import jsImg from '../../assets/javascript.png';
import sTImg from '../../assets/1505369583_sublime-text.png';
import vSCImg from '../../assets/Visual_Studio_Code_1.35_icon.png';
import htmlEllipse from '../../assets/Ellipse_html.png';
import cssEllipse from '../../assets/Ellipse_css.png';
import jsEllipse from '../../assets/Ellipse_js.png';
import stEllipse from '../../assets/Ellipse_st.png';
import vscEllipse from '../../assets/Ellipse_vsc.png';
import mobileEllipse from '../../assets/EllipseMobile.png';
import feDev from '../../assets/front-end developer.svg';
import {
  CssImgContainer,
  FeText,
  HtmlImg,
  HtmlImgContainer,
  JsImgContainer,
  LeftEllipse,
  MobileEllipse,
  RightEllipse,
  STImgContainer,
  VSCImgContainer,
} from './Background.styled';
import { CssImg } from './Background.styled';
import { JsImg } from './Background.styled';
import { STImg } from './Background.styled';
import { VSCImg } from './Background.styled';

function Background() {
  return (
    <div style={{ height: '0px' }} className="position-relative">
      <LeftEllipse src={ellipse156} alt="ellipse156" />
      <RightEllipse src={ellipse157} alt="ellipse157" />
      <MobileEllipse src={mobileEllipse} alt="MobileEllipse" />
      <FeText src={feDev} alt="feDev" />
      <HtmlImgContainer htmlellipse={htmlEllipse}>
        <HtmlImg src={htmlImg} />
      </HtmlImgContainer>
      <CssImgContainer cssellipse={cssEllipse}>
        <CssImg src={cssImg} />
      </CssImgContainer>
      <JsImgContainer jsellipse={jsEllipse}>
        <JsImg src={jsImg} />
      </JsImgContainer>
      <STImgContainer stellipse={stEllipse}>
        <STImg src={sTImg} />
      </STImgContainer>
      <VSCImgContainer vscellipse={vscEllipse}>
        <VSCImg src={vSCImg} />
      </VSCImgContainer>
    </div>
  );
}

export default Background;
