import React from 'react'
import styled from 'styled-components'
import bTheMouth from '../../images/bTheMouthPfp.png'
import myr from '../../images/myrPfp.jpg'
import tgrede from '../../images/tgredePfp.png'
import anup from '../../images/anupPfp.jpg'
import mithril from '../../images/mithrilPfp.jpg'
import ar from '../../images/arPfp.jpg'
import cfw from '../../images/cfwPfp.png'
import memphistopheles from '../../images/memphistophelesPfp.jpg'
import TeamMember from './TeamMember'

const team = [
  {srcImg: bTheMouth, altText:"profile picture for B_TheMouth", name:"B_TheMouth"},
  {srcImg: myr, altText:"profile picture for Myr", name:"Guilherme (Myr)"},
  {srcImg: cfw, altText:"profile picture for CFW", name:"CFW"},
  {srcImg: anup, altText:"profile picture for Anup", name:"Anup"},
  {srcImg: tgrede, altText:"profile picture for Trenten", name:"Trenten"},
  {srcImg: mithril, altText:"profile picture for Mithril", name:"Mithril.UST"},
  {srcImg: memphistopheles, altText:"profile picture for Memphistopheles", name:"Memphistopheles"},
  {srcImg: ar, altText:"profile picture for Archangel Raphael", name:"Archangel Raphael"},
]

function Team() {
  return (
    <TeamSection>
      <Header>Meet the team</Header>
      <TeamList>
        {team.map((member, i) => {
          return <TeamMember key={i} src={member.srcImg} alt={member.altText} name={member.name} />
        })}
      </TeamList>
    </TeamSection>
  )
}

const Header = styled.h4`
  font-size:2.4rem;
  text-align:center;
  font-weight:700;
  margin:40px 0;
  padding:0;
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
  @media(min-width:2600px){
    font-size:5rem;
  }
  @media(min-width:3000px){
    font-size:5.4rem;
  }
  @media(min-width:3300px){
    font-size:5.6rem;
  }
`

const TeamList = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-evenly;
  flex-wrap:wrap;
  gap:30px 0px;
`

const TeamSection = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  width:100%;
  margin-top:75px;
  @media(min-width:1024px){
    margin-top:100px;
  }
  @media(min-width:2000px){
    margin-top:130px;
  }
`

export default Team
