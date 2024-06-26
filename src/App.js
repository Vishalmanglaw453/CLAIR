import "./App.css";
import Hero from "./Componets/Hero";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./Componets/About";
import Contect from "./Componets/Contect";
import Tokenomics from "./Componets/Tokenomics";
import Audited from "./Componets/Audited";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Roadmap from "./Componets/Roadmap";
import Frequently from "./Componets/Frequently";
import Footer from "./Componets/Footer";
import Buy from "./Componets/Buy";
import Socials from "./Componets/Socials";
import { useState, useEffect } from "react";
import Priloder from "./Componets/Priloder";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  useEffect(() => {
    AOS.init({ once: true, duration: 2500 });
  }, []);

  return (
    <div className="App">
       
      {isLoading === true ? (
        <>
        <Priloder/>
        </>
      ) : (
        <>
          <Hero />
          <Buy />
          <About />
          <Contect />
          <Tokenomics />
          <Audited />
          <Roadmap />
          <Frequently />
          <Socials />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
