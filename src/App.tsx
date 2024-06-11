import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    //LÓGICA AQUI

    //CLEANUP PARA FINALIZAR EFFECTS CONTÍNUOS
    return () => {
      console.log("Cleanup Ok!");
    };
  }, []);

  useEffect(() => {
    //Ex: ADICIONANDO LISTENER DE SCROLL

    window.addEventListener("scroll", () => {});

    //CLEANUP PARA FINALIZAR LISTENER DE SCROLL
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return <></>;
}

export default App;
