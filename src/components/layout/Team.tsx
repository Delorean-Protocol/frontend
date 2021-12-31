import React from 'react'
import styled from 'styled-components'
import bTheMouth from '../../images/bTheMouthPfp.png'
import myr from '../../images/myrPfp.jpg'
import tgrede from '../../images/tgredePfp.png'
import anup from '../../images/anupPfp.jpg'
import mithril from '../../images/mithrilPfp.jpg'
import ar from '../../images/arPfp.jpg'
import cfw from '../../images/cfwPfp.png'
import Memphistopheles from '../../images/memphistophelesPfp.jpg'



function Team() {
  return (
    <TeamSection>
      <Header>Meet the team</Header>
      <TeamList>
        <Member>
          <MemberBox>
            <Image src={bTheMouth} alt="B_TheMouth Profile Picture"/>
          </MemberBox>
          <Name>B_TheMouth</Name>
        </Member>
        <Member>
          <MemberBox>
            <Image src={myr} alt="Myr Profile Picture"/>
          </MemberBox>
          <Name>Guilherme (Myr)</Name>
        </Member>
        <Member>
          <MemberBox>
            <Image src={cfw} alt="cfw Profile Picture"/>
          </MemberBox>
          <Name>Cfw</Name>
        </Member>
        <Member>
          <MemberBox>
            <Image src={anup} alt="Trenten Profile Picture"/>
          </MemberBox>
          <Name>Anup</Name>
        </Member>
        <Member>
          <MemberBox>
            <Image src={tgrede} alt="Trenten Profile Picture"/>
          </MemberBox>
          <Name>Trenten</Name>
        </Member>
        <Member>
          <MemberBox>
            <Image src={mithril} alt="mithril Profile Picture"/>
          </MemberBox>
          <Name>Mithril.UST</Name>
        </Member>
        <Member>
          <MemberBox>
            <Image src={Memphistopheles} alt="memphistopheles Profile Picture"/>
          </MemberBox>
          <Name>Memphistopheles</Name>
        </Member>
        <Member>
          <MemberBox>
            <Image src={ar} alt="archangel raphael Profile Picture"/>
          </MemberBox>
          <Name>Archangel Raphael</Name>
        </Member>
      </TeamList>
    </TeamSection>
  )
}

const Image = styled.img`
  width:68%;
  height:auto;
  background-size:auto;
  border-radius:20px;
  margin-top:50px;
  @media(min-width:3300px){
    width:66%;
    height:66%;
  }
`

const Name = styled.p`
  font-size:1.4rem;
  font-weight:600;
  margin:-10px 0;
  padding:0;
  text-align:center;
  @media(min-width:420px){
    font-size:1.3rem;
  }
  @media(min-width:768px){
    font-size:1.4rem;
  }
  @media(min-width:1440px){
    font-size:1.8rem;
  }
  @media(min-width:1760px){
    font-size:2.2rem;
  }
  @media(min-width:2000px){
    font-size:2.4rem;
  }
  @media(min-width:2300px){
    font-size:2.6rem;
  }
`

const Member = styled.div`
  width:82%;
  display:flex;
  flex-direction:column;
  align-items:center;
  @media(min-width:320px){
    width:78%
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

const MemberBox = styled.div`
  width:100%;
  height:240px;
  border-radius:20px;
  /* background-color:#171717; */
  display:flex;
  align-items:center;
  justify-content:center;
  @media(min-width:425px){
    height:190px;
  }
  @media(min-width:600px){
    height:200px;
  }
  @media(min-width:660px){
    height:220px;
  }
  @media(min-width:768px){
    height:240px;
  }
  @media(min-width:1024px){
    height:220px;
  }
  @media(min-width:1220px){
    height:250px;
  }
  @media(min-width:1440px){
    height:300px;
  }
  @media(min-width:1760px){
    height:360px;
  }
  @media(min-width:2000px){
    height:380px;
  }
  @media(min-width:2300px){
    height:400px;
  }
  @media(min-width:2600px){
    height:460px;
  }
  @media(min-width:2800px){
    height:500px;
  }
  @media(min-width:3000px){
    height:540px;
  }
  @media(min-width:3300px){
    height:600px;
  }
  @media(min-width:3500px){
    height:650px;
  }
`

const TeamList = styled.div`
  /* border:1px solid white; */
  display:flex;
  flex-direction:row;
  justify-content:space-evenly;
  flex-wrap:wrap;
  width:90%;
  gap:10px;
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




















// import React from 'react'
// import styled from 'styled-components'
// import bTheMouth from '../../images/bTheMouthPfp.png'
// import myr from '../../images/myrPfp.jpg'
// import tgrede from '../../images/tgredePfp.png'
// import anup from '../../images/anupPfp.jpg'
// import mithril from '../../images/mithrilPfp.jpg'
// import ar from '../../images/arPfp.jpg'
// import cfw from '../../images/cfwPfp.png'
// import Memphistopheles from '../../images/memphistophelesPfp.jpg'



