import "./App.css";

import axios from "axios";

function App() {
  const handleAddPost = async () => {
    /*  const res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
      userId: 98,
      title: "Titulo",
      body: "Corpo do post",
    });

    /*  const res = await axios.put("https://jsonplaceholder.typicode.com/posts", {
      userId: 98,
      title: "Titulo",
      body: "Corpo do post",
    });

    /*  const res = await axios.delete("https://jsonplaceholder.typicode.com/posts", {
      userId: 98,
      title: "Titulo",
      body: "Corpo do post",
    });

    console.log(res);*/
  };

  return (
    <>
      <button onClick={handleAddPost}>POST</button>
    </>
  );
}

export default App;
