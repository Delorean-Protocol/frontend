import React from 'react'
import styled from 'styled-components'
import LaunchBig from 'components/buttons/LaunchBig'

const headLine = `Gamified NFTs. 
Win rewards.`

function HeaderText() {
  return (
    <Header>
      <HeadLine>{headLine}</HeadLine>
      <Description>DeLorean Protocol uses NFTs to tokenize yield from an Anchor treasury to reward community members in $UST.</Description>
      <LaunchBig />
    </Header>
  )
}

const Header = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  align-self:center;
  width:94%;

  @media(min-width:320px){

    
  }
  @media(min-width:375px){

  }
  @media(min-width:425px){

  }
  @media(min-width:500px){
    align-items:flex-start;
  }
  @media(min-width:768px){
    
  }
  @media(min-width:1024px){

  }
  @media(min-width:1440px){

  }
`

const Description = styled.p`
  font-family: 'Bai Jamjuree', sans-serif;
  font-size:1.4rem;
  margin:30px 0;
  padding:0;
  line-height:26px;
  width:90%;
  align-self:flex-start;
  @media(min-width:320px){
    font-size:1.5rem;
    font-weight:400;
  }
  @media(min-width:375px){

  }
  @media(min-width:425px){
    width:75%;
  }
  @media(min-width:768px){
    width:60%;
  }
  @media(min-width:1024px){
    width:50%;
  }
  @media(min-width:1440px){
    font-size:1.7rem;
    width:55%;
  }
  @media(min-width:2000px){
    width:50%;
    font-size:1.9rem;
  }
  @media(min-width:2300px){
    width:50%;
    font-size:2rem;
    font-weight:600;
    line-height:45px;
  }
`

const HeadLine = styled.h1`
  font-family: 'Bai Jamjuree', sans-serif;
  font-weight: 800;
  font-size:2rem;
  line-height:33px;
  letter-spacing:-1px;
  white-space:pre-wrap;
  margin:0;
  padding:0;
  align-self:flex-start;
  @media(min-width:320px){
    font-size:2.2rem;
    line-height:35px;
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
    font-size:5rem;
    line-height:80px;
  }
  @media(min-width:2000px){
    font-size:5.5rem;
    line-height:75px;
  }
  @media(min-width:2300px){
    font-size:5.7rem;
    line-height:90px;
  }
`

export default HeaderText
