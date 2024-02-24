import styles from './CommentForm.module.scss'

const CommentForm = () => {
  return (
      <form className={styles.container}>
          <label htmlFor="comment" className={styles.label}>Leave a comment</label>
          <textarea name="comment" id="comment" cols={30} rows={10} className={styles.text}></textarea>
          <button className={styles.btn}>Submit</button>
    </form>
  )
}

export default CommentForm