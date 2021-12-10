import React from 'react'
import styled from 'styled-components'

function Team() {
  return (
    <TeamSection>
      <Header>Meet the team</Header>
      <TeamList>
        <Member>
          <MemberBox>

          </MemberBox>
          <Name>Name name</Name>
        </Member>
        <Member>
          <MemberBox>

          </MemberBox>
          <Name>Name name</Name>
        </Member>
        <Member>
          <MemberBox>

          </MemberBox>
          <Name>Name name</Name>
        </Member>
        <Member>
          <MemberBox>

          </MemberBox>
          <Name>Name name</Name>
        </Member>
        <Member>
          <MemberBox>

          </MemberBox>
          <Name>Name name</Name>
        </Member>
        <Member>
          <MemberBox>

          </MemberBox>
          <Name>Name name</Name>
        </Member>
      </TeamList>
    </TeamSection>
  )
}

const Name = styled.p`
  font-size:1.4rem;
  font-weight:600;
  margin:15px 0;
  padding:0;
  @media(min-width:768px){
    font-size:1.6rem;
  }
  @media(min-width:1440px){
    font-size:2rem;
  }
  @media(min-width:1760px){
    font-size:2.4rem;
  }
  @media(min-width:2000px){
    font-size:2.6rem;
  }
  @media(min-width:2300px){
    font-size:2.8rem;
  }
`

const Member = styled.div`
  width:80%;
  display:flex;
  flex-direction:column;
  align-items:center;
  @media(min-width:320px){
    width:70%
  }
  @media(min-width:375px){
    width:65%;
  }
  @media(min-width:425px){
    width:42%;
  }
  @media(min-width:550px){
    width:40%;
  }
  @media(min-width:650px){
    width:36%;
  }
  @media(min-width:768px){
    width:30%;
  }
  @media(min-width:850px){
    width:26%;
  }
  @media(min-width:1024px){
    width:20%;
  }
`

const Header = styled.h4`
  font-size:2.4rem;
  text-align:center;
  font-weight:700;
  margin:40px 0;
  padding:0;
  @media(min-width:320px){

  }
  @media(min-width:375px){

  }
  @media(min-width:425px){

  }
  @media(min-width:768px){
    font-size:3rem;
  }
  @media(min-width:1024px){
    font-size:3.6rem;
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
    font-size:4.6rem;
  }
`

const MemberBox = styled.div`
  width:100%;
  height:200px;
  border-radius:20px;
  background-color:#171717;
  @media(min-width:320px){
    /* width:60%; */
  }
  @media(min-width:375px){

  }
  @media(min-width:425px){
    /* width:100%; */
    height:180px;
  }
  @media(min-width:768px){
    /* width:30%; */
    height:200px;
  }
  @media(min-width:1024px){
    height:220px;
  }
  @media(min-width:1440px){
    height:240px;
  }
  @media(min-width:1760px){
    height:260px;
  }
  @media(min-width:2000px){
    height:300px;
  }
  @media(min-width:2300px){
    height:340px;
  }
`

const TeamList = styled.div`

  display:flex;
  flex-direction:row;
  justify-content:space-evenly;
  flex-wrap:wrap;
  width:100%;
  gap:60px;
`

const TeamSection = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  width:100%;
  margin-top:75px;
`

export default Team
