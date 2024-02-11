import { useContext } from "react";
import styles from "./TagsContainer.module.scss";
import { BlogContext, TagItem } from "../../context/BlogContextProvider";
import TagListItem from "../../components/TagListItem/TagListItem";
import Button from "../../components/Button/Button";

const TagsContainer = () => {
  const { tags } = useContext(BlogContext);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>All Tags</div>
        <div>
          <Button content="+ Add Tag"/>
        </div>
      </div>
      <div className={styles.tags}>
        {tags.map((tag: TagItem) => {
          return <TagListItem tag={tag} key={tag.id} />;
        })}
      </div>
    </div>
  );
};

export default TagsContainer;
