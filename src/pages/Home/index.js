import React from 'react';

import Greeting from '../../components/Greeting';
import BenchPressSection from '../../components/BenchPressSection';
import GuitarPlayingSection from '../../components/GuitarPlayingSection';
import ReadingSection from '../../components/ReadingSection';
import Contact from '../../components/Contact';

function Home() {
  return (
    <>
      <Greeting />
      <BenchPressSection />
      <GuitarPlayingSection />
      <ReadingSection />
      <Contact />
    </>
  );
}

export default Home;
