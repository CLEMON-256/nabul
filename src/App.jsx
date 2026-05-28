import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import WelcomeFacilities from './components/WelcomeFacilities';
import AdmissionCTA from './components/AdmissionCTA';
import AimsValues from './components/AimsValues';
import Curriculum from './components/Curriculum';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <WelcomeFacilities />
      <AdmissionCTA />
      <AimsValues />
      <Curriculum />
      <Testimonials />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
