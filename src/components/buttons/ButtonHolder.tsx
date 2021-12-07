import DiscordButton from './DiscordButton';
import TwitterButton from './TwitterButton';
import LaunchSmall from './LaunchSmall';
import styled from 'styled-components';

function ButtonHolder() {
  return (
    <Buttons>
      <DiscordButton />
      <TwitterButton />
      <LaunchSmall />
    </Buttons>
  )
}

const Buttons = styled.div`
  display:flex;
  justify-content:flex-end;
  align-items:center;
  margin-top:-65px;
  width:88%;
  height:80px;
  //MIN WIDTH
  @media(min-width:320px){
    
  }
  @media(min-width:375px){

  }
  @media(min-width:425px){
    
  }
  @media(min-width:768px){

  }
  @media(min-width:1024px){

  }
  @media(min-width:1440px){

  }

  //MAX WIDTH

  @media(max-width:800px){
    display:none;
  }
`

export default ButtonHolder
