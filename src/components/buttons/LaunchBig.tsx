import React, { useState } from 'react'
import styled from 'styled-components'
import { setHover, cancelHover } from '../../utilities/stateChanges';
import { useSpring, animated } from 'react-spring';

function LaunchBig() {
  const [isHovered, setIsHovered] = useState(false);

  const raise:any = useSpring({
    to: { transform: `scale(${isHovered ? '1.05' : '1'})` },
    config: { mass: 1, tension: 580, friction: 100 }
  });

  return (
    <a href="https://delorean.money/" target="_blank"><Launch style={raise} onMouseEnter={() => setHover(setIsHovered)} onMouseLeave={() => cancelHover(setIsHovered)}>LAUNCH APP</Launch></a>
  )
}

const Launch = styled(animated.button)`

  border:2px solid #b7002f;
  border-radius:50px;
  background-color:#b7002f;
  color:#c2c2c2;
  font-family: 'Bai Jamjuree', sans-serif;
  font-weight: 700;
  padding:10px 40px;
  font-size:1.2rem;
  letter-spacing:1.6px;
  margin-top:40px;
  margin-bottom:20px;

  @media(min-width:320px){
    font-size:1.4rem;
    letter-spacing:1.8px;
  }
  @media(min-width:768px){
    align-self:flex-start;
  }
  @media(min-width:1440px){
    font-size:1.8rem;
    padding: 20px 65px;
    letter-spacing:2px;
  }
  @media(min-width:1760px){
    font-size:2rem;
    padding: 24px 70px;
  }
  @media(min-width:2300px){
    font-size:2.4rem;
    padding: 28px 80px;
  }
`

export default LaunchBig
