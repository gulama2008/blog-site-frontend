import { BlogItem } from "../../context/BlogContextProvider";
import styles from "./BlogListItem.module.scss";
import eye from "../../assets/eye.png";
import bin from "../../assets/bin.png";
import tag from "../../assets/tags.png";
import comment from "../../assets/comments.png";
import visit from "../../assets/visit.png";
import { Utils } from "../../services/utils";
import { Link } from "react-router-dom";
export interface BlogListItemProps {
  item: BlogItem;
  index: number;
}
const BlogListItem = ({ item, index }: BlogListItemProps) => {
  const publishDate = Utils.changeDateFormat(item.publishDate);

  return (
    <Link to={item.id.toString()}>
      <div className={styles.container}>
        <div className={styles.title_container}>
          <div className={styles.title}>{item.title}</div>
          <div className={styles.date}>Publish Date: {publishDate}</div>
        </div>
        <div className={styles.options_container}>
          <div className={styles.options}>
            <div className={styles.icon_container}>
              <img src={tag} alt="edit tags" className={styles.icon} />
              <span className={styles.tooltiptext}>Edit Tags</span>
            </div>
            <div className={styles.icon_container}>
              <img src={eye} alt="check article" className={styles.icon} />
              <span className={styles.tooltiptext}>View Blog</span>
            </div>
            <div className={styles.icon_container}>
              <img src={bin} alt="delete article" className={styles.icon} />
              <span className={styles.tooltiptext}>Delete</span>
            </div>
          </div>
          <div className={styles.statistics_container}>
            <div className={styles.statistics}>
              {item.comments.length}{" "}
              <img src={comment} alt="" className={styles.icon_small} />
            </div>
            <div className={styles.statistics}>
              {item.views}{" "}
              <img src={visit} alt="" className={styles.icon_small} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogListItem;
