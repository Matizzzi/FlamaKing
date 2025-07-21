import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { colors } from '../styles/theme';

// Animaciones
const hellfireGlow = keyframes`
  0%, 100% {
    text-shadow: 
      0 0 5px ${colors.rojoSangre},
      0 0 10px rgba(193, 18, 31, 0.5);
  }
  50% {
    text-shadow: 
      0 0 15px ${colors.rojoSangre},
      0 0 30px rgba(193, 18, 31, 0.8);
  }
`;

const bloodDrip = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: 0 100vh; }
`;

// Estilos
const HeaderContainer = styled(motion.header)`
  background: 
    linear-gradient(rgba(10, 10, 10, 0.98), rgba(20, 5, 5, 0.95)),
    url('https://www.transparenttextures.com/patterns/dark-leather.png');
  padding: 1.2rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);
  box-shadow: 
    0 5px 30px rgba(193, 18, 31, 0.3),
    inset 0 -1px 0 ${colors.rojoSangre}30;
  border-bottom: 1px solid ${colors.rojoSangre}50;

  @media (max-width: 768px) {
    padding: 1rem;
    flex-wrap: wrap;
  }
`;

const LogoContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  cursor: pointer;
  z-index: 1001;

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

const LogoText = styled(motion.h1)`
  font-family: 'UnifrakturCook', 'Cinzel Decorative', serif;
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  color: ${colors.rojoSangre};
  margin: 0;
  letter-spacing: 3px;
  position: relative;
  animation: ${hellfireGlow} 3s ease-in-out infinite;
  text-transform: uppercase;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, ${colors.rojoSangre}, transparent);
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Subtitle = styled(motion.span)`
  font-family: 'Poppins', sans-serif;
  color: ${colors.blancoHueso};
  font-size: clamp(0.6rem, 1.5vw, 0.8rem);
  letter-spacing: 4px;
  text-transform: uppercase;
  padding-left: 1.5rem;
  position: relative;
  font-weight: 300;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 20px;
    width: 3px;
    background: ${colors.rojoSangre};
    box-shadow: 0 0 10px ${colors.rojoSangre};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2.5rem;
  align-items: center;

  @media (max-width: 1024px) {
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuButton = styled(motion.button)`
  background: none;
  border: none;
  color: ${colors.blancoHueso};
  font-size: 1.8rem;
  cursor: pointer;
  display: none;
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileNav = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: 
    linear-gradient(rgba(10, 10, 10, 0.98), rgba(20, 5, 5, 0.97)),
    url('https://www.transparenttextures.com/patterns/dark-leather.png');
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  z-index: 1000;
  padding: 2rem;
`;

const NavLink = styled(motion.a).attrs(() => ({
  whileHover: { 
    y: -3,
    color: colors.rojoSangre
  },
  whileTap: { scale: 0.95 }
}))`
  font-family: 'Poppins', sans-serif;
  color: ${colors.blancoHueso};
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 2px;
  position: relative;
  text-decoration: none;
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  padding: 0.5rem 0;
  transition: all 0.3s ease;
  
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
    text-shadow: 0 0 10px ${colors.rojoSangre};
    
    &::before {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0.8rem 0;
  }
`;

const ExploreButton = styled(motion.a).attrs(() => ({
  whileHover: { 
    scale: 1.05,
    boxShadow: `0 0 30px ${colors.rojoSangre}`
  },
  whileTap: { scale: 0.95 }
}))`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(145deg, #1a1a1a, #333);
  color: ${colors.blancoHueso};
  padding: 0.8rem 2rem;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  text-transform: uppercase;
  border-radius: 50px;
  border: 2px solid ${colors.rojoSangre};
  cursor: pointer;
  text-decoration: none;
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  letter-spacing: 2px;
  box-shadow: 
    0 5px 20px rgba(0, 0, 0, 0.7),
    0 0 15px ${colors.rojoSangre}80;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      to bottom right,
      transparent 45%,
      ${colors.rojoSangre}20 50%,
      transparent 55%
    );
    animation: ${bloodDrip} 6s linear infinite;
  }
  
  &:hover {
    background: linear-gradient(145deg, #333, #1a1a1a);
    color: ${colors.rojoSangre};
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 1rem 2.5rem;
    margin-top: 1rem;
  }
`;

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <HeaderContainer
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', damping: 10, stiffness: 100 }}
    >
      <LogoContainer
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        <LogoText
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          FLAMAKING
        </LogoText>
        <Subtitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Periodismo Extremo
        </Subtitle>
      </LogoContainer>
      
      <Nav>
        <NavLink 
          href="#tiktoks"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          TikToks
        </NavLink>
        <NavLink 
          href="#about"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Quién es
        </NavLink>
        <NavLink 
          href="#bands"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          
        </NavLink>
        <NavLink 
          href="#events"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          
        </NavLink>
        
        <ExploreButton
          href="https://www.tiktok.com/@flamaking_"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, type: 'spring' }}
        >
          ¡Explorar!
        </ExploreButton>
      </Nav>

      <MobileMenuButton
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        whileTap={{ scale: 0.9 }}
      >
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </MobileMenuButton>

      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileNav
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ type: 'spring', damping: 20 }}
          >
            <NavLink 
              href="#tiktoks"
              onClick={() => setMobileMenuOpen(false)}
            >
              TikToks
            </NavLink>
            <NavLink 
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
            >
              Quién es
            </NavLink>
            <NavLink 
              href="#bands"
              onClick={() => setMobileMenuOpen(false)}
            >
              
            </NavLink>
            <NavLink 
              href="#events"
              onClick={() => setMobileMenuOpen(false)}
            >
              
            </NavLink>
            
            <ExploreButton
              href="https://www.tiktok.com/@flamaking_"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
            >
              ¡Explorar!
            </ExploreButton>
          </MobileNav>
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
};