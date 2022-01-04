import React from 'react'
import styled from 'styled-components'

function ProfilePicture(props:any) {
  return (
    <MemberBox>
      <Image src={props.src} alt={props.alt} />
    </MemberBox>
  )
}

const Image = styled.img`
  width:75%;
  height:auto;
  background-size:auto;
  border-radius:20px;
  @media(min-width:375px){
    width:70%;
  }
  @media(min-width:425px){
    width:60%;
  }
  @media(min-width:550px){
    width:55%;
  }
  @media(min-width:768px){
    width:60%;
  }
  @media(min-width:1024px){
    width:50%;
  }
  @media(min-width:1440px){
    width:75%;
  }
  @media(min-width:2000px){
    width:80%;
  }
  @media(min-width:2000px){
    width:85%;
  }
`

const MemberBox = styled.div`
  width:100%;
  border-radius:20px;
  display:flex;
  align-items:center;
  justify-content:center;
`
  


export default ProfilePicture
