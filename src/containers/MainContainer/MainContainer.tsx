import styles from "./MainContainer.module.scss";
import { Route, Routes } from "react-router-dom";
import BlogListContainer from "../BlogListContainer/BlogListContainer";
import NewBlogContainer from "../NewBlogContainer/NewBlogContainer";
import CommentsContainer from "../CommentsContainer/CommentsContainer";
import TagsContainer from "../TagsContainer/TagsContainer";
import StatisticsContainer from "../StatisticsContainer/StatisticsContainer";
import EditBlogContainer from "../EditBlogContainer/EditBlogContainer";
const MainContainer = () => {

  return (
    <div className={styles.container}>
      <Routes>
        <Route path="/new" element={<NewBlogContainer />} />
        <Route path="/blogs" element={<BlogListContainer />} />
        <Route path="/blogs/:id" element={<EditBlogContainer/>} />
        <Route path="/comments" element={<CommentsContainer />} />
        <Route path="/tags" element={<TagsContainer />} />
        <Route path="/statistics" element={<StatisticsContainer />} />
      </Routes>
    </div>
  );
};

export default MainContainer;
