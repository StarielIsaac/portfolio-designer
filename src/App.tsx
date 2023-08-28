import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Projects from './components/Project';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import About from './components/About';
import Client from './components/Client';
import Nav from './components/Nav';
import Contact from './components/Contact';
import ContactME from './components/ContactME';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/galery" element={<Galery />} />
      <Route path="/contact" element={<ContactMe />} />
    </Routes>
  </BrowserRouter>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

function AboutMe() {
  return (
    <>
      <Nav />
      <About />
      <Client/>
      <Footer />
    </>
  );
}

function Galery() {
  return (
    <>
      <Nav />
      <Projects />
      <Footer />
    </>
  );
}

function ContactMe() {
  return (
    <>
      <Nav />
      <ContactME />
      {/* <Footer /> */}
    </>
  );
}


export default App;
