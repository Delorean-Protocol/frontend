import React from 'react'
import styled from 'styled-components'

const text = `Mint a DeLorean Key NFT, which becomes your membership to the DeLorean Protocol Ecosystem.
 \n \nThere will be an initial mint price of 150UST. These funds will flow into an Anchor treasury to accrue interest. 
 \n \nOnce the protocol
reaches 3,000 keys minted the first time travel will take place. A member will be selected at random to receive
three days worth of treasury yield. 
\n \nThe lucky winner will have 24 hours to burn their key in exchange for their reward.
Once 24 hours have passed the process will repeat. 
\n \nThis means another member will take a trip to the future once
three more days have elapsed. 
\n \nAfter our initial mint of 3000 Keys we will be holding a mint for our second NFT.
This second NFT will have a reduced cost compared to the key and it will give an increased probability of winning. 
\n \nIf you win you will also have the option to burn this second NFT rather than your DeLorean Key. We expect the supply to be unlimited,
so the protocol treasury can grow indefinitely.`

function TextSection1() {
  return (
    <TextSection>
      <Heading>How does the protocol work?</Heading>
      <Description>
       {text}

      </Description>
      <Link href='https://deloreanprotocol.medium.com/delorean-protocol-litepaper-e6f17b6854ca' target='_blank'>learn more</Link>
    </TextSection>
  )
}

const TextSection = styled.div`
  align-self:center;
  width:94%;
  margin-top:110px;
  @media(min-width:3300px){
    margin-top:160px;
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
  white-space:pre-wrap;
  @media(min-width:320px){
    font-size:1.3rem;
  }
  @media(min-width:425px){
    /* font-size:1.5rem; */
  }
  @media(min-width:768px){
    /* font-size:1.4rem; */
  }
  @media(min-width:1024px){
    line-height:36px;
  }
  @media(min-width:1440px){
    font-size:1.4rem;

    width:75%;
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
