import { useParams } from "react-router-dom";
import styles from "./ArticleContainer.module.scss";
import { useContext, useEffect, useState } from "react";
import { ArticleItem, BlogContext } from "../../../context/BlogContextProvider";
import CommentForm from "../../../components/BlogPageComponents/CommentForm/CommentForm";
import { ArticleService } from "../../../services/article-service";

const ArticleContainer = () => {
  const { data } = useContext(BlogContext);
  const { id } = useParams();
    const [currentArticle, setCurrentArticle] = useState<ArticleItem>();
    console.log(id);
    
    useEffect(() => {
      console.log(id);
      
    if (id) {
      ArticleService.getById(parseInt(id))
          .then((result) => {
            console.log("here");
            
          setCurrentArticle(result);
        })
        .catch((e) => console.error(e));
    }
  }, [id]);
  return (
    <div className={styles.container}>
      <div className={styles.article_container}>
        <div className={styles.title}>{currentArticle?.title}</div>
        <div className={styles.date}>{currentArticle?.publishDate}</div>
        <div className={styles.content}>{currentArticle?.content}</div>
      </div>
      {currentArticle?.comments.length == 0 ? (
        <div>No comments</div>
      ) : (
        <div>
          {currentArticle?.comments.length == 1 ? (
            <div>{currentArticle?.comments.length} comment</div>
          ) : (
            <div>{currentArticle?.comments.length} comments</div>
          )}
        </div>
      )}
      <div>
        <CommentForm />
      </div>
    </div>
  );
};

export default ArticleContainer;
