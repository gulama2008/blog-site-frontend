import { ArticleItem } from '../../../context/BlogContextProvider'
import styles from './BlogMainArticle.module.scss'
export interface BlogMainArticle { 
  article: ArticleItem,
  index:number
}
const BlogMainArticle = ({article,index}:BlogMainArticle) => {
  return (
    <div className={styles.container}>
      <h3>{article.title}</h3>
      <div>{article.content}</div>
      <div>Published At {article.publishDate}</div>
      <div>{ article.comments.length} comments</div>
    </div>
  )
}

export default BlogMainArticle