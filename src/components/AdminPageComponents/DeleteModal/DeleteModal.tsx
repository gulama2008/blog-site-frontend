import { useContext } from 'react'
import styles from './DeleteModal.module.scss'
import { BlogContext } from '../../../context/BlogContextProvider'
import { ArticleService } from '../../../services/article-service'

const DeleteModal = () => {
    const { setShowDeleteModal, dataChange, setDataChange, currentArticleId } =
      useContext(BlogContext);
    const handleCancel = () => { 
        setShowDeleteModal(false);
    }

    const handleDelete = () => {
      ArticleService.deleteArticle(currentArticleId)
        .then(() => {
          const change = dataChange - 1;
          setDataChange(change);
        })
        .catch((e) => console.error(e));
    }
  return (
    <div className={styles.container}>
      <div className={styles.title}>Confirm Deletion</div>
      <div className={styles.content}>
        Are you sure you would like to delete this article?
      </div>
      <div className={styles.btns}>
        <button className={styles.cancel} onClick={handleCancel}>Cancel</button>
        <button className={styles.delete} onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default DeleteModal