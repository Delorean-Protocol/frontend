import React from 'react'
import styled from 'styled-components'

function Preview() {
  return (
    <PreviewBoxes>
      <PreviewBox1></PreviewBox1>
      <PreviewBox2></PreviewBox2>
    </PreviewBoxes>
  )
}

const PreviewBoxes = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center; 

  /* justify-content:space-between; */
  /* flex-wrap:wrap; */
  width:94%;
  margin-top:35px;
  align-self:center;
@media(min-width:320px){

}
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
@media(min-width:1024px){

}
@media(min-width:1440px){

}
@media(min-width:2000px){

}
@media(min-width:2300px){

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
    /* margin-left:10px; */
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
    height:500px;

  }
  @media(min-width:2300px){
    height:650px;
  } 
`
const PreviewBox2 = styled.div`
  background:#171717;
  border-radius:10px;
  width:80%;
  height:220px;
  margin-top:60px;
  @media(min-width:320px){

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
    height:500px;
    margin-top:100px;
  }
  @media(min-width:2300px){
    height:650px;
  }
`

export default Preview
