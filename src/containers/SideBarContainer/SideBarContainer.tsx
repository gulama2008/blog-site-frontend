import styles from "./SideBarContainer.module.scss";
import SideBarItem from "../../components/SideBarItem/SideBarItem";
import newArticle from "../../assets/new.png";
import articleList from "../../assets/list.png";
import comment from "../../assets/comment.png";
import tag from "../../assets/tag.png";
import link from "../../assets/link.png";
import statistics from "../../assets/statistics.png"
const SideBarContainer = () => {
  const sideBarItemList = [
    
    ["Article Management", articleList,"blogs"],
    ["Comment Management", comment,"comments"],
    ["Categories/Tags", tag,"tags"],
    ["Statistics", statistics,"statistics"],
  ];

  return (
    <div className={styles.container}>
      <div className={styles.head_container}>
        <div className={styles.title}>Siyu's Blog</div>
        <div className={styles.link}>
          <img src={link} alt="" className={ styles.link_icon} />
          <div className={styles.link_content}>Go To My Blog</div>
        </div>
      </div>
      <div className={styles.content}>
        {sideBarItemList.map((item, index) => {
          return (
            <SideBarItem
              title={item[0]}
              icon={item[1]}
              route={item[2]}
              index={index}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SideBarContainer;
