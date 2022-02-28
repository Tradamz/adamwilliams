import React from 'react';

import Video from '../../videos/video.mp4';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
} from './HeroElements';

function HeroSection() {
  return (
    <>
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </HeroBg>
        <HeroContent>
            <HeroH1>&lt;coder alert&gt;</HeroH1>
            <HeroP>
                Hi, my name is Adam Williams and welcome to my Website!
            </HeroP>
        </HeroContent>
    </HeroContainer>
    </>
  );
}

export default HeroSection;
