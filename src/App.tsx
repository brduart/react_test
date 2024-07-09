import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import AboutInfo from "./pages/AboutInfo";
import Error404 from "./pages/Error404";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <header>HEADER</header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/about/:slug" element={<AboutInfo />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
      <footer>FOOTER</footer>
    </>
  );
}

export default App;
