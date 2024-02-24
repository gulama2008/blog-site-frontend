import { useContext, useEffect, useState } from "react";
import styles from "./BlogArchive.module.scss";
import { ArticleService } from "../../../services/article-service";
import { Utils } from "../../../services/utils";
import BlogArchiveItem from "../BlogArchiveItem/BlogArchiveItem";
import { ArticleItem, BlogContext } from "../../../context/BlogContextProvider";
import { useNavigate } from "react-router-dom";

const BlogArchive = () => {
  const { setData } = useContext(BlogContext);
  const [originalGroupedData, setOriginalGroupedData] = useState<any>([]);
  const [groupedArticlesData, setGroupedArticlesData] = useState<any>([]);
  const [allArticles, setAllArticles] = useState<ArticleItem[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    ArticleService.getArticlesGroupByDate()
      .then((data) => {
        setOriginalGroupedData(data);
        const formattedData = Utils.getFormattedGroupedArticles(data);
        setGroupedArticlesData(formattedData);
      })
      .catch((e) => console.error(e));
    ArticleService.get()
      .then((data) => setAllArticles(data))
      .catch((e) => console.error(e));
  }, []);

  const handleClick = () => {
    navigate("/blog", { replace: true });
    setData(allArticles);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>Blog Archive</div>
      <div>
        {groupedArticlesData.map((data: any, index: number) => {
          return (
            <BlogArchiveItem
              formattedData={data}
              originalData={originalGroupedData[index]}
            />
          );
        })}
      </div>
      <div className={styles.all_container} onClick={handleClick}>
        <span className={styles.all}>All Articles ({allArticles.length})</span>
      </div>
    </div>
  );
};

export default BlogArchive;
