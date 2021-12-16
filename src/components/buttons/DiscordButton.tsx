import { useState } from 'react';
import { ReactComponent as Discord } from '../../images/discord-logo-white.svg';
import { setHover, cancelHover } from '../../utilities/stateChanges';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

function DiscordButton() {
  const [isHovered, setIsHovered] = useState(false);

  const raise:any = useSpring({
    to: { transform: `scale(${isHovered ? '1.1' : '1'})` },
    config: { mass: 1, tension: 580, friction: 100 }
  });

  return (
    <StyledDiv>
      <a href='https://discord.gg/PncxUFv85g' target='_blank'><StyledDiscord style={raise} onMouseEnter={() => setHover(setIsHovered)} onMouseLeave={() => cancelHover(setIsHovered)}/></a>
    </StyledDiv>
  )
}

const StyledDiscord = styled(animated(Discord))`
  width:38px;
  height:38px;
  @media(min-width:800px){
    width:34px;
    height:34px;
  }
  @media(min-width:1024px){
    width:36px;
    height:36px;
  }
  @media(min-width:1440px){
    width:38px;
    height:38px;
  }
  @media(min-width:1760px){
    width:40px;
    height:40px;
  }
  @media(min-width:2000px){
    width:46px;
    height:46px;
  }
  @media(min-width:2300px){
    width:60px;
    height:60px;
  }
  @media(min-width:3000px){
    width:85px;
    height:85px;
  }
`

const StyledDiv = styled.div`

`

export default DiscordButton
