import { useContext } from "react";
import styles from "./TagsContainer.module.scss";
import { BlogContext, TagItem } from "../../../context/BlogContextProvider";
import TagListItem from "../../../components/TagListItem/TagListItem";
import Button from "../../../components/Button/Button";
import NewTag from "../../../components/AdminPageComponents/NewTag/NewTag";

const TagsContainer = () => {
  const { tags } = useContext(BlogContext);
  const handleClick = () => { }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>All Tags</div>
        {/* <div>
          <Button content="+ Add Tag" onClick={handleClick}/>
        </div> */}
      </div>
      <div className={styles.tags}>
        {tags.map((tag: TagItem) => {
          return <TagListItem tag={tag} key={tag.id} />;
        })}
        <NewTag/>
      </div>
    </div>
  );
};

export default TagsContainer;
