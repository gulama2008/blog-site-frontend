import { useContext } from "react";
import styles from "./BlogTags.module.scss";
import { BlogContext, TagItem } from "../../../context/BlogContextProvider";
import tag from "../../../assets/blog_tag.png";
import { TagService } from "../../../services/tag-services";
import { Utils } from "../../../services/utils";
const BlogTags = () => {
  const { tags, setData } = useContext(BlogContext);
  const handleClick = (tag: TagItem) => {
    TagService.getAllArticlesByTagId(tag.id)
        .then(data => { 
            const sortedData = Utils.sortArticlesByPublishDate(data);
            setData(sortedData);
        })
      .catch((e) => console.error(e));
  };
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span>Tags</span>
        <img src={tag} alt="" className={styles.icon} />
      </div>
      <div className={styles.tags}>
        {tags.map((tag: TagItem) => {
          return (
            <span
              key={tag.id}
              className={styles.tag}
              onClick={() => {
                handleClick(tag);
              }}
            >
              {tag.name}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default BlogTags;
