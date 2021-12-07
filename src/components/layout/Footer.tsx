import styled from 'styled-components'
import ButtonHolder from 'components/buttons/ButtonHolder'
import DiscordButton from '../buttons/DiscordButton';
import TwitterButton from '../buttons/TwitterButton';

function Footer() {
  return (
    <StyledFooter>
      <DiscordButton />
      <TwitterButton />
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  overflow-x:hidden;
  overflow-y:hidden;
  position:absolute;
  width:235px;
  height:100px;
  bottom:100px;

  @media(max-width:375px){
    height:100px;
  }
`

export default Footer
