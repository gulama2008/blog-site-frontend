import BlogArchive from "../../../components/BlogPageComponents/BlogArchive/BlogArchive";
import BlogSearchBar from "../../../components/BlogPageComponents/BlogSearchBar/BlogSearchBar";
import BlogTags from "../../../components/BlogPageComponents/BlogTags/BlogTags";
import styles from "./BlogSideBarContainer.module.scss";

const BlogSideBarContainer = () => {
  return (
    <div className={styles.container}>
      <BlogSearchBar />
      <BlogArchive />
      <BlogTags/>
    </div>
  );
};

export default BlogSideBarContainer;
