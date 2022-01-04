import React from 'react'
import styled from 'styled-components'
import NFT1 from '../../images/NFT_01.mp4'
import NFT2 from '../../images/NFT_02.mp4'




function Preview() {
  return (
    <PreviewBoxes>
      <PreviewBox1><video src={NFT1} height="100%" width="100%" controls preload='metadata'></video></PreviewBox1>
      <PreviewBox2><video src={NFT2} height="100%" width="100%" controls preload='metadata'></video></PreviewBox2>
    </PreviewBoxes>
  )
}

const PreviewBoxes = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center; 
  width:94%;
  margin-top:35px;
  align-self:center;
@media(min-width:375px){
  width:88%;
}
@media(min-width:425px){
  width:78%;
}
@media(min-width:768px){
  width: 94%;
  flex-direction:row;
  flex-wrap:nowrap; 
  justify-content:space-around;
}
@media(min-width:1024px){
  margin-top:55px;
}
@media(min-width:2300px){
  margin-top:100px;
}
`
const PreviewBox1 = styled.div`
  border-radius:10px;
  width:80%;
  height:auto;
  margin-top:50px;
  @media(min-width:425px){
    width:75%;
  }
  @media(min-width:768px){
    width:40%;
  }
  @media(min-width:1024px){
    width:40%;
  }
  @media(min-width:1440px){
    width:35%;
  }
  @media(min-width:2300px){
    width:30%;
  } 
`
const PreviewBox2 = styled.div`
  border-radius:10px;
  width:80%;
  height:auto;
  margin-top:50px;
  @media(min-width:425px){
    width:75%;
  }
  @media(min-width:768px){
    width:40%;
  }
  @media(min-width:1024px){
    width:40%;
  }
  @media(min-width:1220px){
    width: 35%;
  }
  @media(min-width:2300px){
    width:30%;
  }
`

export default Preview
