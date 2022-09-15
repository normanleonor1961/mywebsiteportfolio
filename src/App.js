import "./App.css";
import { Routes, Route } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Home from "./containers/home";
import About from "./containers/about";
import Skills from "./containers/skills";
import Resume from "./containers/resume";
import Portfolio from "./containers/portfolio";
import Contact from "./containers/contact";
import Navbar from "./components/navBar";
import particlesConfig from "./helpers/particlesConfig";

const particleInit = async (main) => {
  await loadFull(main);
};

function App() {
  return (
    <div className="App">
      {/* particles */}
      <Particles id="particles" options={particlesConfig} init={particleInit} />
      {/* navbar component */}
      <Navbar />
      {/* main page content */}

      <Routes>
        {/* create all routes */}
        <Route path="/" index element={<Home />} />
        <Route path="/about" index element={<About />} />
        <Route path="/skills" index element={<Skills />} />
        <Route path="/resume" index element={<Resume />} />
        <Route path="/portfolio" index element={<Portfolio />} />
        <Route path="/contact" index element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
