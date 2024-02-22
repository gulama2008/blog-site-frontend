import BlogHeaderSearchBar from '../../../components/BlogPageComponents/BlogHeaderSearchBar/BlogHeaderSearchBar';
import styles from './BlogSideBarContainer.module.scss'

const BlogSideBarContainer = () => {
  return (
    <div className={styles.container}>
      <BlogHeaderSearchBar />
    </div>
  );
}

export default BlogSideBarContainer