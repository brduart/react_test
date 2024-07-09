import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import About1 from "./pages/About1";
import About2 from "./pages/About2";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <header>HEADER</header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/about1" element={<About1 />} />
          <Route path="/about/about2" element={<About2 />} />
        </Routes>
      </main>
      <footer>FOOTER</footer>
    </>
  );
}

export default App;
