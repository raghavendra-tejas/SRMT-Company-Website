import "./index.css";
import NavBar from "./Components/Header/NavBar";
import Hero from "./Components/Main/Hero";
import Gallery from "./Components/Gallery/Gallery";
import Testimonial from "./Components/Testimonial/Testimonial";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Gallery />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
