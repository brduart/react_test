import "./App.css";

import axios from "axios";

function App() {
  const handleGetPosts = () => {
    //REQUISIÇÃO GET
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log(res.data);
    });
  };

  return (
    <>
      <button onClick={handleGetPosts}>GET</button>
    </>
  );
}

export default App;
