import { TagItem } from '../../context/BlogContextProvider';
import styles from './TagOthers.module.scss'
export interface TagListItemProps {
  tag: TagItem;
  tagsOfArticle: TagItem[];
  setTagsOfArticle: any;
  tagsOthers: TagItem[];
  setTagsOthers: any;
}
const TagOthers = ({
  tag,
  tagsOfArticle,
  setTagsOfArticle,
  tagsOthers,
  setTagsOthers,
}: TagListItemProps) => {

    const handleAddTag = () => { 
        const newTagsOthers = tagsOthers.filter(
          (t: TagItem) => t.id != tag.id
        );
        setTagsOthers(newTagsOthers);
        const newTagsOfArticle = [...tagsOfArticle];
        newTagsOfArticle.push(tag);
        setTagsOfArticle(newTagsOfArticle);
    }

  return (
    <div className={styles.container} onClick={handleAddTag}>
      <div className={styles.tag}>{tag.name}</div>
    </div>
  );
};

export default TagOthers