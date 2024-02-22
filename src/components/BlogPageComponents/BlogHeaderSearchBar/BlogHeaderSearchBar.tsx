import styles from './BlogHeaderSearchBar.module.scss'

const BlogHeaderSearchBar = () => {
  return (
      <form className={styles.container}><input type="search" placeholder='Search for articles...' className={ styles.search} /></form>
  )
}

export default BlogHeaderSearchBar