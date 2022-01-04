import React from 'react'
import styled from 'styled-components'
import ProfilePicture from './ProfilePicture'

function TeamMember(props:any) {
  return (
    <Member>
      <ProfilePicture src={props.src} alt={props.alt} />
      <Name>{props.name}</Name>
    </Member>
  )
}

const Name = styled.p`
  font-size:1.3rem;
  font-weight:600;
  margin:10px 0;
  padding:0;
  text-align:center;
  white-space:nowrap
  @media(min-width:420px){
    font-size:1.4rem;
  }
  @media(min-width:1440px){
    font-size:1.5rem;
  }
  @media(min-width:1760px){
    font-size:1.7rem;
  }
  @media(min-width:2000px){
    font-size:2.1rem;
  }
  @media(min-width:2300px){
    font-size:2.5rem;
  }
`

const Member = styled.div`
  width:51%;
  display:flex;
  flex-direction:column;
  align-items:center;
  @media(min-width:425px){
    width:36%;
  }
  @media(min-width:768px){
    width:22%;
  }
  @media(min-width:1024px){
    width:22%;
  }
  @media(min-width:1440px){
    width:12%;
  }
`

export default TeamMember
