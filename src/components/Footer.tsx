import { useContext } from "react";
import { PostContext } from "../contexts/PostsContext";

const Footer = () => {
  const postCount = useContext(PostContext);

  return <footer>Total de posts {postCount?.posts.length}</footer>;
};

export default Footer;
