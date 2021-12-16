import React from 'react'
import styled from 'styled-components'
import DiscordButton from 'components/buttons/DiscordButton'
import TwitterButton from 'components/buttons/TwitterButton'

function Contact() {
  return (
    <ContactSection>
      <Heading>Get in touch with us</Heading>
      <ButtonHolder>
        <DiscordButton />
        <TwitterButton />
      </ButtonHolder>
    </ContactSection>
  )
}

const ContactSection  = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  margin-bottom:50px;
  @media(min-width:2300px){

    margin-bottom:100px;
  }
`

const ButtonHolder  = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  gap:100px;
`

const Heading  = styled.h6`
  font-size:1.8rem;
  font-weight:700;
  margin-top:100px ;
  margin-bottom:40px;
  padding:0;
  text-align:center;
  @media(min-width:425px){
    margin-top:160px;
    font-size:2.2
  }
  @media(min-width:768px){
    font-size:2.6rem;
  }
  @media(min-width:1440px){
    font-size:3.8rem;
  }
  @media(min-width:1760px){
    font-size:4.2rem;
  }
  @media(min-width:2000px){
    font-size:4.4rem;
  }
  @media(min-width:2300px){
    font-size:4.7rem;
    margin-bottom:80px;
  }
`

const Button  = styled.button`
  background-color:#171717;
  border:1px solid #171717;
  border-radius:50px;
  padding:20px 40px;
  margin-left:10px;
  margin-right:10px;
  margin-bottom:40px;
  @media(min-width:768px){
    padding:25px 50px;
    margin-left:20px;
    margin-right:20px;
    margin-bottom:100px;
  }
`

export default Contact
