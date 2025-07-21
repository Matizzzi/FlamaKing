import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { colors } from '../styles/theme';

// Animaciones consistentes
const bloodFlow = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: 100vh 100vh; }
`;

const textGlow = keyframes`
  0%, 100% { text-shadow: 0 0 5px ${colors.rojoSangre}; }
  50% { text-shadow: 0 0 15px ${colors.rojoSangre}; }
`;

// Estilo mejorado
const FooterContainer = styled.footer`
  position: relative;
  background: 
    linear-gradient(rgba(20, 20, 20, 0.9), rgba(10, 10, 10, 0.95)),
    url('https://www.transparenttextures.com/patterns/concrete-wall-2.png');
  padding: 2rem 0;
  text-align: center;
  font-size: 1rem;
  color: ${colors.blancoHueso};
  margin-top: 5rem;
  border-top: 3px solid ${colors.rojoSangre};
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
      transparent 65%,
      ${colors.rojoSangre}20 66%,
      ${colors.rojoSangre}20 70%,
      transparent 71%
    );
    background-size: 5px 5px;
    animation: ${bloodFlow} 90s linear infinite;
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
  opacity: 0.08;
  pointer-events: none;
  mix-blend-mode: multiply;
`;

const FooterText = styled(motion.p)`
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0 1rem;
  position: relative;
  z-index: 1;
  animation: ${textGlow} 3s ease-in-out infinite;
  
  strong {
    color: ${colors.rojoSangre};
    font-weight: 700;
  }
`;

const MetalPlate = styled.div`
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  height: 10px;
  background: linear-gradient(
    145deg,
    ${colors.grisMetal} 0%,
    #3a3a3a 50%,
    ${colors.grisMetal} 100%
  );
  border-radius: 0 0 10px 10px;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <BloodSplatter />
      <MetalPlate />
      
      <FooterText
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <strong>FLAMAKING</strong> – El canal del metal chileno © {new Date().getFullYear()} –<br />
        Hecho por un fan que <strong>sí escucha riffs de verdad</strong>.
      </FooterText>
    </FooterContainer>
  );
};