import React from 'react'
import styled from 'styled-components'
import moneyIcon from '../../images/09_money_icon_png.png'

function InfoBox3() {
  return (
    <StyledInfoBox>
      <Icon src={moneyIcon} alt='crowd icon' />
      <Header>Share in rewards</Header>
      <Description>Reap the benefits from participating in a community treasury.</Description>
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
    width:75%;
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
<<<<<<< HEAD
<<<<<<< HEAD
  margin:0px 0px;
  /* width:21%; */
  border:1px solid #c2c2c2;
  background-color:#0f0f0f;
  box-shadow: 0px 0px 10px 1px #c2c2c2dc;
  @media(min-width:425px){
    /* width:40%; */
  }
  @media(min-width:600px){
    width:32%
  }
  @media(min-width:1440px){
    width:26%
  }
=======
=======
  margin:0px 0px;
>>>>>>> updated mobile and tablet views. Still need to update Large 4K views
  /* width:21%; */
  border:1px solid #c2c2c2;
  background-color:#0f0f0f;
  box-shadow: 0px 0px 10px 1px #c2c2c2dc;
  @media(min-width:425px){
    /* width:40%; */
  }
  @media(min-width:600px){
    width:32%
  }
<<<<<<< HEAD
>>>>>>> updated some views for mobile, fixing some lists to properly wrap with flexbox
=======
  @media(min-width:1440px){
    width:26%
  }
>>>>>>> updated mobile and tablet views. Still need to update Large 4K views
  @media(min-width:2000px){
    width:23%
  }
`

export default InfoBox3
