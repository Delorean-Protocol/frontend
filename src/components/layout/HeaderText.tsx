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
  @media(min-width:500px){
    align-items:flex-start;
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
    font-size:1.6rem;
    width:55%;
  }
  @media(min-width:1760px){
    font-weight:500;
    font-size:2rem;
    width:56%;
    line-height:40px;
    margin-top:60px;
  }
  @media(min-width:2000px){
    width:50%;
    font-size:1.9rem;
  }
  @media(min-width:2300px){
    width:50%;
    font-size:2.2rem;
    font-weight:600;
    line-height:45px;
  }
  @media(min-width:3000px){
    line-height:55px;
    font-size:2.6rem;

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
    font-size:2.4rem;
  }
  @media(min-width:425px){
    font-size:3rem;
    line-height:45px;
  }
  @media(min-width:768px){
    font-size:3.4rem;
    line-height:55px;
  }
  @media(min-width:1024px){
    font-size:3.6rem;
    line-height:65px;
  }
  @media(min-width:1440px){
    font-size:3.8rem;
    line-height:70px;
  }
  @media(min-width:1760px){
    font-size:4.2rem;
  }
  @media(min-width:2000px){
    font-size:5.4rem;
  }
  @media(min-width:2500px){
    font-size:6rem;
    line-height:95px;
  }
  @media(min-width:3000px){
    font-size:6.4rem;
  }
  @media(min-width:3300px){
    font-size:7rem;
    margin-top:20px;
  }
`

export default HeaderText
