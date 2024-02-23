import BlogArchive from "../../../components/BlogPageComponents/BlogArchive/BlogArchive";
import BlogSearchBar from "../../../components/BlogPageComponents/BlogSearchBar/BlogSearchBar";
import styles from "./BlogSideBarContainer.module.scss";

const BlogSideBarContainer = () => {
  return (
    <div className={styles.container}>
      <BlogSearchBar />
      <BlogArchive/>
    </div>
  );
};

export default BlogSideBarContainer;
