
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import logo from '../assets/flamaking-logo.png';
import { colors } from '../styles/theme';

// Animaciones mejoradas
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
      0 0 21px ${colors.rojoSangre},
      0 0 42px ${colors.rojoSangre},
      0 0 82px ${colors.rojoSangre};
  }
  20%, 24%, 55% { text-shadow: none; }
`;

const bloodDrip = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: 0 100vh; }
`;

// Contenedor principal con fondo texturizado
const HeroSection = styled.section`
  position: relative;
  padding: 4rem 2rem;
  background: 
    linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)),
    url('https://www.transparenttextures.com/patterns/concrete-wall-2.png');
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
      ${colors.rojoSangre}80 66%,
      ${colors.rojoSangre}80 70%,
      transparent 71%
    );
    background-size: 5px 5px;
    animation: ${bloodDrip} 60s linear infinite;
    pointer-events: none;
  }
`;

const LogoContainer = styled.div`
  position: relative;
  width: 280px;
  margin: 0 auto;
  animation: ${metalGlow} 3s ease-in-out infinite;
`;

const LogoImage = styled(motion.img)`
  width: 100%;
  border-radius: 8px;
  border: 3px solid ${colors.grisMetal};
  box-shadow: 
    0 0 20px ${colors.rojoSangre},
    inset 0 0 15px ${colors.rojoSangre};
  position: relative;
  z-index: 2;
  background: rgba(0, 0, 0, 0.7);
  padding: 0.5rem;
`;

const MetalBorder = styled.div`
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
  border-radius: 12px;
  z-index: 1;
  transform: rotate(1deg);
`;

const MainPhrase = styled(motion.h2)`
  font-family: 'UnifrakturCook', 'Cinzel Decorative', serif;
  color: ${colors.blancoHueso};
  text-align: center;
  font-size: 3rem;
  margin: 2rem 0 0.5rem;
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

const SubPhrase = styled(motion.p)`
  font-family: 'Poppins', sans-serif;
  color: ${colors.grisMetal};
  text-align: center;
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  text-shadow: 0 0 5px black;
  position: relative;
  
  strong {
    color: ${colors.rojoSangre};
    font-weight: 700;
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

export const Hero = () => {
  return (
    <HeroSection>
      <BloodSplatter />
      
      <LogoContainer>
        <MetalBorder />
        <LogoImage
          src={logo}
          alt="FlamaKing Logo"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: 'spring', bounce: 0.4 }}
        />
      </LogoContainer>

      <MainPhrase
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        ¡BUENA MI GENTE METALERA!
      </MainPhrase>

      <SubPhrase
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        El canal del <strong>metal extremo</strong> — Periodismo crudo con <strong>análisis social</strong> y <strong>gritos de resistencia</strong>
      </SubPhrase>
    </HeroSection>
  );
};