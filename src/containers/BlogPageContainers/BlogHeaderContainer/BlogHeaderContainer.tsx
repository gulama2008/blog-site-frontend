import styles from "./BlogHeaderContainer.module.scss";
import BlogHeaderTitle from "../../../components/BlogPageComponents/BlogHeaderTitle/BlogHeaderTitle";
import BlogHeaderSearchBar from "../../../components/BlogPageComponents/BlogHeaderSearchBar/BlogHeaderSearchBar";

const BlogHeaderContainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <BlogHeaderTitle />
        <BlogHeaderSearchBar />
      </div>
    </div>
  );
};

export default BlogHeaderContainer;
