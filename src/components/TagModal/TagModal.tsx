import { useContext, useEffect, useState } from "react";
import { BlogContext, TagItem } from "../../context/BlogContextProvider";
import TagListItem from "../TagListItem/TagListItem";
import { ArticleService } from "../../services/article-service";

const TagModal = () => {
  const { tags, setShowTagModal, currentArticleId } = useContext(BlogContext);
  const [tagsOfArticle, setTagsOfArticle] = useState<TagItem[]>([]);
  useEffect(() => {
    ArticleService.getAllTagsByArticleId(currentArticleId)
      .then((data) => {
        console.log(data);
        
        setTagsOfArticle(data)
      })
      .catch((e) => console.error(e));
  }, []);
  const handleClose = () => {
    setShowTagModal(false);
  };
  return (
    <div>
      <div onClick={handleClose}>x</div>
      <div>
        {tagsOfArticle.map((tag: TagItem) => {
          return <TagListItem tag={tag} key={tag.id}/>;
        })}
      </div>
      <div>
        {tags.map((tag: TagItem) => {
          return <TagListItem tag={tag} key={tag.id}/>;
        })}
      </div>
    </div>
  );
};

export default TagModal;
