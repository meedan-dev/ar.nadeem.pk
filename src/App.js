import TopBar from './components/TopBar'
import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'
// import Portfolio from './components/Portfolio'
import { useTheme as useNextTheme } from 'next-themes'
import { useTheme, Container } from '@nextui-org/react'
import './App.css';



function App() {



  const scrollToElement = (id) => {
    id = '#'.concat(id)
    console.log(id);
    const element = document.getElementById(id);
    console.log(element)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  const headings = [];

  for (let i = 1; i <= 100; i++) {
    headings.push(<h1 key={i}>Heading {i}</h1>);
  }
  return (
    <div id="#Home">
      <TopBar setTheme={setTheme} isDark={isDark} type={type} scrollToElement={scrollToElement} />

      <Container className='body' >

        <Home />
        <Projects />
        <Skills />

        {/* <Portfolio /> */}
      </Container>
    </div>
  );
}

export default App;
