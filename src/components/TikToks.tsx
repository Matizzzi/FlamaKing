import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FaTiktok } from 'react-icons/fa';
import { colors } from '../styles/theme';

// Animaciones
const metalPulse = keyframes`
  0% { 
    box-shadow: 0 0 10px ${colors.rojoSangre}, 
                inset 0 0 5px ${colors.rojoSangre}; 
  }
  50% { 
    box-shadow: 0 0 25px ${colors.rojoSangre}, 
                inset 0 0 15px ${colors.rojoSangre}; 
  }
  100% { 
    box-shadow: 0 0 10px ${colors.rojoSangre}, 
                inset 0 0 5px ${colors.rojoSangre}; 
  }
`;

const bloodFlow = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: 100vh 100vh; }
`;

// Estilos
const Section = styled.section`
  padding: 5rem 2rem;
  background: 
    linear-gradient(rgba(10, 10, 10, 0.95), rgba(30, 7, 7, 0.85)),
    url('https://www.transparenttextures.com/patterns/concrete-wall-2.png');
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
  text-align: center;
  font-size: 3.5rem;
  margin-bottom: 3rem;
  text-shadow: 
    0 0 10px ${colors.rojoSangre},
    0 0 20px rgba(193, 18, 31, 0.5);
  position: relative;
  letter-spacing: 3px;
  animation: ${metalPulse} 4s infinite ease-in-out;
  
  &::after {
    content: '';
    display: block;
    width: 250px;
    height: 4px;
    background: linear-gradient(90deg, transparent, ${colors.rojoSangre}, transparent);
    margin: 1.5rem auto 0;
  }
`;

const VideosContainer = styled.div`
  display: flex;
  gap: 2.5rem;
  overflow-x: auto;
  padding: 2rem 1rem;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  max-width: 1400px;
  margin: 0 auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const VideoCard = styled(motion.div).attrs(() => ({
  whileHover: { 
    y: -15,
    boxShadow: `0 15px 30px ${colors.rojoSangre}80`
  }
}))`
  min-width: 350px;
  scroll-snap-align: start;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 
    0 10px 20px rgba(0, 0, 0, 0.7),
    inset 0 0 10px ${colors.rojoSangre}80;
  background: #000;
  border: 2px solid ${colors.grisMetal};
  transition: all 0.3s ease;
`;

const VideoWrapper = styled.div`
  position: relative;
  padding-top: 125%; // Relación de aspecto para TikTok
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const VideoCaption = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
  padding: 1.5rem 1rem;
  z-index: 2;
`;

const CaptionText = styled.p`
  font-family: 'Poppins', sans-serif;
  color: ${colors.blancoHueso};
  font-weight: 700;
  margin: 0;
  font-size: 1rem;
  text-shadow: 0 0 8px #000;
  line-height: 1.4;
`;

const PlatformIcon = styled(motion.div).attrs(() => ({
  whileHover: { scale: 1.3, rotate: 10 }
}))`
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid ${colors.grisMetal};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  color: ${colors.blancoHueso};
  font-size: 1.2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
`;

// Videos de TikTok
const tiktoks = [
  {
    id: '1',
    url: 'https://www.tiktok.com/@flamaking_/video/7524577000804060421',
    embedUrl: 'https://www.tiktok.com/embed/v2/7524577000804060421',
    caption: '¡Concierto brutal en el infierno! 🔥',
    platform: 'tiktok'
  },
  {
    id: '2',
    url: 'https://www.tiktok.com/@flamaking_/video/7527446964368067896',
    embedUrl: 'https://www.tiktok.com/embed/v2/7527446964368067896',
    caption: 'Nuevo riff demoníaco 🎸',
    platform: 'tiktok'
  },
  {
    id: '3',
    url: 'https://www.tiktok.com/@flamaking_/video/7527410572615339270',
    embedUrl: 'https://www.tiktok.com/embed/v2/7527410572615339270',
    caption: 'Growling nivel diablo 👹',
    platform: 'tiktok'
  },
  {
    id: '4',
    url: 'https://www.tiktok.com/@flamaking_/video/7522734103712500997',
    embedUrl: 'https://www.tiktok.com/embed/v2/7522734103712500997',
    caption: 'Metal extremo para almas oscuras',
    platform: 'tiktok'
  },
  {
    id: '5',
    url: 'https://www.tiktok.com/@flamaking_/video/7527080615582125368',
    embedUrl: 'https://www.tiktok.com/embed/v2/7527080615582125368',
    caption: 'Destruyendo guitarras 🤘',
    platform: 'tiktok'
  }
];

export const TikTokSection = () => {
  return (
    <Section id="tiktoks">
      <BloodSplatter />
      
      <Title
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        TIKTOKS DESTACADOS
      </Title>

      <VideosContainer>
        {tiktoks.map((video) => (
          <VideoCard 
            key={video.id}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <VideoWrapper>
              <iframe
                src={video.embedUrl}
                title={`TikTok de FlamaKing ${video.id}`}
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </VideoWrapper>
            
            <VideoCaption>
              <CaptionText>{video.caption}</CaptionText>
            </VideoCaption>
            
            <PlatformIcon>
              <FaTiktok color="#ff0050" />
            </PlatformIcon>
          </VideoCard>
        ))}
      </VideosContainer>
    </Section>
  );
};