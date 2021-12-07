import { useState } from 'react';
import { ReactComponent as Twitter } from '../../images/twitter-logo.svg';
import styled from 'styled-components';
import { setHover, cancelHover } from '../../utilities/stateChanges';
import { useSpring, animated } from 'react-spring';

function TwitterButton() {
  const [isHovered, setIsHovered] = useState(false);

  const raise:any = useSpring({
    to: { transform: `scale(${isHovered ? '1.1' : '1'})` },
    config: { mass: 1, tension: 580, friction: 100 }
  });

  return (
    <StyledDiv>
        <a href='https://twitter.com/DeLorean_p' target='_blank'><StyledTwitter style={raise} onMouseEnter={() => setHover(setIsHovered)} onMouseLeave={() => cancelHover(setIsHovered)}/></a>
    </StyledDiv>
  )
}

const StyledTwitter = styled(animated(Twitter))`
  width:38px;
  height:38px;
  @media(min-width:2000px){
    width:42px;
    height:42px;
  }
  @media(min-width:2300px){
    width:46px;
    height:46px;
  }
`

const StyledDiv = styled.div`
  margin-left:25px;
  /* @media(min-width:800px){
    margin-left:20px;
  } */
`

export default TwitterButton
