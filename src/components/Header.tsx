import { useContext, useState } from "react";
import { PostContext } from "../contexts/PostsContext";

const Header = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const posts = useContext(PostContext);

  const handleCreatePost = () => {
    posts?.addPost(title, body);
  };
  return (
    <header>
      <h1 className="text-3xl">Título</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />

      <button onClick={handleCreatePost}>Criar post</button>
    </header>
  );
};

export default Header;
