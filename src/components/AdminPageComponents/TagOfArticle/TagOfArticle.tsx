import { TagItem } from "../../../context/BlogContextProvider";
import styles from "./TagOfArticle.module.scss";
import cross from "../../../assets/cross.png";
import TagListItem from "../TagListItem/TagListItem";
export interface TagListItemProps {
  tag: TagItem;
  tagsOfArticle: TagItem[];
  setTagsOfArticle: any;
  tagsOthers: TagItem[];
  setTagsOthers: any;
}
const TagOfArticle = ({
  tag,
  tagsOfArticle,
  setTagsOfArticle,
  tagsOthers,
  setTagsOthers,
}: TagListItemProps) => {
  const handleDelete = () => {
    const newTagsOfArticle = tagsOfArticle.filter(
      (t: TagItem) => t.id != tag.id
    );
    setTagsOfArticle(newTagsOfArticle);
    const newTagsOthers = [...tagsOthers];
    console.log(newTagsOthers);
    newTagsOthers.push(tag);
    setTagsOthers(newTagsOthers);
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

export default TagOfArticle;
