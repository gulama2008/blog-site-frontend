import styles from "./SideBarContainer.module.scss";
import SideBarItem from "../../components/SideBarItem/SideBarItem";
import newArticle from "../../assets/new.png";
import articleList from "../../assets/list.png";
import comment from "../../assets/comment.png";
import tag from "../../assets/tag.png";
const SideBarContainer = () => {
  const sideBarItemList = [
    ["New Article",newArticle],
    ["Article Management",articleList],
    ["Comment Management",comment],
    ["Categories/Tags",tag],
  ];
  
  return (
    <div className={styles.container}>
      <div className={styles.category_container}>
        <div className={styles.title}>
          <div>My Blog</div>
        </div>
      </div>
      <div className={styles.content}>
        {sideBarItemList.map((item, index) => { return <SideBarItem title={item[0]} icon={item[1]} index={index} key={index} /> })}
      </div>
    </div>
  );
};

export default SideBarContainer;
