import { useContext, useEffect, useState } from "react";
import {
  ArticleItem,
  BlogContext,
  TagItem,
} from "../../../context/BlogContextProvider";
import styles from "./BlogMainArticle.module.scss";
import { ArticleService } from "../../../services/article-service";
import { Link } from "react-router-dom";
export interface BlogMainArticle {
  article: ArticleItem;
  index: number;
}
const BlogMainArticle = ({ article, index }: BlogMainArticle) => {
  const {} = useContext(BlogContext);
  const [tags, setTags] = useState<TagItem[]>([]);
  useEffect(() => {
    ArticleService.getAllTagsByArticleId(index)
      .then((data) => setTags(data))
      .catch((e) => console.error(e));
  }, []);

  const handleClick = () => {
    ArticleService.updateViewsByArticleId(index)
      .then((result) => console.log(result))
      .catch((e) => console.error(e));
  };
  return (
    <div className={styles.container}>
      <Link to={index.toString()}>
        <h2 className={styles.title} onClick={handleClick}>
          {article.title}
        </h2>
      </Link>
      {/* <div className={styles.content_container}> */}
      <div className={styles.content}>{article.content}</div>
      {/* </div> */}
      <div className={styles.info_container}>
        <div>
          <span className={styles.info}>Published At</span>{" "}
          {article.publishDate}
        </div>
        {article.comments.length == 1 || article.comments.length == 0 ? (
          <div>
            <span className={styles.info}>comment:</span>
            {article.comments.length}
          </div>
        ) : (
          <div>
            <span className={styles.info}>comments:</span>
            {article.comments.length}
          </div>
        )}
        <div>
          <span className={styles.info}>Tags:</span>{" "}
          {tags.map((tag: TagItem) => {
            return (
              <span className={styles.tag} key={tag.id}>
                {tag.name}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogMainArticle;
