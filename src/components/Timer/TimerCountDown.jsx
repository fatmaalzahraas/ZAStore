import React, { useEffect, useState } from "react";
import { BtnLink, MainContainer } from "../../globalStyles/Global.styles";
import {
  Clock,
  ClockCount,
  ClockCountWrapper,
  ClockData,
  ClockDivider,
  ClockHeading,
  LeftContainer,
  LimitedOffers,
  RightContainer,
  TimerBtn,
  TimerCountImg,
  TimerCountSection,
  TimerCountWrapper,
  TimerHeading,
  TimerTopContent,
} from "./TimerCountDown.style";
import { motion } from "framer-motion";
import TimerImg from '../../assets/imgs/timer.png';
const TimerCountDown = () => {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  const countDown = () => {
    const destination = new Date("December 10, 2024").getTime();
    let interval = setInterval(() => {
      const dateNow = new Date().getTime();
      const dateDiff = destination - dateNow;
      const days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
      if (destination < 0) {
        clearInterval(interval);
      } else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    });
  };
  useEffect(() => {
    countDown();
  }, []);
  return (
    <TimerCountSection>
      <MainContainer>
        <TimerCountWrapper>
          <LeftContainer>
            <TimerTopContent>
              <LimitedOffers>Limited Offers</LimitedOffers>
              <TimerHeading>Smart Phones</TimerHeading>
            </TimerTopContent>
            <Clock>
              <ClockData>
                <ClockCountWrapper>
                  <ClockCount>{days}</ClockCount>
                  <ClockHeading>Days</ClockHeading>
                </ClockCountWrapper>
                <ClockDivider>:</ClockDivider>
              </ClockData>
              <ClockData>
                <ClockCountWrapper>
                  <ClockCount>{hours}</ClockCount>
                  <ClockHeading>Hours</ClockHeading>
                </ClockCountWrapper>
                <ClockDivider>:</ClockDivider>
              </ClockData>
              <ClockData>
                <ClockCountWrapper>
                  <ClockCount>{minutes}</ClockCount>
                  <ClockHeading>Minutes</ClockHeading>
                </ClockCountWrapper>
                <ClockDivider>:</ClockDivider>
              </ClockData>
              <ClockData>
                <ClockCountWrapper>
                  <ClockCount>{seconds}</ClockCount>
                  <ClockHeading>Seconds</ClockHeading>
                </ClockCountWrapper>
              </ClockData>
            </Clock>
            <TimerBtn as={motion.button} whileTap={{ scale: 1.2 }}>
              <BtnLink to="shop">Visit Store</BtnLink>
            </TimerBtn>
          </LeftContainer>
          <RightContainer>
            <TimerCountImg src={TimerImg} alt="" />
          </RightContainer>
        </TimerCountWrapper>
      </MainContainer>
    </TimerCountSection>
  );
};

export default TimerCountDown;
