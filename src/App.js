import "./index.css";
import NavBar from "./Components/Header/NavBar";
import Hero from "./Components/Main/Hero";
import Gallery from "./Components/Gallery/Gallery";
import Testimonial from "./Components/Testimonial/Testimonial";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Gallery />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
