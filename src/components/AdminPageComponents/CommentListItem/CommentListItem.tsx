import {
  ArticleItem,
  BlogContext,
  CommentItem,
  UserItem,
} from "../../../context/BlogContextProvider";
import styles from "./CommentListItem.module.scss";
import avatar from "../../../assets/avatar.png";
import { useContext, useEffect, useState } from "react";
import ShowMoreText from "react-show-more-text";
import bin from "../../../assets/bin.png";
import block from "../../../assets/block.png";
import unblock from "../../../assets/unblock.png";
import { CommentService } from "../../../services/comment-service";
export interface CommentListItemProps {
  comment: CommentItem;
  index: number;
}
const CommentListItem = ({ comment, index }: CommentListItemProps) => {
  const { commentChange, setCommentChange } = useContext(BlogContext);
  const [article, setArticle] = useState<ArticleItem>();
  const [user, setUser] = useState<UserItem>();
  const [isBlocked, setIsBlocked] = useState<boolean>(comment.blocked);
  console.log("testtesttest");

  useEffect(() => {
    CommentService.getUserByCommentId(index)
      .then((data) => setUser(data))
      .catch((e) => console.error(e));
    CommentService.getArticleByCommentId(index)
      .then((data) => setArticle(data))
      .catch((e) => console.error(e));
  }, []);
  // const blogItem = Utils.getBlogItemByComment(comment, data);
  // const user = Utils.getUserById(index, users);
  const executeOnClick = (isExpanded: any) => {
    console.log(isExpanded);
  };

  const handleBlock = () => {
    const data = {
      blocked: !isBlocked,
    };
    CommentService.updateCommentById(index, data)
      .then(() => setIsBlocked(!isBlocked))
      .catch((e) => console.error(e));
  };

  const handleDelete = () => {
    CommentService.deleteCommentById(index)
      .then(() => {
        const change = commentChange - 1;
        setCommentChange(change);
      })
      .catch((e) => console.error(e));
  };

  return (
    <div className={styles.container}>
      <img src={avatar} alt="" />
      <div className={styles.details}>
        <div>
          <span className={styles.name}>{comment.user.username}</span> has made
          a comment on <span className={styles.name}>{article?.title}</span>
        </div>
        <div>
          <ShowMoreText
            /* Default options */
            lines={1}
            more="Show more"
            less="Show less"
            // className="content-css"
            className={styles.content}
            anchorClass="show-more-less-clickable"
            onClick={executeOnClick}
            expanded={false}
            truncatedEndingComponent={"... "}
          >
            <div className={styles.content}>{comment.content}</div>
          </ShowMoreText>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.options}>
          <div onClick={handleBlock}>
            {isBlocked ? (
              <div className={styles.icon_container}>
                <img src={unblock} alt="" className={styles.icon} />
                <span className={styles.tooltiptext}>Unblock comment</span>
              </div>
            ) : (
              <div className={styles.icon_container}>
                <img src={block} alt="" className={styles.icon} />
                <span className={styles.tooltiptext}>Block comment</span>
              </div>
            )}
          </div>
          <div className={styles.icon_container} onClick={handleDelete}>
            <img src={bin} alt="" className={styles.icon} />
            <span className={styles.tooltiptext}>Delete comment</span>
          </div>
        </div>
        <div>{comment.commentDate}</div>
      </div>
    </div>
  );
};

export default CommentListItem;
