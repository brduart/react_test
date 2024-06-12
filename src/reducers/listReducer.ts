import { Item } from "../types/item";

//TYPES DAS ACTIONS
type AddAction = {
  //SEMELHANTE A UMA FUNÇÃO ONDE O TYPE SERIA "NOME DA FUNÇÃO" E PAYLOAD "PARAMETROS"

  /*const add = (pr: string) => {
  }*/

  type: "add";
  payload: string;
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
  payload: number;
};

type RemoveAction = {
  type: "remove";
  payload: number;
};

type ListActions = AddAction | EditTextAction | ToggleDoneAction | RemoveAction;

export const listReducer = (list: Item[], action: ListActions) => {
  //Executar ações
  //action.type; //Ação que será executada
  //action.payload; //Conteúdo a ser adicionado (Carga)

  //Retorna Lista atualizada
  return list;
};
