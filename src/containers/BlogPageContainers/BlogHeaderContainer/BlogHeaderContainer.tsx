import styles from "./BlogHeaderContainer.module.scss";
import BlogHeaderTitle from "../../../components/BlogPageComponents/BlogHeaderTitle/BlogHeaderTitle";
import BlogHeaderSearchBar from "../../../components/BlogPageComponents/BlogSearchBar/BlogSearchBar";

const BlogHeaderContainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <BlogHeaderTitle />
      </div>
    </div>
  );
};

export default BlogHeaderContainer;
