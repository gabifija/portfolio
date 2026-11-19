import Navbar from './components/Navbar';
import Home from './components/Home';
import Work from './components/Work';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

// Section order follows src/sections.ts.
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Work />
        <About />
        <Skills />
        <Contact />
      </main>
    </>
  );
}

export default App;
