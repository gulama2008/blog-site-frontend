import { useContext } from 'react'
import styles from './BlogArticlesContainer.module.scss'
import { ArticleItem, BlogContext } from '../../../context/BlogContextProvider'
import BlogMainArticle from '../../../components/BlogPageComponents/BlogMainArticle/BlogMainArticle'

const BlogArticlesContainer = () => {
  const {data} =useContext(BlogContext)
  return (
    <div className={styles.container}>
      {data.map((article:ArticleItem) => { 
        return <BlogMainArticle article={article} index={article.id} key={article.id}/>
      })}
    </div>
  )
}

export default BlogArticlesContainer