import TopBar from './components/TopBar'
import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import { useTheme as useNextTheme } from 'next-themes'
import { useTheme, Container } from '@nextui-org/react'
// import { useEffect } from 'react';
// import { useState } from 'react';



function App() {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  const headings = [];

  for (let i = 1; i <= 100; i++) {
    headings.push(<h1 key={i}>Heading {i}</h1>);
  }
  return (
    <div>
      <TopBar setTheme={setTheme} isDark={isDark} type={type} />

      <Container justify="center" alignItems='center' >

        <Home />
        <Projects />
        <Skills />
        <Portfolio />
      </Container>
    </div>
  );
}

export default App;
