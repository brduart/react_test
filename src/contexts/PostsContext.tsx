import { ReactNode, createContext, useState } from "react";

type Post = {
  id: number;
  title: string;
  body: string;
};

type PostContentType = {
  posts: Post[];
  addPost: (title: string, body: string) => void;
};

export const PostContext = createContext<PostContentType | null>(null);

type Props = {
  children: ReactNode;
};

export const PostProvider = ({ children }: Props) => {
  const [posts, setPosts] = useState<Post[]>([]);

  const addPost = (title: string, body: string) => {
    setPosts([...posts, { id: posts.length, title, body }]);
  };

  return (
    <PostContext.Provider value={{ posts, addPost }}>
      {children}
    </PostContext.Provider>
  );
};
