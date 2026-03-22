// Reference https://codesandbox.io/s/v8vnw3nm67?file=/src/clockStyles.ts

import { keyframes } from "styled-components";
import styled from "styled-components";

const date: Date = new Date();

const secondsAnimation = keyframes`
  from {
    transform: rotateZ(${-90 + 6 * date.getSeconds()}deg)
  }
  to {
    transform: rotateZ(${-90 + 6 * date.getSeconds() + 360}deg)    
  }
`;
const minutesAnimation = keyframes`
  from {
    transform: rotateZ(${
      -90 + 6 * date.getMinutes() + (6 * date.getSeconds()) / 60
    }deg);
  }
  to {
    transform: rotateZ(${
      -90 + 6 * date.getMinutes() + (6 * date.getMinutes()) / 60 + 360
    }deg);
  }
`;
const hoursAnimation = keyframes`
  from {
    transform: rotateZ(${
      -90 + 30 * date.getHours() + (6 * date.getMinutes()) / 12
    }deg);
  }
  to {
    transform: rotateZ(${
      -90 + 30 * date.getHours() + (6 * date.getMinutes()) / 12 + 360
    }deg);
  }
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const OuterClock = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  background: white;
  border-radius: 500%;
`;
const SecondHand = styled.div`
  position: absolute;
  top: 197.5px;
  left: 50%;
  background: red;
  width: 175px;
  height: 5px;
  transform-origin: center left;
  z-index: 3;
  animation: ${secondsAnimation} 60s linear infinite;
`;
const MinuteHand = styled.div`
  position: absolute;
  top: 197.5px;
  left: 50%;
  background: #212529;
  width: 100px;
  height: 4px;
  transform-origin: center left;
  z-index: 2;
  animation: ${minutesAnimation} 3600s linear infinite;
`;
// minutes happen every 3600 seconds for animation
// make a function to convert minuites to seconds
// make a function to convert hours to seconds
const HourHand = styled.div`
  position: absolute;
  top: 197.5px;
  left: 50%;
  background: #212529;
  width: 60px;
  height: 4px;
  transform-origin: center left;
  z-index: 1;
  animation: ${hoursAnimation} 43200s linear infinite;
`;

const HourShade = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  top: 0;
  left: 0;
  border-radius: 50%;
  overflow: hidden;
  animation: ${hoursAnimation} 43200s linear infinite;
  &:before {
    content: "";
    position: absolute;
    background: linear-gradient(
      -45deg,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0) 50%
    );
    top: 2px;
    left: 50%;
    width: 50%;
    height: 50%;
  }
`;

//43200
export { Backdrop, OuterClock, SecondHand, MinuteHand, HourHand, HourShade };
