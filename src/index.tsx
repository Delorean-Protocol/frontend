import { getChainOptions, WalletProvider } from '@terra-money/wallet-provider';
import { createGlobalStyle } from 'styled-components';
import React, {useState, useRef} from 'react';
import { useOnClickOutside } from 'utilities/hooks';
import { useSpring, animated } from 'react-spring';
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

const headLine = `Gamified NFTs. 
Win rewards.`



function App() {
  const [open , setOpen] = useState<boolean>(false)

  const node:any = useRef()

  useOnClickOutside(node, () => setOpen(false));

  // const fadeLoop = useSpring({
  //   loop: true,
  //   to: [
  //     { opacity: 1, color: '#c2c2c2' },
  //     { opacity: 0, color: '#0f0f0f' },
  //   ],
  //   from: { opacity: 0, color: '#0f0f0f',},
  //   config: { mass: 1, tension: 480, friction: 150 }
  // })

  // const fadeIn = useSpring({
  //   to: { opacity: 1, color: '#c2c2c2', textShadow: '2px 2px 2px #e22253' },
  //   from:{ opcaity: 0, color: '#0f0f0f', textShadow: '2px 2px 2px #0f0f0f' },
  //   config: { mass: 1, tension: 280, friction: 200 }
  // })

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
        <PlaceHolderGraphic>PLACEHOLDER</PlaceHolderGraphic>
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

const LogoHolder = styled.div`

  width:88%;
  display:flex;
  margin-top:30px;
  /* transform:scale(.9,.9); */
  /* border:1px solid white; */
  @media(min-width:320px){
    
  }
  @media(min-width:375px){
    /* transform:scale(1,1) */
  }
  @media(min-width:425px){
    
  }
  @media(min-width:768px){

  }
  @media(min-width:1024px){
    margin-top:50px;
  }
  @media(min-width:1440px){

  }
  @media(min-width:1760px){
    /* padding:1% 0; */
    margin-top:70px;

  }
`
const Logo = styled.img`
  /* position:absolute;
  left: 7%;
  top:65px; */
  left:6%;
  z-index:1;
  @media(min-width:320px){
  }
  @media(min-width:375px){

  }
  @media(min-width:425px){

  }
  @media(min-width:768px){

  }
  @media(min-width:1024px){
    transform:scale(1.1,1.1);
    margin-left:1%;
  }
  @media(min-width:1440px){
    transform:scale(1.3,1.3);
  }
  @media(min-width:1760px){
    transform:scale(1.5,1.5);
    margin-left:2%;
  }
  @media(min-width:2000px){
    transform:scale(1.7,1.7);

  }
  @media(min-width:2300px){
    transform:scale(2,2);
  }
`


const TopSection = styled.div`
  position:absolute;
  top:160px;
  width:92%;
  display:flex;
  flex-direction:column;
  overflow-y:hidden;
  overflow-x:hidden;
  @media(min-width:320px){
    
  }
  @media(min-width:375px){

  }
  @media(min-width:425px){
    
  }
  @media(min-width:768px){

  }
  @media(min-width:1024px){

  }
  @media(min-width:1440px){
    top:180px;
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
  width:70%;
  height:340px;
  line-height:340px;
  @media(min-width:320px){
    width:65%;
    height:350px;
    line-height:350px;
  }
  @media(min-width:375px){

  }
  @media(min-width:425px){
    width:60%;
    height:380px;
    line-height:380px;
  }
  @media(min-width:768px){
    width:55%;
    height:400px;
    line-height:400px;
  }
  @media(min-width:1024px){

  }
  @media(min-width:1440px){
    font-size:2rem;
    width:45%;
    height:420px;
    line-height:420px;
  }
  @media(min-width:2000px){
    font-size:2.4rem;
    height:500px;
    line-height:500px;
  }
  @media(min-width:2300px){
    font-size:2.8rem;
    height:550px;
    line-height:550px;
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
    height:650px;
    width:100vw;
    overflow-x:hidden;
    box-shadow: inset 300px 300px 100px 10px rgba(0,0,0,.9);
    @media(min-width:320px){
      height:650px;

    }
    @media(min-width:375px){

    }
    @media(min-width:425px){
    
    }
    @media(min-width:768px){

    }
    @media(min-width:1024px){

    }
    @media(min-width:1440px){
      height:860px;
      box-shadow: inset 600px 300px 200px 100px rgba(0,0,0,.7); 
    }
    @media(min-width:1900){
      height:890px;
    }
    @media(min-width:2000px){
      height:940px;
    }
    @media(min-width:2300px){
      height:1000px;
    }
  }
`



