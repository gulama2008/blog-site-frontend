import { createContext, useEffect, useState } from "react";

export const BlogContext = createContext<any>(null);
import seed from "../data.json";
import commentSeed from "../comment.json";
import tagSeed from "../tags.json";
import { Utils } from "../services/utils";
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
  tags: number[];
  views: number;
}

export interface TagItem {
  id: number;
  name: string;
}
const BlogContextProvider = ({ children }: any) => {
  const [data, setData] = useState<BlogItem[]>(seed);
  const [comments, setComments] = useState<CommentItem[]>(commentSeed);
  const [tags, setTags] = useState<TagItem[]>(tagSeed);
  const [activeSideBarItemIndex, setActiveSideBarItemIndex] =
    useState<number>(0);
  const [views, setViews] = useState<number>(0);
  const [viewsChange, setViewsChange] = useState<number>(0);
  useEffect(() => {
    const views = Utils.countViews(data);
    setViews(views);
  }, [viewsChange]);
  return (
    <BlogContext.Provider
      value={{
        activeSideBarItemIndex,
        setActiveSideBarItemIndex,
        data,
        setData,
        comments,
        setComments,
        tags,
        setTags,
        views,
        setViews,
        viewsChange,
        setViewsChange,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
