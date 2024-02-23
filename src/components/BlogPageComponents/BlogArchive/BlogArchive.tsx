import { useEffect, useState } from "react";
import styles from "./BlogArchive.module.scss";
import { ArticleService } from "../../../services/article-service";
import { Utils } from "../../../services/utils";
import BlogArchiveItem from "../BlogArchiveItem/BlogArchiveItem";

const BlogArchive = () => {
  const [groupedArticlesData, setGroupedArticlesData] = useState<any>([]);
  useEffect(() => {
    ArticleService.getArticlesGroupByDate()
      .then((data) => {
          const formattedData = Utils.getFormattedGroupedArticles(data);
          setGroupedArticlesData(formattedData)
      })
      .catch((e) => console.error(e));
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.title}>Blog Archive</div>
          <div>
              {groupedArticlesData.map((data:any) => { 
                return <BlogArchiveItem data={data}/>
              })}
      </div>
    </div>
  );
};

export default BlogArchive;
