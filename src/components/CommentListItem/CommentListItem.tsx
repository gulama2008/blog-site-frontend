import { BlogContext, CommentItem } from "../../context/BlogContextProvider";
import styles from "./CommentListItem.module.scss";
import avatar from "../../assets/avatar.png";
import { Utils } from "../../services/utils";
import { useContext } from "react";
import ShowMoreText from "react-show-more-text";
import bin from "../../assets/bin.png";
import block from "../../assets/block.png";
import unblock from "../../assets/unblock.png";
export interface CommentListItemProps {
  comment: CommentItem;
  index: number;
}
const CommentListItem = ({ comment, index }: CommentListItemProps) => {
  const { data } = useContext(BlogContext);
  const blogItem = Utils.getBlogItemByComment(comment, data);
  const executeOnClick = (isExpanded: any) => {
    console.log(isExpanded);
  };
  return (
    <div className={styles.container}>
      <img src={avatar} alt="" />
      <div className={styles.details}>
        <div>
          <span className={styles.name}>{comment.username}</span> has made a
          comment on <span className={styles.name}>{blogItem.title}</span>
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
          {comment.blocked ? (
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

          <div className={styles.icon_container}>
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
