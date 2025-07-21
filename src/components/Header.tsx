import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { colors } from '../styles/theme';

// Animaciones mejoradas
const bloodPulse = keyframes`
  0% { opacity: 0.8; }
  50% { opacity: 1; transform: scale(1.02); }
  100% { opacity: 0.8; }
`;

const HeaderContainer = styled(motion.header)`
  background: linear-gradient(
    180deg, 
    rgba(10, 10, 10, 0.95) 0%, 
    rgba(30, 7, 7, 0.85) 100%
  );
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${colors.rojoSangre};
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(8px);
  box-shadow: 
    0 0 25px rgba(193, 18, 31, 0.4),
    inset 0 -5px 15px rgba(0, 0, 0, 0.5);
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, ${colors.rojoSangre}, transparent);
  }
`;

const LogoText = styled(motion.h1)`
  font-family: 'UnifrakturCook', 'Cinzel Decorative', serif;
  font-size: 2.4rem;
  color: ${colors.rojoSangre};
  text-shadow: 
    0 0 10px ${colors.rojoSangre},
    0 0 20px rgba(193, 18, 31, 0.5);
  user-select: none;
  letter-spacing: 2px;
  position: relative;
  margin: 0;
  animation: ${bloodPulse} 3s infinite ease-in-out;
  
  &::before {
    content: "FLAMAKING";
    position: absolute;
    top: 0;
    left: 0;
    color: ${colors.blancoHueso};
    z-index: -1;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
`;

const Subtitle = styled.span`
  font-family: 'Poppins', sans-serif;
  color: ${colors.blancoHueso};
  font-size: 0.7rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  opacity: 0.9;
  text-shadow: 0 0 5px black;
  position: relative;
  padding-left: 1rem;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 15px;
    width: 2px;
    background: ${colors.rojoSangre};
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.8rem;
  align-items: center;
`;

const NavLink = styled(motion.a).attrs(() => ({
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 }
}))`
  font-family: 'Poppins', sans-serif;
  color: ${colors.blancoHueso};
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 1.8px;
  position: relative;
  text-decoration: none;
  font-size: 0.85rem;
  padding: 0.5rem 0;
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: ${colors.rojoSangre};
    transition: width 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  }

  &:hover {
    color: ${colors.rojoSangre};
    text-shadow: 0 0 10px ${colors.rojoSangre};
    
    &::before {
      width: 100%;
    }
  }
`;

const NavButton = styled(motion.button).attrs(() => ({
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 }
}))`
  background: linear-gradient(
    145deg, 
    ${colors.rojoSangre} 0%, 
    #7a0c14 100%
  );
  color: ${colors.blancoHueso};
  border: none;
  padding: 0.7rem 2rem;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  text-transform: uppercase;
  border-radius: 30px;
  box-shadow: 
    0 0 15px rgba(193, 18, 31, 0.6),
    inset 0 1px 1px rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  user-select: none;
  letter-spacing: 1.5px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  
  &::before {
    content: '';
    position: absolute;
    top: -100%;
    left: -100%;
    width: 300%;
    height: 300%;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 45%,
      rgba(255, 255, 255, 0.15) 50%,
      rgba(255, 255, 255, 0) 55%
    );
    transform: rotate(45deg);
    transition: all 0.5s ease;
  }

  &:hover {
    box-shadow: 
      0 0 25px rgba(193, 18, 31, 0.8),
      inset 0 1px 1px rgba(255, 255, 255, 0.3);
    
    &::before {
      left: 100%;
      top: 100%;
    }
  }
`;

export const Header = () => {
  return (
    <HeaderContainer
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', damping: 10 }}
    >
      <LogoContainer>
        <LogoText>FLAMAKING</LogoText>
        <Subtitle>PERIODISMO EXTREMO</Subtitle>
      </LogoContainer>
      
      <Nav>
        <NavLink href="#tiktoks">TikToks</NavLink>
        <NavLink href="#about">Quién es</NavLink>
        <NavLink href="#bands">Bandas</NavLink>
        <NavLink href="#events">Eventos</NavLink>
        <NavButton>¡Explorar!</NavButton>
      </Nav>
    </HeaderContainer>
  );
};