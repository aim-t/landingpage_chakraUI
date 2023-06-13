import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Testimonials from "./components/Testimonials";


function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <Testimonials />
      {/* <Newsletter /> */}
      <Contact />
      <Footer />


    </>
  )
}

export default App;
