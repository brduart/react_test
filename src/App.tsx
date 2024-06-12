import { useRef } from "react";
import "./App.css";
import { api } from "./utils/api";

function App() {
  const input = useRef<HTMLInputElement>(null);

  //FORMDATA COM AXIOS

  const handleSendFile = async () => {
    if (input.current?.files && input.current?.files.length > 0) {
      const file = input.current.files[0];

      const data = new FormData();
      data.append("name", "name");
      data.append("file", file);

      const res = await api.post("/", data, {
        //NÃO É OBRIGATORIO
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res.data);
    }
  };
  return (
    <>
      <input type="file" ref={input} />
      <button onClick={handleSendFile}></button>
    </>
  );
}

export default App;
