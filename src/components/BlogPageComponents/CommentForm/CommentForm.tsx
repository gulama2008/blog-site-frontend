import Button from "../../AdminPageComponents/Button/Button";
import styles from "./CommentForm.module.scss";

const CommentForm = () => {
  const handleClick = () => {};
  return (
    <form className={styles.container}>
      <label htmlFor="comment" className={styles.label}>
        Leave a comment
      </label>
      <textarea
        name="comment"
        id="comment"
        cols={30}
        rows={10}
        className={styles.text}
      ></textarea>
      <div className={styles.btn}>
        <Button
          content="Submit"
          onClick={handleClick}
          backgroundColor="#9d3a0b"
          color="white"
        />
      </div>
    </form>
  );
};

export default CommentForm;
