import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoBar from './components/LogoBar';
import WhyChooseUs from './components/WhyChooseUs';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import OurClients from './components/OurClients';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="page">
      <Navbar />
      <Hero />
      <LogoBar />
      <WhyChooseUs />
      <Features />
      <Testimonials />
      <OurClients />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
