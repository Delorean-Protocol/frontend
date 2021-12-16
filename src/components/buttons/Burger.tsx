import React from 'react'
import styled from 'styled-components'
import { bool, func } from 'prop-types';

interface Props{
  open:boolean,
  setOpen:any,
}

function Burger(props:Props) {
  const {open, setOpen} = props
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

const StyledBurger:any = styled.button<Props>`
  position: ${({open}) => open ? 'fixed' : 'absolute' };
  top: 5%;
  right:40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  @media(min-width:340px){
    top:5.5%;
  }
  
  &:focus {
    outline: none;
  }
  
  div {
    width: 2rem;
    height: 0.25rem;
    background: #b7002f;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }

  @media(min-width:800px){
    display:none;
  }
`;



export default Burger
