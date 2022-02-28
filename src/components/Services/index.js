import React from 'react';
import Icon1 from '../../images/image-2.png';
import Icon2 from '../../images/image-3.png';
import Icon3 from '../../images/image-4.png';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  SubtitleH1,
  TextWrapper
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='projects'>
      <ServicesH1>Portfolio</ServicesH1>
      <TextWrapper>
        <SubtitleH1>Welcome to my portfolio, Please click to be redirected to the github respository for the specified language.</SubtitleH1>
      </TextWrapper>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Python</ServicesH2>
          <ServicesP>
            I have had projects in Python ranging from simple algorithms to complex problem solvers.
          </ServicesP>
        </ServicesCard>
        <ServicesCard as="a" href="https://github.com/Tradamz/adamwilliams">
          <ServicesIcon src={Icon2} />
          <ServicesH2>Web Development</ServicesH2>
          <ServicesP>
            This website your currently viewing was personally designed with the use of react native, javascript and Html.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Matlab</ServicesH2>
          <ServicesP>
            MATLAB has become a powerful tool for expressing and simulating electrical engineering concepts.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
