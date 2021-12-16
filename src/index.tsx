import { getChainOptions, WalletProvider } from '@terra-money/wallet-provider';
import { createGlobalStyle } from 'styled-components';
import React, {useState, useRef} from 'react';
import { useOnClickOutside } from 'utilities/hooks';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import mainLogo from './images/00_dlogo_sized_colored.png'
import BlankDeLorean from './images/bwDeLorean1.png'
import HeaderText from 'components/layout/HeaderText';
import InfoBoxes from 'components/layout/InfoBoxes'
import TextSection1 from 'components/layout/TextSection1';
import TextSection2 from 'components/layout/TextSection2';
import Team from 'components/layout/Team';
import Preview from 'components/layout/Preview';
import Contact from 'components/layout/Contact';
import ButtonHolder from 'components/buttons/ButtonHolder';
import Burger from 'components/buttons/Burger';
import Menu from 'components/layout/Menu';
import diagram from './images/diagram.png'

const headLine = `Gamified NFTs. 
Win rewards.`



function App() {
  const [open , setOpen] = useState<boolean>(false)

  const node:any = useRef()

  useOnClickOutside(node, () => setOpen(false));

  return (
    <StyledApp>
      <GlobalStyle />
      <LogoHolder>
        <Logo src={mainLogo} alt="DeLorean Protocol Logo" />
      </LogoHolder>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} />
      </div>
      <ButtonHolder />
      
      <TopSection >
        <HeaderText />
        <InfoBoxes />
        <TextSection1 />
        <PlaceHolderGraphic><Image src={diagram} alt='diagram for how the protocol works'/></PlaceHolderGraphic>
        <TextSection2 />
        <Preview />
        <Team />
        <Contact />
      </TopSection>
    </StyledApp>
  );
}

getChainOptions().then((chainOptions) => {
  ReactDOM.render(
    <WalletProvider {...chainOptions}>
      <App />
    </WalletProvider>,
    document.getElementById('root'),
  );
});

const Image = styled.img`
  width:100%;
  height:100%;
`

const LogoHolder = styled.div`

  width:88%;
  display:flex;
  margin-top:40px;
  @media(min-width:320px){
    margin-top:35px;
  }
  @media(min-width:1024px){
    margin-top:40px;
  }
  @media(min-width:1760px){
    margin-top:50px;
  }
  @media(min-width:2000px){
    margin-top:60px;
  }
`
const Logo = styled.img`
  /* left:6%; */

  z-index:1;
  width:33%;
  @media(min-width:320px){
    width:28%;
  }
  @media(min-width:425px){
    width:24%;
  }
  @media(min-width:550px){
    width:20%;
  }
  @media(min-width:625px){
    width:16%;
  }
  @media(min-width:768px){
    width:13%;
  }
  @media(min-width:1024px){
    width:12%;
  }
  @media(min-width:1440px){
    width:11%
  }
  @media(min-width:1760px){
    width:10%;
  }
  @media(min-width:2000px){
    width:9%;
  }
  @media(min-width:2300px){

  }
  @media(min-width:2600px){
    width:8%;
  }
  @media(min-width:3000px){
    width:7%;
  }
`


const TopSection = styled.div`
  position:absolute;
  top:120px;
  width:92%;
  display:flex;
  flex-direction:column;
  overflow-y:hidden;
  overflow-x:hidden;
  @media(min-width:425px){
    top:130px;
  }
  @media(min-width:600px){
    top:140px;
  }
  @media(min-width:768px){
    top:150px;
  }
  @media(min-width:1024px){
    top:170px;
  }
  @media(min-width:1440px){
    top:190px;
  }
  @media(min-width:1760px){
    top:210px;
  }
  @media(min-width:2000px){
    top:220px;
  }
  @media(min-width:2300px){
    top:260px;
  }
`

const PlaceHolderGraphic = styled.div`
  border:1px solid white;
  text-align:center;
  font-size:1rem;
  align-self:center;
  margin-top: 140px;
  width:105%;
  height:200px;
  @media(min-width:320px){
    height:240px;
  }
  @media(min-width:425px){
    height:280px;
  }
  @media(min-width:480px){
    height:340px;
  }
  @media(min-width:600px){
    width:70%;
  }
  @media(min-width:768px){
    height:400px;
  }
  @media(min-width:1024px){
    width:60%;
    height:440px;
  }
  @media(min-width:1440px){
    height:520px;
  }
  @media(min-width:2000px){
    width:64%;
    height:700px;
  }
  @media(min-width:2300px){
    width:63%;
    height:780px;    
  }
  @media(min-width:3000px){
    width:60%;
    height:880px;    
  }
  @media(min-width:3500px){
    width:56%;
    height:920px;    
  }
`


const StyledApp = styled.main`
  display:flex;
  flex-direction:column;
  align-items:center;
  overflow-x:hidden;
  overflow-y:hidden;
`

//||-------------||
//||GLOBAL STYLES||
//||-------------||

const GlobalStyle = createGlobalStyle`
  html {
    background-color: #0f0f0f;
    color:#c2c2c2;
    font-family: 'Bai Jamjuree', sans-serif;
    height:100%;
  }
  body{
    background-image:url(${BlankDeLorean});
    background-position:center;
    background-repeat:no-repeat;
    background-size:cover;
    margin:0;
    height:600px;
    width:100vw;
    overflow-x:hidden;
    box-shadow: inset 300px 300px 100px 10px rgba(0,0,0,.9);
    @media(min-width:425px){
      height:580px;
    }
    @media(min-width:600px){
      height:800px;
    }
    @media(min-width:1440px){
      height:860px;
      box-shadow: inset 600px 300px 200px 100px rgba(0,0,0,.7); 
    }
    @media(min-width:1900){
      height:890px;
    }
    @media(min-width:2000px){
      height:1000px;
    }
    @media(min-width:2300px){
      height:1100px;
    }
    @media(min-width:2600px){
      height:1125px;
    }
    @media(min-width:3000px){
      height:1150px;
    }
  }
`



