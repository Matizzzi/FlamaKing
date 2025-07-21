import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FaTiktok, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { colors } from '../styles/theme';

// Animaciones consistentes
const metalGlow = keyframes`
  0% { filter: drop-shadow(0 0 5px ${colors.rojoSangre}) brightness(1); }
  50% { filter: drop-shadow(0 0 15px ${colors.rojoSangre}) brightness(1.3); }
  100% { filter: drop-shadow(0 0 5px ${colors.rojoSangre}) brightness(1); }
`;

const textFlicker = keyframes`
  0%, 18%, 22%, 25%, 53%, 57%, 100% {
    text-shadow: 
      0 0 7px ${colors.rojoSangre},
      0 0 10px ${colors.rojoSangre},
      0 0 21px ${colors.rojoSangre};
  }
  20%, 24%, 55% { text-shadow: none; }
`;

const bloodDrip = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: 0 100vh; }
`;

// Estilos consistentes con Hero
const ContactSection = styled.section`
  position: relative;
  padding: 4rem 2rem;
  background: 
    linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)),
    url('https://www.transparenttextures.com/patterns/concrete-wall-2.png');
  overflow: hidden;
  text-align: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      transparent 65%,
      ${colors.rojoSangre}80 66%,
      ${colors.rojoSangre}80 70%,
      transparent 71%
    );
    background-size: 5px 5px;
    animation: ${bloodDrip} 60s linear infinite;
    pointer-events: none;
  }
`;

const BloodSplatter = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-image: url('https://www.transparenttextures.com/patterns/blood.png');
  opacity: 0.1;
  pointer-events: none;
  mix-blend-mode: multiply;
`;

const Title = styled(motion.h2)`
  font-family: 'UnifrakturCook', 'Cinzel Decorative', serif;
  color: ${colors.blancoHueso};
  text-align: center;
  font-size: 3rem;
  margin-bottom: 2rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  animation: ${textFlicker} 4s ease-in-out infinite;
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 150px;
    height: 3px;
    background: linear-gradient(90deg, transparent, ${colors.rojoSangre}, transparent);
    margin: 1rem auto;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 3rem 0;
  flex-wrap: wrap;
`;

const SocialIconWrapper = styled.div`
  position: relative;
  width: 80px;
  margin: 0 auto;
  animation: ${metalGlow} 3s ease-in-out infinite;
`;

const SocialIconBorder = styled.div`
  position: absolute;
  top: -8px;
  left: -8px;
  right: -8px;
  bottom: -8px;
  background: linear-gradient(
    145deg,
    ${colors.grisMetal} 0%,
    #3a3a3a 50%,
    ${colors.grisMetal} 100%
  );
  border-radius: 50%;
  z-index: 1;
  transform: rotate(1deg);
`;

const SocialIcon = styled(motion.a)`
  position: relative;
  z-index: 2;
  color: ${colors.blancoHueso};
  font-size: 2.5rem;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${colors.grisMetal};
  box-shadow: 
    0 0 15px ${colors.rojoSangre},
    inset 0 0 10px ${colors.rojoSangre};
  transition: all 0.3s ease;
  
  &:hover {
    color: ${colors.rojoSangre};
    transform: translateY(-5px);
  }
`;

const ContactButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  background: rgba(0, 0, 0, 0.7);
  color: ${colors.blancoHueso};
  padding: 1rem 2rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 5px;
  border: 2px solid ${colors.grisMetal};
  cursor: pointer;
  margin-top: 1rem;
  text-decoration: none;
  font-size: 1.1rem;
  letter-spacing: 1px;
  box-shadow: 
    0 0 15px ${colors.rojoSangre},
    inset 0 0 10px ${colors.rojoSangre};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      transparent 45%,
      ${colors.rojoSangre}20 50%,
      transparent 55%
    );
    animation: ${bloodDrip} 15s linear infinite;
  }
  
  &:hover {
    color: ${colors.rojoSangre};
    border-color: ${colors.rojoSangre};
  }
`;

export const Contact = () => {
  return (
    <ContactSection id="contacto">
      <BloodSplatter />
      
      <Title
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        SÍGUELO Y APOYA EL METAL
      </Title>
      
      <SocialContainer>
        <SocialIconWrapper>
          <SocialIconBorder />
          <SocialIcon 
            href="https://www.tiktok.com/@flamaking_" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaTiktok />
          </SocialIcon>
        </SocialIconWrapper>
        
        <SocialIconWrapper>
          <SocialIconBorder />
          <SocialIcon 
            href="https://www.instagram.com/flamakingtv/" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaInstagram />
          </SocialIcon>
        </SocialIconWrapper>
        
      
      </SocialContainer>
      
      <ContactButton
        href="mailto:contacto@flamaking.com"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <FaEnvelope />
        Contacto para prensa / colaboraciones
      </ContactButton>
    </ContactSection>
  );
};