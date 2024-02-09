import { createContext, useState } from "react";

export const BlogContext = createContext<any>(null);
import seed from "../data.json";
import commentSeed from "../comment.json";
export interface CommentItem {
  id: number;
  username: string;
  content: string;
  commentDate: string;
  articleId: number;
  blocked: boolean;
}
export interface BlogItem {
  id: number;
  title: string;
  content: string;
  publishDate: string;
  comments: CommentItem[];
  tags: string[];
  views: number;
}
const BlogContextProvider = ({ children }: any) => {
  const [data, setData] = useState<BlogItem[]>(seed);
  const [comments, setComments] = useState<CommentItem[]>(commentSeed);
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
        comments,
        setComments,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
