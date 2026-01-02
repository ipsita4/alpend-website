import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InstitutionalSection from './components/InstitutionalSection';
import UnitingInnovation from './components/UnitingInnovation';
import GlobalAccess from './components/GlobalAccess';
import TrustedExecution from './components/TrustedExecution';
import HighPerformanceGateway from './components/HighPerformanceGateway';
import EnhancedLiquidity from './components/EnhancedLiquidity';
import Features from './components/Features';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <InstitutionalSection />
      <UnitingInnovation />
      <GlobalAccess />
      <TrustedExecution />
      <HighPerformanceGateway />
      <EnhancedLiquidity />
      <Features />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
