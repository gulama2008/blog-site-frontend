import { useContext } from "react";
import { ArticleService } from "../../../services/article-service";
import { Utils } from "../../../services/utils";
import styles from "./BlogArchiveItem.module.scss";
import { BlogContext } from "../../../context/BlogContextProvider";
export interface BlogArchiveItemProps {
  originalData: any;
  formattedData: any;
}
const BlogArchiveItem = ({
  originalData,
  formattedData,
}: BlogArchiveItemProps) => {
  const { setData } = useContext(BlogContext);
  const handleClick = () => {
    const startDate = Utils.getFirstDayOfMonth(originalData[1]);
    const endDate = Utils.getLastDayOfMonth(originalData[1]);
    ArticleService.getAllArticlesByDateRange(startDate, endDate)
        .then((data) => {
            const sortedData=Utils.sortArticlesByPublishDate(data);
            setData(sortedData)
        })
      .catch((e) => console.error(e));
  };
  return (
    <div className={styles.container} onClick={handleClick}>
      <span className={styles.content}>
        {formattedData[0]} ({formattedData[1]})
      </span>
    </div>
  );
};

export default BlogArchiveItem;
