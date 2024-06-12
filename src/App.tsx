import "./App.css";
import Header from "./components/Header";
import { CountContext, CountInitialData } from "./contexts/CountContext";

function App() {
  return (
    <>
      {/*CRIAÇÃO DO PROVIDER DO CONTEXTO E O VALOR PADRÃO INICIAL DO CONTEXTO - 
      TODOS OS COMPONENTES DENTRO DE HEADER PODERÃO RECEBER O VALOR DO CONTEXTO*/}
      <CountContext.Provider value={CountInitialData}>
        <Header />
      </CountContext.Provider>
    </>
  );
}

export default App;
