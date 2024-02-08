import { createContext, useState } from "react";

export const BlogContext = createContext<any>(null);
import seed from "../data.json";

export interface CommentItem {
  id: number;
  content: string;
  commentDate: string;
}
export interface BlogItem {
  id: number;
  title: string;
  content: string;
  publishDate: string;
  comments: CommentItem[];
  tags: string[];
}
const BlogContextProvider = ({ children }: any) => {
  const [data, setData] = useState<any>(seed);
  const [activeSideBarItemIndex, setActiveSideBarItemIndex] =
    useState<number>(0);
  console.log(data);
  
  return (
    <BlogContext.Provider
      value={{
        activeSideBarItemIndex,
        setActiveSideBarItemIndex,
        data,
        setData,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
