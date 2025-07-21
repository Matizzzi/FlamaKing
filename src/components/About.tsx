import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { colors } from '../styles/theme';

// Animaciones
const textGlow = keyframes`
  0%, 100% { text-shadow: 0 0 10px ${colors.rojoSangre}; }
  50% { text-shadow: 0 0 20px ${colors.rojoSangre}; }
`;

const bloodFlow = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: 100vh 100vh; }
`;

// Estilos
const Section = styled.section`
  padding: 6rem 2rem;
  background: 
    linear-gradient(rgba(10, 10, 10, 0.95), rgba(30, 7, 7, 0.85)),
    url('https://www.transparenttextures.com/patterns/concrete-wall-2.png');
  position: relative;
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

const Title = styled(motion.h2)`
  font-family: 'UnifrakturCook', 'Cinzel Decorative', serif;
  color: ${colors.rojoSangre};
  font-size: 3.5rem;
  margin-bottom: 3rem;
  text-shadow: 0 0 10px ${colors.rojoSangre};
  letter-spacing: 3px;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    display: block;
    width: 150px;
    height: 3px;
    background: linear-gradient(90deg, transparent, ${colors.rojoSangre}, transparent);
    margin: 1.5rem auto;
  }
`;

const ContentWrapper = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
`;

const Description = styled(motion.p)`
  font-family: 'Poppins', sans-serif;
  color: ${colors.blancoHueso};
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 3rem;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
`;

const HighlightPhrase = styled(motion.blockquote)`
  font-family: 'UnifrakturCook', 'Cinzel Decorative', serif;
  color: ${colors.rojoSangre};
  font-size: 2.5rem;
  margin: 3rem auto;
  padding: 2rem;
  position: relative;
  max-width: 600px;
  animation: ${textGlow} 3s infinite ease-in-out;

  &::before,
  &::after {
    content: '"';
    font-size: 3rem;
    color: ${colors.grisMetal};
    position: absolute;
  }

  &::before {
    top: 0;
    left: -1rem;
  }

  &::after {
    bottom: -2rem;
    right: -1rem;
  }
`;

const MetalPlate = styled.div`
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: linear-gradient(
    145deg,
    ${colors.grisMetal} 0%,
    #3a3a3a 50%,
    ${colors.grisMetal} 100%
  );
  border-radius: 5px;
  z-index: -1;
  transform: rotate(0.5deg);
`;

export const AboutSection = () => {
  return (
    <Section id="about">
      <BloodSplatter />
      
      <Title
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        ¿QUIÉN ES FLAMAKING?
      </Title>

      <ContentWrapper
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Description>
          Periodista chileno y <strong>metalhead sin filtro</strong>. Difunde bandas de metal y rock con mensajes sociales, políticos e históricos. Especializado en <strong>guturales, análisis crudos</strong> y cultura underground. Autodenominado <strong>embajador de la distorsión crítica</strong>.
        </Description>

        <HighlightPhrase
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <MetalPlate />
          EL METAL NO ES RUIDO. ES RESISTENCIA.
        </HighlightPhrase>
      </ContentWrapper>
    </Section>
  );
};