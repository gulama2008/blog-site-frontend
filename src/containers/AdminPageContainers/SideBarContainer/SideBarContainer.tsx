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
import Button from "../../../components/Button/Button";
export const sideBarItemList = [
  ["Article Management", articleList, "articles"],
  ["Comment Management", comment, "comments"],
  ["Categories/Tags", tag, "tags"],
  ["Statistics", statistics, "statistics"],
];
const SideBarContainer = () => {
  const { showTagModal, showDeleteModal } = useContext(BlogContext);
  const [showModalClass, setShowModalClass] = useState<string>("");
  const containerClass = styles.container;
  useEffect(() => {
    if (showTagModal || showDeleteModal) {
      setShowModalClass(`${containerClass} ${styles.disabled}`);
    } else {
      setShowModalClass(`${containerClass}`);
    }
  }, [showTagModal, showDeleteModal]);

  return (
    <div className={showModalClass}>
      <div className={styles.head_container}>
        <div className={styles.title}>MY DASHBOARD</div>
        <Link to={"new"}>
          <Button
            content="+ New Article"
            onClick={() => {}}
            backgroundColor="white"
            color="#294da1"
          />
        </Link>
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
            <Link to={"/blog"} target="_blank" className={styles.blog_link}>
              Go To My Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBarContainer;
