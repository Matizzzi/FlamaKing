import React from 'react';
import { GlobalStyle } from './styles/GlobalStyle';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { Header } from './components/Header'; 
import { TikTokSection } from './components/TikToks';
import { AboutSection } from './components/About';
function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <AboutSection />
      {/* Aquí podrías agregar más secciones como Bands, Events, etc. */}
      <TikTokSection />
      {/* Luego agregamos aquí TikToks, About, Bands, Events */}
      <Footer />
    </>
  );
}

export default App;
