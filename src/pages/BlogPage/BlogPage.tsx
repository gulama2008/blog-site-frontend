import BlogHeaderContainer from "../../containers/BlogPageContainers/BlogHeaderContainer/BlogHeaderContainer";
import styles from "./BlogPage.module.scss";
import BlogSideBarContainer from "../../containers/BlogPageContainers/BlogSideBarContainer/BlogSideBarContainer";
import { Routes, Route } from "react-router-dom";
import ArticleContainer from "../../containers/BlogPageContainers/ArticleContainer/ArticleContainer";
import BlogArticlesContainer from "../../containers/BlogPageContainers/BlogArticlesContainer/BlogArticlesContainer";

const BlogPage = () => {
  return (
    <div className={styles.container}>
      <BlogHeaderContainer />
      <div className={styles.main_container}>
        <Routes>
          <Route path="/" element={<BlogArticlesContainer />} />
          <Route path="/:id" element={<ArticleContainer />} />
        </Routes>
        <BlogSideBarContainer />
      </div>
    </div>
  );
};

export default BlogPage;
