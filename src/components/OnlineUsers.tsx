import { useContext } from "react";
import { CountContext } from "../contexts/CountContext";

const OnlineUsers = () => {
  //USANDO O CONTEXTO NO COMPONENTE (NOME DO CONTEXTO)
  const count = useContext(CountContext);

  return <p>Online {count}</p>;
};

export default OnlineUsers;
