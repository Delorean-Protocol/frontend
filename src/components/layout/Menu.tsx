import React from 'react'
import styled from 'styled-components'
import LaunchSmall from 'components/buttons/LaunchSmall'
import TwitterButton from 'components/buttons/TwitterButton'
import DiscordButton from 'components/buttons/DiscordButton'
import { useSpring, animated, config } from 'react-spring';
import LitePaper from './LitePaper'

interface Props{
  open:boolean,
}



function Menu(props:Props) {
  const {open} = props

  return (
    <StyledMenu open={open}>
      <a><LaunchSmall /></a>
      <a><LitePaper /></a>
      <Socials>
        <a><DiscordButton /></a>
        <a><TwitterButton /></a>
      </Socials>
    </StyledMenu>
  )
}

const Socials = styled.div`
  margin-top:50px;
  display:flex;
  justify-content:center;
  margin-left:30px;

`

const StyledMenu:any = styled(animated.nav)<Props>`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  background: #171717;
  height: 100vh;
  text-align: left;
  padding: 1rem;
  position: fixed;
  border-left:2px solid #0f0f0f;
  box-shadow:-5px 0px 10px 2px rgba(0,0,0,.7);
  
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  z-index:1;

  
  @media (max-width: 450px) {
    width: 96%;
  }
`
    
  
export default Menu
