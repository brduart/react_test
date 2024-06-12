import { useRef } from "react";
import "./App.css";
import { api } from "./utils/api";

function App() {
  //CONTROLADOR (fetchAPI)
  const controller = new AbortController();

  const handleCancelRequest = async () => {
    //CANCELA TODAS AS REQUISIÇÕES LIGADAS AO CONTROLLER
    controller.abort();
  };

  const handleStartRequest = async () => {
    try {
      const res = await api.get("URL", {
        //CONECTANDO AO CONTROLADOR
        signal: controller.signal,
      });
    } catch (error) {
      console.log("erro");
    }
  };

  return (
    <>
      <button onClick={handleStartRequest}>START</button>
      <button onClick={handleCancelRequest}>CANCEL</button>
    </>
  );
}

export default App;
