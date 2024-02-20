import { useContext, useEffect, useState } from "react";
import { BlogContext, TagItem } from "../../context/BlogContextProvider";
import TagListItem from "../TagListItem/TagListItem";
import { ArticleService } from "../../services/article-service";
import styles from "./TagModal.module.scss"
import { Utils } from "../../services/utils";
import TagOfArticle from "../TagOfArticle/TagOfArticle";
import TagOthers from "../TagOthers/TagOthers";

const TagModal = () => {
  const { tags, setShowTagModal, currentArticleId } = useContext(BlogContext);
  const [tagsOfArticle, setTagsOfArticle] = useState<TagItem[]>([]);
  const [tagsOthers, setTagsOthers] = useState<TagItem[]>([]);
  useEffect(() => {
    ArticleService.getAllTagsByArticleId(currentArticleId)
      .then((data) => {
        console.log(data);
        setTagsOfArticle(data);
        const tagsOthers = Utils.getTagsOthers(tags, data);
        setTagsOthers(tagsOthers);
      })
      .catch((e) => console.error(e));
  }, []);

  const handleClose = () => {
    setShowTagModal(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.tags}>
        {tagsOfArticle.map((tag: TagItem) => {
          return <TagOfArticle tag={tag} tagsOfArticle={tagsOfArticle} setTagsOfArticle={setTagsOfArticle} tagsOthers={tagsOthers} setTagsOthers={setTagsOthers} key={tag.id} />;
        })}
      </div>
      <div className={styles.tags_other}>
        {tagsOthers.map((tag: TagItem) => {
          return (
            <TagOthers
              tag={tag}
              tagsOfArticle={tagsOfArticle}
              setTagsOfArticle={setTagsOfArticle}
              tagsOthers={tagsOthers}
              setTagsOthers={setTagsOthers}
              key={tag.id}
            />
          );
        })}
      </div>
      <div className={styles.btn}>
        <button onClick={handleClose}>Cancel</button>
        <button>Apply</button>
      </div>
    </div>
  );
};

export default TagModal;
