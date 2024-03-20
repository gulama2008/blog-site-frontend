import { BlogContext, TagItem } from "../../../context/BlogContextProvider";
import styles from "./TagListItem.module.scss";
import cross from "../../../assets/cross.png";
import { TagService } from "../../../services/tag-services";
import { useContext } from "react";
export interface TagListItemProps {
  tag: TagItem;
}
const TagListItem = ({ tag }: TagListItemProps) => {
  const { tagChange, setTagChange } = useContext(BlogContext);
  const handleDelete = () => {
    TagService.deleteTagById(tag.id)
      .then(() => setTagChange(tagChange - 1))
      .catch((e) => console.error(e));
  };
  return (
    <div className={styles.container}>
      <div className={styles.tag}>{tag.name}</div>
      <div className={styles.delete} onClick={handleDelete}>
        <img src={cross} alt="" className={styles.icon} />
      </div>
    </div>
  );
};

export default TagListItem;
