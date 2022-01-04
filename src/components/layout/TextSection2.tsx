import React from 'react'
import styled from 'styled-components'

function TextSection1() {
  return (
    <TextSection>
      <Heading>A spotlight on our art and a glimpse into our future</Heading>
      <Description>
      Also, in addition to getting a ‘membership ticket’, the first 3,000 people
      to mint on the DeLorean Protocol will be airdropped a special animated NFT as the OGs of the protocol. 
      These 3,000 animated NFT's will be tradeable on the open market and highly sought after as the holders will be rewarded with future benefits 
      and be given priority access to the DeLorean Protocol Launchpad. We will also hold competitions and giveaways of other Terra NFT's, 
      including TerraBots, Luna Bulls, Styllar, and Galactic Punks. 
        <br />
        <br />
      This protocol is only possible with our amazing artists Guilherme and Cfw. View below a sample of our NFT artwork. We hope to see you in the future
      </Description>
      <Link href='https://deloreanprotocol.medium.com/delorean-protocol-litepaper-e6f17b6854ca' target='_blank'>learn more</Link>
    </TextSection>
  )
}

const TextSection = styled.div`
  align-self:center;
  width:94%;
  margin-top:100px;
  margin-bottom:50px;
  @media(min-width:1440px){
    margin-top:150px;
  }
  @media(min-width:3300px){
    margin-top:200px;
  }
`

const Heading = styled.div`
  font-size:2.5rem;
  font-weight:600;
  line-height:45px;
  @media(min-width:320px){
    font-size:2.7rem;
  }
  @media(min-width:425px){
    font-size:2.8rem;
  }
  @media(min-width:768px){
    font-size:2.9rem;
  }
  @media(min-width:1024px){
    font-size:3rem;
  }
  @media(min-width:1440px){
    font-size:3.4rem;
  }
  @media(min-width:1760px){
    font-size:3.6rem;
  }
  @media(min-width:2000px){
    font-size:3.4rem;
  }
  @media(min-width:2300px){
    font-size:4.4rem;
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

const Description = styled.div`
  line-height: 32px;
  font-size:1.2rem;
  font-weight:400;
  margin-top:60px;
  margin-bottom:30px;
  width:94%;

  @media(min-width:320px){
    font-size:1.3rem;
  }
  @media(min-width:1024px){
    line-height:36px;
  }
  @media(min-width:1440px){
    font-size:1.4rem;
    line-height:39px;
    width:85%;
  }
  @media(min-width:1760px){
    font-size:1.6rem;
    line-height:45px;
  }
  @media(min-width:2000px){
    font-size:1.8rem;
    line-height:52px;
  }
  @media(min-width:2300px){
    font-size:2rem;
    line-height:58px;
  }
  @media(min-width:3000px){
    font-size:2.2rem;
    line-height:60px;
  }
  @media(min-width:3300px){
    font-size:2.4rem;
    line-height:68px;
  }
`

const Link = styled.a`
  margin-left:10px;
  font-size:1.6rem;
  font-weight:700;
  color:#c2c2c2;
  text-decoration:none;
`

export default TextSection1
