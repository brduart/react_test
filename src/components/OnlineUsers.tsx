import { useContext } from "react";
import { CountContext } from "../contexts/CountContext";

const OnlineUsers = () => {
  //USANDO O CONTEXTO NO COMPONENTE (NOME DO CONTEXTO)
  const count = useContext(CountContext);

  //FUNÇÃO PARA ATUALIZAR O STATE DO CONTEXT
  const handleZero = () => {
    count?.setOnlineCount(0);
  };

  return (
    <>
      <p>Online: {count?.onlineCount}</p>
      <button onClick={handleZero}>Zerar</button>
    </>
  );
};

export default OnlineUsers;