// function Team() {
//   return (
//     <TeamSection>
//       <Header>Meet the team</Header>
//       <TeamList>
//         <Member>
//           <MemberBox>
//             <Image src={bTheMouth} alt="B_TheMouth Profile Picture"/>
//           </MemberBox>
//           <Name>B_TheMouth</Name>
//         </Member>
//         <Member>
//           <MemberBox>
//             <Image src={myr} alt="Myr Profile Picture"/>
//           </MemberBox>
//           <Name>Guilherme (Myr)</Name>
//         </Member>
//         <Member>
//           <MemberBox>
//             <Image src={cfw} alt="cfw Profile Picture"/>
//           </MemberBox>
//           <Name>Cfw</Name>
//         </Member>
//         <Member>
//           <MemberBox>
//             <Image src={anup} alt="Trenten Profile Picture"/>
//           </MemberBox>
//           <Name>Anup</Name>
//         </Member>
//         <Member>
//           <MemberBox>
//             <Image src={tgrede} alt="Trenten Profile Picture"/>
//           </MemberBox>
//           <Name>Trenten</Name>
//         </Member>
//         <Member>
//           <MemberBox>
//             <Image src={mithril} alt="mithril Profile Picture"/>
//           </MemberBox>
//           <Name>Mithril.UST</Name>
//         </Member>
//         <Member>
//           <MemberBox>
//             <Image src={Memphistopheles} alt="memphistopheles Profile Picture"/>
//           </MemberBox>
//           <Name>Memphistopheles</Name>
//         </Member>
//         <Member>
//           <MemberBox>
//             <Image src={ar} alt="archangel raphael Profile Picture"/>
//           </MemberBox>
//           <Name>Archangel Raphael</Name>
//         </Member>
//       </TeamList>
//     </TeamSection>
//   )
// }

// const Image = styled.img`
//   width:68%;
//   height:64%;
//   background-size:auto;
//   border-radius:20px;
//   margin-top:50px;
//   @media(min-width:3300px){
//     width:66%;
//     height:66%;
//   }
// `

// const Name = styled.p`
//   font-size:1.4rem;
//   font-weight:600;
//   margin:15px 0;
//   padding:0;
//   @media(min-width:420px){
//     font-size:1.3rem;
//   }
//   @media(min-width:768px){
//     font-size:1.4rem;
//   }
//   @media(min-width:1440px){
//     font-size:1.8rem;
//   }
//   @media(min-width:1760px){
//     font-size:2.2rem;
//   }
//   @media(min-width:2000px){
//     font-size:2.4rem;
//   }
//   @media(min-width:2300px){
//     font-size:2.6rem;
//   }
// `

// const Member = styled.div`
//   width:82%;
//   display:flex;
//   flex-direction:column;
//   align-items:center;
//   @media(min-width:320px){
//     width:78%
//   }
//   @media(min-width:375px){
//     width:65%;
//   }
//   @media(min-width:425px){
//     width:42%;
//   }
//   @media(min-width:550px){
//     width:40%;
//   }
//   @media(min-width:650px){
//     width:36%;
//   }
//   @media(min-width:768px){
//     width:30%;
//   }
//   @media(min-width:850px){
//     width:26%;
//   }
//   @media(min-width:1024px){
//     width:20%;
//   }
// `

// const Header = styled.h4`
//   font-size:2.4rem;
//   text-align:center;
//   font-weight:700;
//   margin:40px 0;
//   padding:0;
//   @media(min-width:768px){
//     font-size:3rem;
//   }
//   @media(min-width:1024px){
//     font-size:3.6rem;
//   }
//   @media(min-width:1440px){
//     font-size:3.8rem;
//   }
//   @media(min-width:1760px){
//     font-size:4.2rem;
//   }
//   @media(min-width:2000px){
//     font-size:4.4rem;
//   }
//   @media(min-width:2300px){
//     font-size:4.6rem;
//   }
//   @media(min-width:2600px){
//     font-size:5rem;
//   }
//   @media(min-width:3000px){
//     font-size:5.4rem;
//   }
//   @media(min-width:3300px){
//     font-size:5.6rem;
//   }
// `

// const MemberBox = styled.div`
//   width:100%;
//   height:240px;
//   border-radius:20px;
//   /* background-color:#171717; */
//   display:flex;
//   align-items:center;
//   justify-content:center;
//   @media(min-width:425px){
//     height:190px;
//   }
//   @media(min-width:600px){
//     height:200px;
//   }
//   @media(min-width:660px){
//     height:220px;
//   }
//   @media(min-width:768px){
//     height:240px;
//   }
//   @media(min-width:1024px){
//     height:220px;
//   }
//   @media(min-width:1220px){
//     height:250px;
//   }
//   @media(min-width:1440px){
//     height:300px;
//   }
//   @media(min-width:1760px){
//     height:360px;
//   }
//   @media(min-width:2000px){
//     height:380px;
//   }
//   @media(min-width:2300px){
//     height:400px;
//   }
//   @media(min-width:2600px){
//     height:460px;
//   }
//   @media(min-width:2800px){
//     height:500px;
//   }
//   @media(min-width:3000px){
//     height:540px;
//   }
//   @media(min-width:3300px){
//     height:600px;
//   }
//   @media(min-width:3500px){
//     height:650px;
//   }
// `

// const TeamList = styled.div`

//   display:flex;
//   flex-direction:row;
//   justify-content:space-evenly;
//   flex-wrap:wrap;
//   width:100%;
//   gap:0px;
// `

// const TeamSection = styled.div`
//   display:flex;
//   flex-direction:column;
//   align-items:center;
//   width:100%;
//   margin-top:75px;
//   @media(min-width:1024px){
//   margin-top:100px;
//   }
//   @media(min-width:2000px){
//   margin-top:130px;
//   }
// `

// export default Team
