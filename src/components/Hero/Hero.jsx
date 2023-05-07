import React from 'react'
import {motion} from "framer-motion"
import {MainContainer} from '../../globalStyles/Global.styles';
import {HeroButton,Links, HeroContent, HeroHeading, HeroImage, HeroSection, HeroText, ImageContainer, HeroWrapper, LeftContainer, RightContainer} from './Hero.style';
import HeroImg from '../../assets/imgs/hero.png';
const Hero = () => {
    const currentYear = new Date().getFullYear();
  return (
    <HeroSection>
        <MainContainer>
            <HeroWrapper>
            <LeftContainer>
                <HeroContent>
                    <HeroText>Trending Product in {currentYear}</HeroText>
                    <HeroHeading>Make Your Shopping Easier And Better</HeroHeading>
                    <HeroText>Lorem Cupidatat adipisicing officia eiusmod proident. Ut laboris adipisicing nulla qui veniam laboris laboris cupidatat qui. In mollit sit elit consectetur. Minim mollit commodo anim cillum irure dolore commodo.</HeroText>
                    <HeroButton as={motion.button} whileTap={{ scale: 1.2 }}>
                        <Links to="shop">SHOP NOW</Links>
                    </HeroButton>
                </HeroContent>
            </LeftContainer>
            <RightContainer>
               <ImageContainer>
                <HeroImage src={HeroImg} alt=""/>
               </ImageContainer> 
            </RightContainer>
            </HeroWrapper>
        </MainContainer>
    </HeroSection>
  )
}

export default Hero