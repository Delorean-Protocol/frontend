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
  @media(min-width:1760px){
    width:80px
  }
  @media(min-width:2000px){
    width:90px
  }
  @media(min-width:2300px){
    width:100px
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
  @media(min-width:1760px){
    font-size:2rem;
  }
  @media(min-width:2000px){
    font-size:2.4rem;
  }
  @media(min-width:2300px){
    font-size:2.8rem;
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
  @media(min-width:1760px){
    font-size:1.2rem;
  }
  @media(min-width:2000px){
    font-size:1.6rem;
  }
  @media(min-width:2300px){
    font-size:2rem;
  }
`

const StyledInfoBox = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  border-radius:10px;
  padding:50px 0;
  border:2px solid #c2c2c2;
  background-color:#0f0f0f;
  box-shadow: 0px 0px 10px 1px #c2c2c2dc;
  @media(min-width:600px){
    padding:50px 0;
    width:29%;
  }
  @media(min-width:1440px){
    width:26%;
  }
  @media(min-width:2000px){
    padding:100px 0;
    width:23%;
  }
  @media(min-width:2300px){
    width:28%;
  }
`

export default InfoBox1
