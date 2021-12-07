import React from 'react'
import InfoBox1 from './InfoBox1'
import InfoBox2 from './InfoBox2'
import InfoBox3 from './InfoBox3'
import styled from 'styled-components'

function InfoBoxes() {
  return (
    <StyledInfoBoxes>
      <InfoBox1 />
      <InfoBox2 />
      <InfoBox3 />
    </StyledInfoBoxes>
  )
}

const StyledInfoBoxes = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
  /* border:1px solid white; */
  margin-top:90px;
  align-self:center;
  width:92%;
  @media(max-width:599px){
    gap:50px;
    
  }
  @media(min-width:425px){
   
    width:85%;
  }
  @media(min-width:500px){
   
    width:70%;
  }
  @media(min-width:600px){
   
    width:100%;
  }
  @media(min-width:700px){
    flex-wrap:nowrap;
  }
  @media(min-width:2000px){

  }
`

export default InfoBoxes
