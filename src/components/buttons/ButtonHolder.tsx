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
  margin-top:-70px;
  width:88%;
  height:80px;
  gap:15px;
  //MIN WIDTH
  @media(min-width:1024px){
    height:90px;
    margin-top:-80px;
  }
  @media(min-width:1440px){
    height:100px;
    margin-top:-90px;
  }
  @media(min-width:1760px){
    margin-top:-95px;
  }
  @media(min-width:2000px){
    margin-top:-100px;
  }
  @media(min-width:3000px){
    height:120px;
    margin-top:-100px;
  }
  /* @media(min-width:2000px){
    height:130px;
    margin-top:-125px;
  } */

  //MAX WIDTH

  @media(max-width:800px){
    display:none;
  }
`

export default ButtonHolder
