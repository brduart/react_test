import { ReactNode, createContext, useReducer, useState } from "react";
import { postReducer } from "../reducers/reducer";

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
  const [posts, dispatch] = useReducer(postReducer, []);

  const addPost = (title: string, body: string) => {
    dispatch({
      type: "add",
      payload: {
        title,
        body,
      },
    });
  };

  return (
    <PostContext.Provider value={{ posts, addPost }}>
      {children}
    </PostContext.Provider>
  );
};
