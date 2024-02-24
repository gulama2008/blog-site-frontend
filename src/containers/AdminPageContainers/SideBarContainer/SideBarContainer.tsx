import styles from "./SideBarContainer.module.scss";
import SideBarItem from "../../../components/SideBarItem/SideBarItem";
import newArticle from "../../assets/new.png";
import articleList from "../../../assets/list.png";
import comment from "../../../assets/comment.png";
import tag from "../../../assets/tag.png";
import link from "../../../assets/link.png";
import statistics from "../../../assets/statistics.png";
import { useContext, useState, useEffect } from "react";
import { BlogContext } from "../../../context/BlogContextProvider";
import { Link } from "react-router-dom";
const SideBarContainer = () => {
  const sideBarItemList = [
    ["Article Management", articleList, "articles"],
    ["Comment Management", comment, "comments"],
    ["Categories/Tags", tag, "tags"],
    ["Statistics", statistics, "statistics"],
  ];
  const { showTagModal } = useContext(BlogContext);
  const [showModalClass, setShowModalClass] = useState<string>("");
  const containerClass = styles.container;
  useEffect(() => {
    if (showTagModal) {
      setShowModalClass(`${containerClass} ${styles.disabled}`);
    } else {
      setShowModalClass(`${containerClass}`);
    }
  }, [showTagModal]);

  return (
    <div className={showModalClass}>
      <div className={styles.head_container}>
        <div className={styles.title}>MY DASHBOARD</div>
        <button>
          <Link to={"new"}>New Article</Link>
        </button>
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
      <div>
        <div className={styles.link}>
          <img src={link} alt="" className={styles.link_icon} />
          <div className={styles.link_content}>
            <Link to={"/blog"}>Go To My Blog</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBarContainer;
