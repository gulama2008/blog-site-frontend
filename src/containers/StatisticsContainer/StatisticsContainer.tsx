import styles from "./StatisticsContainer.module.scss"
import article from "../../assets/article.png"
import { useContext } from "react";
import { BlogContext } from "../../context/BlogContextProvider";
import comment from "../../assets/comment_stats.png"
import visitor from "../../assets/visitor.png"
import view from "../../assets/view.png"
import divider from "../../assets/divider.png"
const StatisticsContainer = () => {
  const { data,comments,views}=useContext(BlogContext)
  return (
    <div className={styles.container}>
      <div className={styles.header}>Statistics</div>

      <div className={styles.num_container}>
        <div className={styles.num}>
          <div className={styles.data}>{data.length}</div>
          <div className={styles.title_container}>
            <img src={article} alt="" className={styles.icon} />
            <span className={styles.title}>Articles</span>
          </div>
        </div>
        <div className={styles.divider_container}>
          <img src={divider} alt="" className={styles.divider} />
        </div>

        <div className={styles.num}>
          <div className={styles.data}>{comments.length}</div>
          <div className={styles.title_container}>
            <img src={comment} alt="" className={styles.icon} />
            <span className={styles.title}>Comments</span>
          </div>
        </div>
        <div className={styles.divider_container}>
          <img src={divider} alt="" className={styles.divider} />
        </div>
        <div className={styles.num}>
          <div className={styles.data}>20</div>
          <div className={styles.title_container}>
            <img src={visitor} alt="" className={styles.icon} />
            <span className={styles.title}>Visits</span>
          </div>
        </div>
        <div className={styles.divider_container}>
          <img src={divider} alt="" className={styles.divider} />
        </div>
        <div className={styles.num}>
          <div className={styles.data}>{views}</div>
          <div className={styles.title_container}>
            <img src={view} alt="" className={styles.icon} />
            <span className={styles.title}>Views</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsContainer;
