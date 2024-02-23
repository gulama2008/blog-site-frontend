import styles from './BlogSearchBar.module.scss'

const BlogSearchBar = () => {
  return (
      <form className={styles.container}><input type="search" placeholder='Search for articles...' className={ styles.search} /></form>
  )
}

export default BlogSearchBar