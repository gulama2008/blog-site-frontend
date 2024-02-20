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
  return (
    <div className={styles.container}>
      <div className={styles.tag}>{tag.name}</div>
    </div>
  );
};

export default TagOthers