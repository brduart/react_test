import { Item } from "../types/item";

//TYPES DAS ACTIONS
type AddAction = {
  //SEMELHANTE A UMA FUNÇÃO ONDE O TYPE SERIA "NOME DA FUNÇÃO" E PAYLOAD "PARAMETROS"

  /*const add = (pr: string) => {
  }*/

  type: "add";
  payload: {
    text: string;
  };
  //OU payload: {text: string}
};

type EditTextAction = {
  type: "editText";
  payload: {
    id: number;
    newText: string;
  };
};

type ToggleDoneAction = {
  type: "toggleDone";
  payload: {
    id: number;
  };
};

type RemoveAction = {
  type: "remove";
  payload: {
    id: number;
  };
};

type ListActions = AddAction | EditTextAction | ToggleDoneAction | RemoveAction;

export const listReducer = (list: Item[], action: ListActions): Item[] => {
  //Executar ações
  //action.type; //Ação que será executada
  //action.payload; //Conteúdo a ser adicionado (Carga)

  switch (action.type) {
    case "add":
      return [
        ...list,
        {
          id: list.length,
          text: action.payload.text,
          done: false,
        },
      ];

    case "editText":
      return list.map((i) => {
        if (i.id === action.payload.id) {
          i.text = action.payload.newText;
        }
        return i;
      });
    case "remove":
      return list.filter((i) => i.id !== action.payload.id);

    case "toggleDone":
      return list.map((i) => {
        if (i.id === action.payload.id) {
          i.done = !i.done;
        }
        return i;
      });
    default:
      return list;
  }

  //Retorna Lista atualizada
};
