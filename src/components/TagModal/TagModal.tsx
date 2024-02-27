import { useContext, useEffect, useState } from "react";
import { BlogContext, TagItem } from "../../context/BlogContextProvider";
import TagListItem from "../TagListItem/TagListItem";
import { ArticleService } from "../../services/article-service";
import styles from "./TagModal.module.scss";
import { Utils } from "../../services/utils";
import TagOfArticle from "../TagOfArticle/TagOfArticle";
import TagOthers from "../TagOthers/TagOthers";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

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

  const handleEditTags = () => {
    const tagsArr = tagsOfArticle.map((tag: TagItem) => {
      const { articles, ...rest } = tag;
      setShowTagModal(false);
      return rest;
    });
    const data = { tags: tagsArr };
    ArticleService.updateTagsByArticleId(currentArticleId, data)
      .then((data) => console.log(data))
      .catch((e) => console.error(e));
  };

  return (
    <div className={styles.container}>
      {tagsOfArticle.length == 0 ? (
        <div className={styles.empty}>No Tags</div>
      ) : (
        <div className={styles.tags}>
          {tagsOfArticle.map((tag: TagItem) => {
            return (
              <TagOfArticle
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
      )}

      <div className={styles.tags_other}>
        <div>Click to add tags:</div>
        <div className={styles.tags}>
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
      </div>
      <div className={styles.btn}>
        <Button
          content="Cancel"
          onClick={handleClose}
          backgroundColor="#f1f2f3"
          color="#7a808d"
        />
        <Button content="Apply" onClick={handleEditTags} />
        {/* <button onClick={handleClose}>Cancel</button>
        <button onClick={handleEditTags}>Apply</button> */}
      </div>
    </div>
  );
};

export default TagModal;
