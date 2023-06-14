import Contact from "./components/Careers";
import Features from "./components/Services";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";


function App() {
  

  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <Pricing/>
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App;
