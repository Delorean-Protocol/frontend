import React from 'react'
import styled from 'styled-components'
import NFT1 from '../../images/NFT_01.mp4'
import NFT2 from '../../images/NFT_02.mp4'




function Preview() {
  return (
    <PreviewBoxes>
      <PreviewBox1><video src={NFT1} height="100%" width="100%" controls muted></video></PreviewBox1>
      <PreviewBox2><video src={NFT2} height="100%" width="100%" controls muted></video></PreviewBox2>
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
}
`
const PreviewBox1 = styled.div`
  background:#171717;
  border-radius:10px;
  width:80%;
  height:220px;
  margin-top:50px;
  @media(min-width:320px){
    width:80%;
    height:230px;
  }
  @media(min-width:375px){
    width:83%;
    height:240;
  }
  @media(min-width:425px){
    width:85%;
    height:300px;
  }
  @media(min-width:550px){
    height:340px;
  }
  @media(min-width:768px){
    margin-right:20px;
    margin-top:-20px;
    height:380px;
  }
  @media(min-width:1024px){
    width:75%;
    margin-right:25px;
  }
  @media(min-width:1220px){
    width:65%;
    height:500px;
  }
  @media(min-width:1440px){
    margin-right:60px;
  }
  @media(min-width:2000px){
    width:50%;
    margin-right:150px;
    height:700px;

  }
  @media(min-width:2300px){
    height:900px;
  } 
`
const PreviewBox2 = styled.div`
  background:#171717;
  border-radius:10px;
  width:80%;
  height:220px;
  margin-top:60px;
  @media(min-width:375px){
    width:83%;
    height:240;
  }
  @media(min-width:425px){
    width:85%;
    height:300px;
  }
  @media(min-width:550px){
    height:340px;
  }
  @media(min-width:768px){
    margin-left:20px;
    height:380px;
  }
  @media(min-width:1024px){
    width:75%;
    margin-left:25px;
  }
  @media(min-width:1220px){
    width: 65%;
    height:500px;
  }
  @media(min-width:1440px){
    margin-left:60px
  }
  @media(min-width:2000px){
    width:50%;
    margin-left:150px;
    height:700px;
    margin-top:100px;
  }
  @media(min-width:2300px){
    height:825px;
  }
  @media(min-width:3000px){
    height:950px;
  }
`

export default Preview
