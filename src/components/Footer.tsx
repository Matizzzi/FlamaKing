import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/theme';

const FooterContainer = styled.footer`
  background-color: ${colors.grisMetal};
  padding: 1rem 0;
  text-align: center;
  font-size: 0.9rem;
  color: ${colors.blancoHueso};
  margin-top: 3rem;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      FlamaKing – El canal del metal chileno © {new Date().getFullYear()} – Hecho por un fan que sí escucha riffs de verdad.
    </FooterContainer>
  );
};
