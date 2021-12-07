import React from 'react'
import styled from 'styled-components'
import keyIcon from '../../images/07_keyicon_png.png'

function InfoBox1() {
  return (
    <StyledInfoBox>
      <Icon src={keyIcon} alt='crowd icon' />
      <Header>Mint your ticket</Header>
      <Description>Unlock your DeLorean Protocol membership with a DL Key NFT.</Description>
    </StyledInfoBox>
  )
}

const Icon = styled.img`
    width:50px;
  @media(min-width:425px){
    width:65px;
  }
  @media(min-width:600px){
    width:50px;
  }
  @media(min-width:700px){
    width:70px;
  }
  @media(min-width:1440px){

  }
  @media(min-width:2000px){

  }
`

const Header = styled.h3`
  font-size:1.5rem;
  margin:10px 10px;
  padding:0;
  text-align:center;
  @media(min-width:425px){
    font-size:1.8rem;
  }
  @media(min-width:600px){
    font-size:1.4rem;
    width:75%
  }
  @media(min-width:700px){
    
  }
  @media(min-width:1440px){

  }
  @media(min-width:2000px){

  }
`
const Description = styled.p`
  margin:0;
  padding:0;
  width:80%;
  font-size:1rem;
  font-weight:500;
  text-align:center;
  @media(min-width:425px){
    font-size:1.2rem;
  }
  @media(min-width:600px){
    font-size:.9rem;
  }
  @media(min-width:700px){
    
  }
  @media(min-width:1440px){

  }
  @media(min-width:2000px){

  }
`

const StyledInfoBox = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  border-radius:10px;
  padding:30px 0;
  /* width:21%; */
  border:1px solid #c2c2c2;
  background-color:#0f0f0f;
  box-shadow: 0px 0px 10px 1px #c2c2c2dc;
  @media(min-width:425px){
   
  }
  @media(min-width:600px){
    width:32%
  }
  @media(min-width:1440px){
    width:26%
  }
  @media(min-width:2000px){
    width:23%
  }
`

export default InfoBox1
