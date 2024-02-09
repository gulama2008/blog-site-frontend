import { useContext } from 'react'
import { BlogContext, CommentItem } from '../../context/BlogContextProvider';
import CommentListItem from '../../components/CommentListItem/CommentListItem';
import styles from "./CommentsContainer.module.scss"
const CommentsContainer = () => {
  const { comments, setComments } = useContext(BlogContext);

  return (
    <div className={styles.container}>
      <div className={styles.title}>All Comments</div>
      {comments.map((comment:CommentItem,index:number) => { 
        return <CommentListItem comment={comment} index={index} key={index}/>
      })}
    </div>
  )
}

export default CommentsContainer