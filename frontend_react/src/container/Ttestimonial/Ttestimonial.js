import React from 'react';

import styled,{keyframes, css} from "styled-components";
import { AppWrapp, MotionWrap } from '../../wrapper';

import "./Ttestimonial.scss"

function Ttestimonial() {


  const row1 = [
    "https://www.logo.wine/a/logo/Instagram/Instagram-Wordmark-Logo.wine.svg",
    "https://www.providesupport.com/blog/wp-content/uploads/2012/12/Gmail-logo.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png",

  ];

  const row2 = [
    "https://blog.codepen.io/wp-content/uploads/2022/01/codepen-wordmark-display-inside-white@10x.png",
    "https://helloimjessa.files.wordpress.com/2021/06/bmc-button.png",
    "https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-png.png",

  ];




  return <BrandsContainer>
  <Wrapper>
  <div className="headdd">
    <h2 className="head-text">Connect <span> with</span> me through ⌄</h2>
    </div>
    <Marquee>
    <MarqueeGroup>
    {row1.map((el, index) => (
      <ImageGroup key={index}>
        <Image src={el} />
      </ImageGroup>
          ))
        }

      </MarqueeGroup>
      <MarqueeGroup>
    {row1.map((el, index) => (
      <ImageGroup key={index}>
        <Image src={el} />
      </ImageGroup>
          ))
        }

      </MarqueeGroup>

    </Marquee>

    <Marquee>

    <MarqueeGroup2>
    {row2.map((el, index) => (
      <ImageGroup key={index}>
        <Image src={el} />
      </ImageGroup>
          ))
        }

      </MarqueeGroup2>
      <MarqueeGroup2>
    {row2.map((el, index) => (
      <ImageGroup key={index}>
        <Image src={el} />
      </ImageGroup>
          ))
        }

      </MarqueeGroup2>

    </Marquee>

  </Wrapper>

  </BrandsContainer>
}




  const BrandsContainer = styled.div`
  width: 100%;
  color: #ffff;
  position: relative; 
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  


`;


const Marquee = styled.div`
  display: flex;
  width: 1100px;
  user-select: none;
  overflow: hidden;
  @media (max-width: 1200px) {
    flex-direction: column;
    width: 100%;
    
  }
  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl( 0 0% 0% / 1) 10%,
    hsl( 0 0% 0% / 1) 90%,
    hsl( 0 0% 0% / 0)
  );
 `;

const scrollx=keyframes`
from{
  left: translateX(0);
}
to{
  transform: translateX(-100%);
}
`;

const common = css`
flex-shrink: 0;
display: flex;
align-items: center;
justify-content: space-around;
white-space: nowrap;
width: 100%;
animation: ${scrollx} 10s linear infinite;
cursor: pointer;
`;


const MarqueeGroup = styled.div`
${common}
margin-top: 10px;
@media (max-width: 1200px) {
  animation: none; /* Disable animation for devices with max-width: 900px */
}
@media (max-width: 1200px) {
  flex-direction: column;
}
`;

const MarqueeGroup2 = styled.div`
${common}
animation-direction: reverse;
animation-delay: -3s;
margin-top: 30px;
@media (max-width: 1200px) {
  animation: none; /* Disable animation for devices with max-width: 900px */
  display: none;
}
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);

`;


const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 1);
`;





export default AppWrapp(
  MotionWrap(Ttestimonial, 'app__online platforms'),
  'online platforms',
  );




  