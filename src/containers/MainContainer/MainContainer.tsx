import styles from "./MainContainer.module.scss";
import { Route, Routes } from "react-router-dom";
import BlogListContainer from "../BlogListContainer/BlogListContainer";
import CommentsContainer from "../CommentsContainer/CommentsContainer";
import TagsContainer from "../TagsContainer/TagsContainer";
import StatisticsContainer from "../StatisticsContainer/StatisticsContainer";
import NewArticleContainer from "../NewArticleContainer/NewArticleContainer";
import EditArticleContainer from "../EditArticleContainer/EditArticleContainer";
const MainContainer = () => {

  return (
    <div className={styles.container}>
      <Routes>
        <Route path="/new" element={<NewArticleContainer />} />
        <Route path="/blogs" element={<BlogListContainer />} />
        <Route path="/blogs/:id" element={<EditArticleContainer/>} />
        <Route path="/comments" element={<CommentsContainer />} />
        <Route path="/tags" element={<TagsContainer />} />
        <Route path="/statistics" element={<StatisticsContainer />} />
      </Routes>
    </div>
  );
};

export default MainContainer;
