import styles from "./StatisticsContainer.module.scss";
import article from "../../assets/article.png";
import { useCallback, useContext, useEffect, useState } from "react";
import { BlogContext } from "../../context/BlogContextProvider";
import comment from "../../assets/comment_stats.png";
import visitor from "../../assets/visitor.png";
import view from "../../assets/view.png";
import divider from "../../assets/divider.png";
import { Utils } from "../../services/utils";
import { Chart } from "react-google-charts";
export const options = {
  title: "My Tags",
};
const StatisticsContainer = () => {
  const { data, comments, views, tags } = useContext(BlogContext);
  const [tagCount, setTagCount] = useState<any>();
  console.log(views);
  
  useEffect(() => {
    const tagCount = Utils.countTags(tags);
    setTagCount(tagCount);
  }, [tags]);

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
      <div className={styles.chart}>
        <Chart
          chartType="PieChart"
          data={tagCount}
          options={options}
          width={"100%"}
          height={"400px"}
        />
      </div>
    </div>
  );
};

export default StatisticsContainer;
