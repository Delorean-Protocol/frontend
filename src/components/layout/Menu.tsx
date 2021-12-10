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

  // const slideOpen = useSpring({
  //   transform: open ? `translateX(0)` : `translateX(-100%)`,
  //   config: { mass: 1, tension: 480, friction: 150 }
  // })

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

  /* a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #c2c2c2;
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: 700px) {
      font-size: 1.5rem;
      text-align: center;
    } */

    /* &:hover {
      color: ${({ theme }) => theme.primaryHover};
    } */
  /* } */
`
    
  
export default Menu
