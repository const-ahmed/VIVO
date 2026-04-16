import { useState } from 'react';
import './App.css';
import DisclaimerModal from './components/DisclaimerModal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoBar from './components/LogoBar';
import WhyChooseUs from './components/WhyChooseUs';
import Features from './components/Features';
import OurResults from './components/OurResults';
import OurProcess from './components/OurProcess';
import Testimonials from './components/Testimonials';
import OurClients from './components/OurClients';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="page">
      {!accepted && <DisclaimerModal onAccept={() => setAccepted(true)} />}
      <Navbar />
      <Hero />
      <LogoBar />
      <WhyChooseUs />
      <Features />
      <OurResults />
      <OurProcess />
      <Testimonials />
      <OurClients />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
