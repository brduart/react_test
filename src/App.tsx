import "./App.css";
import Header from "./components/Header";
import { CountProvider } from "./contexts/CountContext";

function App() {
  return (
    <>
      {/* CONTEXTO MAIS ORGANIZADO COM O PROVIDER JUNTO AO CONTEXTO */}
      <CountProvider>
        <Header />
      </CountProvider>
    </>
  );
}

export default App;
