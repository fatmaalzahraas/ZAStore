import styled from "styled-components";
import { Button, H2, H3 } from "../../globalStyles/Global.styles";

export const TimerCountSection = styled.section`
  padding: 50px 0;
  background-color: ${props => props.theme.colors.primaryColor};
  height: 350px;
  overflow: hidden;
  margin-bottom: 1.3rem;
  @media (max-width: 576px) {
    height: 300px;
  }
`;
export const TimerCountWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const LeftContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 992px) {
    width: 50%;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
export const TimerTopContent = styled.div`
  @media (max-width: 991px) {
    text-align: center;
  }
`;
export const LimitedOffers = styled.span`
  color: #fff;
  font-size: 0.9rem;
  @media (max-width: 576px) {
    font-size: 0.7rem;
  }
`;
export const TimerHeading = styled(H3)`
  color: #fff;
  margin: 0.8rem 0;
  font-size: 1.2rem;
  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;
export const TimerBtn = styled(Button)`
  background-color: #fff;
  color: ${props => props.theme.colors.primaryColor};
  font-weight: 600;
`;
export const RightContainer = styled.div`
  display: none;
  @media (min-width: 992px) {
    display: block;
    width: 50%;
    text-align: center;
  }
`;
export const TimerCountImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
export const Clock = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  margin-bottom: 2.8rem;
  margin-top: 0.6rem;
`;
export const ClockData = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
`;
export const ClockCountWrapper = styled.div`
  text-align: center;
`;
export const ClockCount = styled(H2)`
  color: #fff;
  font-size: 1.3rem;
  font-weight: 500;
  margin-bottom: 0.8rem;
  width: 50px;
  height: 50px;
  background-color: #000;
  line-height: 50px;
  border-radius: 5px;
  box-shadow: -10px 5px 30px rgba(0, 0, 0, 0.5);
  @media (max-width: 576px) {
    font-size: 1.1rem;
    width: 40px;
    height: 40px;
    line-height: 40px;
  }
`;
export const ClockHeading = styled(H3)`
  color: #fff;
  font-size: 0.8rem;
  font-weight: 400;
  @media (max-width: 576px) {
    font-size: 0.6rem;
  }
`;
export const ClockDivider = styled.span`
  color: #fff;
`;
