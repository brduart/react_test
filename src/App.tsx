import "./App.css";
import { api } from "./utils/api";

function App() {
  const handleAddPost = async () => {
    //AXIOS COMO INSTÂNCIA
    const res = await api.post("/posts", {
      userId: 10,
      title: "titulo",
      body: "conteudo",
    });

    console.log(res);
  };

  return (
    <>
      <button onClick={handleAddPost}>POST</button>
    </>
  );
}

export default App;
