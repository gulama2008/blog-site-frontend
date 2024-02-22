import BlogArticlesContainer from '../BlogArticlesContainer/BlogArticlesContainer'
import BlogSideBarContainer from '../BlogSideBarContainer/BlogSideBarContainer'
import styles from './BlogMainContainer.module.scss'

const BlogMainContainer = () => {
  return (
    <div className={styles.container}>
      <BlogArticlesContainer />
      <BlogSideBarContainer/>
    </div>
  )
}

export default BlogMainContainer