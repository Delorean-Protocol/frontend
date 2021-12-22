import React, { useState } from 'react'
import styled from 'styled-components'
import { setHover, cancelHover } from '../../utilities/stateChanges';
import { useSpring, animated } from 'react-spring';

function LaunchSmall() {
  const [isHovered, setIsHovered] = useState(false);

  const raise:any = useSpring({
    to: { transform: `scale(${isHovered ? '1.05' : '1'})` },
    config: { mass: 1, tension: 580, friction: 100 }
  });

  return (
    <a href="https://delorean.money/" target="_blank"><Launch style={raise} onMouseEnter={() => setHover(setIsHovered)} onMouseLeave={() => cancelHover(setIsHovered)}>Launch app</Launch></a>
  )
}

const Launch = styled(animated.button)`
  font-family: 'Bai Jamjuree', sans-serif;
  font-weight: 600;
  padding: 8px 45px;
  border:2px solid #b7002f;
  border-radius:10px;
  background-color:#0f0f0f;
  color:#c2c2c2;
  font-size:1.5rem;
  margin-left:30px;
  @media(min-width:800px){
    padding:6px 40px;
    font-size:1.4rem;
  }
  @media(min-width:1440px){
    padding:8px 45px;
    font-size:1.6rem;
  }
  @media(min-width:1760px){
    padding:9px 47px;
    font-size:1.8rem;
    margin-left:40px;
  }
  @media(min-width:2000px){
    padding:10px 50px;
    font-size:2rem;
    margin-left:50px;
  }
  @media(min-width:2300px){
    padding:14px 60px;
    font-size:3rem;
    margin-left:60px;
  }
  @media(min-width:2600px){
    padding:16px 65px;
    font-size:3.2rem;
    margin-left:70px;
  }
  @media(min-width:3000px){
    padding:20px 70px;
    font-size:3.3rem;
    margin-left:80px;
  }
`

export default LaunchSmall
