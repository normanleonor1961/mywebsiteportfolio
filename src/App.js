import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./containers/home/home";
import About from "./containers/about/about";
import Skills from "./containers/skills";
import Resume from "./containers/resume";
import Portfolio from "./containers/portfolio";
import Contact from "./containers/contact";
import Navbar from "./components/navBar";

function App() {
  return (
    <div className="App">
      {/* navbar component */}
      <div className="App__navbar-wrapper">
        <Navbar />
      </div>
      {/* main page content */}
      <div className="App__main-content-wrapper">
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
    </div>
  );
}

export default App;
