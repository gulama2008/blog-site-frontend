import BlogHeaderContainer from "../../containers/BlogPageContainers/BlogHeaderContainer/BlogHeaderContainer";
import styles from "./BlogPage.module.scss";
import BlogMainContainer from "../../containers/BlogPageContainers/BlogMainContainer/BlogMainContainer";

const BlogPage = () => {
  return (
    <div className={styles.container}>
      <BlogHeaderContainer />
      <BlogMainContainer />
    </div>
  );
};

export default BlogPage;
