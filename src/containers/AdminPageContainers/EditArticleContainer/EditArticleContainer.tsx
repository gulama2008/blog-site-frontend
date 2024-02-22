import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ArticleItem,
  BlogContext,
  BlogItem,
} from "../../../context/BlogContextProvider";
import styles from "./EditArticleContainer.module.scss";
import ArticleForm from "../../../components/ArticleForm/ArticleForm";
import {
  ArticleService,
  UpdateArticle,
} from "../../../services/article-service";
const EditArticleContainer = () => {
  const { data, setDataChange, dataChange } = useContext(BlogContext);
  const { id } = useParams();
  const [currentArticleItem, setCurrentArticleItem] = useState<ArticleItem>();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  useEffect(() => {
    if (id) {
      const item = data.find((e: ArticleItem) => e.id == parseInt(id));
      console.log(item);

      setCurrentArticleItem(item);
      setTitle(item.title);
      setContent(item.content);
    }
  }, [id]);

  // const saveAPI = (id:number,data:UpdateArticle,dataChange:any) => {

  //   ArticleService.updateArticleById(id, data)
  //     .then(() => {
  //       let change = dataChange;
  //       setDataChange(change++);
  //     })
  //     .catch((e) => console.error(e));
  // };

  return <ArticleForm title={title} content={content} />;
};

export default EditArticleContainer;
