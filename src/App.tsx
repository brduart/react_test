import "./App.css";

import axios from "axios";

function App() {
  //FUNÇÃO ASYNC/AWAIT
  const handleGetPosts = async () => {
    //REQUISIÇÃO GET
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/comments",
      {
        //AXIOS USANDO QUERY STRINGS
        params: {
          postId: 1,
          sort: "desc",
        },
      }
    );
    console.log(res.data);
  };

  return (
    <>
      <button onClick={handleGetPosts}>GET</button>
    </>
  );
}

export default App;
