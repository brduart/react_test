import { useContext } from "react";
import { PostContext } from "../contexts/PostsContext";

const Posts = () => {
  const posts = useContext(PostContext);

  return (
    <div>
      {posts?.posts.map((i) => (
        <>
          <h1>{i.title}</h1>
          <h3>{i.body}</h3>
          <button onClick={() => posts.removePost(i.id)}>remover</button>
        </>
      ))}
    </div>
  );
};

export default Posts;
