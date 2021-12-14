import React, {useState} from 'react'
import styled from 'styled-components'
import { setHover, cancelHover } from '../../utilities/stateChanges';
import { useSpring, animated } from 'react-spring';

function LitePaper() {
  const [isHovered, setIsHovered] = useState(false);

  const raise:any = useSpring({
    to: { transform: `scale(${isHovered ? '1.05' : '1'})` },
    config: { mass: 1, tension: 580, friction: 100 }
  });

  return (
    <div>
       <a href='https://deloreanprotocol.medium.com/delorean-protocol-litepaper-e6f17b6854ca' target='_blank'><Launch style={raise} onMouseEnter={() => setHover(setIsHovered)} onMouseLeave={() => cancelHover(setIsHovered)}>Learn More</Launch></a>
    </div>
  )
}

const Launch = styled(animated.button)`
  font-family: 'Bai Jamjuree', sans-serif;
  font-weight: 600;
  padding: 8px 48px;
  border:2px solid #b7002f;
  border-radius:10px;
  background-color:#0f0f0f;
  color:#c2c2c2;
  font-size:1.5rem;
  margin-left:30px;
  margin-top:20px;
  @media(min-width:2000px){
    padding:10px 50px;
    font-size:1.7rem;
  }
  @media(min-width:2300px){
    padding:12px 55px;
    font-size:1.9rem;
  }
`

export default LitePaper
