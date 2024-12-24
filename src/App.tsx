import About from "./components/About";
import BgWrapper from "./components/BgWrapper";
import Characters from "./components/Characters";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <BgWrapper img="./bg.jpg">
        <div className="absolute inset-0 backdrop-blur-sm bg-black bg-opacity-20">
          <Hero />
        </div>
      </BgWrapper>
      <About />
      <Characters />
      <Footer />
    </>
  );
};

export default App;
