import { useContext, useEffect, useState } from "react";
import styles from "./BlogArchive.module.scss";
import { ArticleService } from "../../../services/article-service";
import { Utils } from "../../../services/utils";
import BlogArchiveItem from "../BlogArchiveItem/BlogArchiveItem";
import { ArticleItem, BlogContext } from "../../../context/BlogContextProvider";

const BlogArchive = () => {
  const { setData } = useContext(BlogContext);
  const [originalGroupedData, setOriginalGroupedData] = useState<any>([]);
  const [groupedArticlesData, setGroupedArticlesData] = useState<any>([]);
  const [allArticles,setAllArticles]=useState<ArticleItem[]>([])
  useEffect(() => {
    ArticleService.getArticlesGroupByDate()
      .then((data) => {
        setOriginalGroupedData(data);
        const formattedData = Utils.getFormattedGroupedArticles(data);
        setGroupedArticlesData(formattedData);
      })
      .catch((e) => console.error(e));
    ArticleService.get().then(data=>setAllArticles(data)).catch(e=>console.error(e)
    )
  }, []);
  
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
      <div className={styles.all_container} onClick={() => setData(allArticles)}>
        <span className={styles.all}>All Articles ({allArticles.length})</span>
      </div>
    </div>
  );
};

export default BlogArchive;
