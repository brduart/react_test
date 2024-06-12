import { ReactNode, createContext, useState } from "react";

//TYPE DO CONTEXT INICIAL
type CountContextType = {
  onlineCount: number;
  setOnlineCount: (n: number) => void;
};

//CRIAÇÃO DO CONTEXTO
export const CountContext = createContext<CountContextType | null>(null); //()VALOR PADRÃO, NUMBER, ARRAY ETC...

//CHILDREN TYPE
type Props = { children: ReactNode };

//PROVIDER DO CONTEXT
export const CountProvider = ({ children }: Props) => {
  //VALOR NO STATE (VALOR E ALTERAÇÃO DE VALOR)
  const [onlineCount, setOnlineCount] = useState(100);

  return (
    <CountContext.Provider value={{ onlineCount, setOnlineCount }}>
      {children}
      {/* PROVIDER COM RETORNO DO STATE (ALTERAR E MOSTRAR VALOR) E CHILDREN PROP*/}
    </CountContext.Provider>
  );
};
