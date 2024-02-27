import { createContext, useEffect, useState } from "react";

export const BlogContext = createContext<any>(null);
import seed from "../data.json";
import commentSeed from "../comment.json";
import tagSeed from "../tags.json";
import userSeed from "../user.json";
import { Utils } from "../services/utils";
import { ArticleService } from "../services/article-service";
import { TagService } from "../services/tag-services";
import { CommentService } from "../services/comment-service";
export interface CommentItem {
  id: number;
  // userId: number;
  content: string;
  commentDate: string;
  user: UserItem;
  // articleId: number;
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

export interface ArticleItem {
  id: number;
  title: string;
  content: string;
  publishDate: string;
  comments: CommentItem[];
  tags: TagItem[];
  views: number;
}

export interface TagItem {
  id: number;
  name: string;
  articles?: ArticleItem[];
}

export interface UserItem {
  id: number;
  username: string;
  password?: string;
}
const BlogContextProvider = ({ children }: any) => {
  const [data, setData] = useState<ArticleItem[]>([]);
  const [displayData, setDisplayData] = useState<ArticleItem[]>([]);
  const [comments, setComments] = useState<CommentItem[]>([]);
  const [tags, setTags] = useState<TagItem[]>([]);
  const [users, setUsers] = useState<UserItem[]>(userSeed);
  const [activeSideBarItemIndex, setActiveSideBarItemIndex] =
    useState<number>(0);
  const [views, setViews] = useState<number>(0);
  const [dataChange, setDataChange] = useState<number>(0);
  const [commentChange, setCommentChange] = useState<number>(0);
  const [tagChange, setTagChange] = useState<number>(0);
  const [viewsChange, setViewsChange] = useState<number>(0);
  const [currentArticleId, setCurrentArticleId] = useState<number>();
  const [showTagModal, setShowTagModal] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  // const [tagsOfCurrentArticle, setTagsOfCurrentArticle] = useState<TagItem[]>([]);

  useEffect(() => {
    ArticleService.get()
      .then((data) => {
        setData(data);
        setDisplayData(data);
      })
      .catch((e) => console.error(e));
  }, [dataChange, commentChange, tagChange]);

  useEffect(() => {
    CommentService.get()
      .then((data) => {
        console.log(data);
        setComments(data);
      })
      .catch((e) => console.error(e));
  }, [commentChange]);

  useEffect(() => {
    TagService.get()
      .then((data) => setTags(data))
      .catch((e) => console.error(e));
  }, [tagChange]);

  useEffect(() => {
    const views = Utils.countViews(data);
    setViews(views);
  }, [data]);
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
        users,
        setUsers,
        dataChange,
        setDataChange,
        commentChange,
        setCommentChange,
        tagChange,
        setTagChange,
        currentArticleId,
        setCurrentArticleId,
        showTagModal,
        setShowTagModal,
        showDeleteModal,
        setShowDeleteModal,
        displayData,
        setDisplayData,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
