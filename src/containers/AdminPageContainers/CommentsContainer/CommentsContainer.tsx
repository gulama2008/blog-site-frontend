import { useContext, useEffect, useState } from "react";
import { BlogContext, CommentItem } from "../../../context/BlogContextProvider";
import CommentListItem from "../../../components/CommentListItem/CommentListItem";
import styles from "./CommentsContainer.module.scss";
const CommentsContainer = () => {
  const { comments } = useContext(BlogContext);
  const [commentsDisplay, setCommentsDisplay] =
    useState<CommentItem[]>(comments);
  useEffect(() => {
    setCommentsDisplay(comments);
  }, [comments]);

  const handleChange = (e: any) => {
    if (e.target.value == "") {
      setCommentsDisplay(comments);
    } else if (e.target.value == "true") {
      const blockedComments = comments.filter((comment: CommentItem) => {
        return comment.blocked;
      });
      setCommentsDisplay(blockedComments);
    } else {
      const unblockedComments = comments.filter((comment: CommentItem) => {
        return !comment.blocked;
      });
      setCommentsDisplay(unblockedComments);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>All Comments</div>
        <div className={styles.filter_container}>
          <select
            name=""
            id=""
            className={styles.filter}
            onChange={handleChange}
          >
            <option value="">All comments</option>
            <option value="true">Blocked comments</option>
            <option value="false">Unblocked comments</option>
          </select>
        </div>
      </div>
      <div className={styles.comments}>
        {commentsDisplay.map((comment: CommentItem) => {
          return (
            <CommentListItem
              comment={comment}
              index={comment.id}
              key={comment.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CommentsContainer;
