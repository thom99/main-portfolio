import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      {/* <div className="relative z-0 bg-[#0F172A]"> */}
      {/* <div className="relative z-0 bg-[#212529]"> */}
      <div className="relative z-0 bg-[#0b090a]">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <div className="relative z-0">
            <Navbar />
            <StarsCanvas />
          </div>
          <div className="relative z-0">
            <Hero />
            <StarsCanvas />
          </div>
        </div>
        <About />
        <Tech />
        <Experience />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
