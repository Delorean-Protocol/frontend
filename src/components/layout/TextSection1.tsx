import React from 'react'
import styled from 'styled-components'

function TextSection1() {
  return (
    <TextSection>
      <Heading>How does the protocol work?</Heading>
      <Description>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis voluptatibus minima tempore accusamus, accusantium dolorem rerum rem maxime voluptate, minus eaque quibusdam vitae provident consectetur! Praesentium iste veritatis alias sed. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero sequi voluptatem perferendis nesciunt ea dolor enim deleniti eos illum adipisci rem aliquid quas id recusandae, quia explicabo commodi consequatur quibusdam?</Description>
      <Link href='https://deloreanprotocol.medium.com/delorean-protocol-litepaper-e6f17b6854ca' target='_blank'>learn more</Link>
    </TextSection>
  )
}

const TextSection = styled.div`
  align-self:center;
  width:94%;
  margin-top:100px;
  @media(min-width:320px){
    
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
    /* font-weight:700; */
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
`

const Description = styled.div`
  line-height: 30px;
  font-size:1.4rem;
  font-weight:400;
  margin-top:20px;
  margin-bottom:30px;
  width:94%;
  @media(min-width:320px){
    font-size:1.5rem;
  }
  @media(min-width:425px){
    font-size:1.7rem;
  }
  @media(min-width:768px){
    font-size:1.8rem;
  }
  @media(min-width:1024px){
    font-size:2rem;
  }
  @media(min-width:1440px){
    font-size:2.2rem;
  }

  @media(min-width:1760px){
    font-size:2.4rem;
    line-height:40px;
  }
  @media(min-width:2000px){
    font-size:2.8rem;
    line-height:50px;
  }
  @media(min-width:2300px){
    font-size:3.2rem;
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
