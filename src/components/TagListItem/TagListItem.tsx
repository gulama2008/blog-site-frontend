import { TagItem } from "../../context/BlogContextProvider"
import styles from "./TagListItem.module.scss"
import cross from "../../assets/cross.png"
export interface TagListItemProps { 
    tag:TagItem
}
const TagListItem = ({tag}:TagListItemProps) => {
  return (
    <div className={styles.container}>
          <div className={styles.tag}>{tag.name}</div>
          <div className={styles.delete}><img src={cross} alt="" className={ styles.icon} /></div>
    </div>
  );
}

export default TagListItem