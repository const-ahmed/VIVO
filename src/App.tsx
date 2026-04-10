import './App.css';
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
  return (
    <div className="page">
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
