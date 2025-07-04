import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import FlowerDecoration from "./components/FlowerDecoration";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Footer from "./components/Footer";
import "./scss/main.scss";
import { useRef } from "react";

function App() {
  const homeRef = useRef(null);
  const shopRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <>
      <Header
        onShopClick={() => {
          shopRef.current.scrollIntoView({
            behavior: "smooth",
          });
        }}
        onLogoClick={() => {
          homeRef.current.scrollIntoView({
            behavior: "smooth",
          });
        }}
        onContactClick={() => {
          contactRef.current.scrollIntoView({
            behavior: "smooth",
          });
        }}
      />
      <div ref={homeRef}>
        <Home />
      </div>
      <About />
      <div ref={shopRef}>
        <Shop />
      </div>
      <FlowerDecoration />
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
