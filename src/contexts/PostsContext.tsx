import {
  ReactNode,
  createContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { postReducer } from "../reducers/reducer";
import { Post } from "../types/post";

type PostContentType = {
  posts: Post[];
  addPost: (title: string, body: string) => void;
  removePost: (id: number) => void;
};

const STORAGE_KEY = "posts";

export const PostContext = createContext<PostContentType | null>(null);

type Props = {
  children: ReactNode;
};

export const PostProvider = ({ children }: Props) => {
  const [posts, dispatch] = useReducer(
    postReducer,
    JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")
    //PERSISTINDO DADOS EM LOCAL STORAGE
  );

  //PERSISTINDO DADOS EM LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  }, [posts]);

  const addPost = (title: string, body: string) => {
    dispatch({
      type: "add",
      payload: {
        title,
        body,
      },
    });
  };

  const removePost = (id: number) => {
    dispatch({
      type: "remove",
      payload: {
        id,
      },
    });
  };

  return (
    <PostContext.Provider value={{ posts, addPost, removePost }}>
      {children}
    </PostContext.Provider>
  );
};
