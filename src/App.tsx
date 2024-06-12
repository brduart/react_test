import { useReducer } from "react";
import "./App.css";
import { listReducer } from "./reducers/listReducer";

function App() {
  const [list, dispatch] = useReducer(listReducer, []);
  //DECLARAÇÃO DO REDUCER NO COMPONENTE (NOME DA FUNÇÃO REDUCER, VALOR INICIAL)

  //FUNÇÃO PARA EXECUTAR A ACTION
  const handleAddClick = () => {
    dispatch({
      type: "add",
      payload: {
        text: "Novo",
      },
    });
  };

  dispatch({
    type: "remove",
    payload: {
      id: 10,
    },
  });

  dispatch({
    type: "toggleDone",
    payload: {
      id: 10,
    },
  });

  dispatch({
    type: "editText",
    payload: {
      id: 1,
      newText: "new text",
    },
  });

  return (
    <>
      <button onClick={handleAddClick}></button>
    </>
  );
}

export default App;
