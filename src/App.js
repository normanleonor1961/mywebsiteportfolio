import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./containers/home";
import About from "./containers/about";
import Skills from "./containers/skills";
import Resume from "./containers/resume";
import Portfolio from "./containers/portfolio";
import Contact from "./containers/contact";
import Navbar from "./components/navBar";

function App() {
  return (
    <div className="App">
      {/* particles */}
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
