import { useContext } from "react";
import { BlogContext } from "../../context/BlogContextProvider";
import BlogListItem from "../../components/BlogListItem/BlogListItem";
import styles from "./BlogListContainer.module.scss";
const BlogListContainer = () => {
  const { data, setData } = useContext(BlogContext);
  return (
    <div className={styles.container}>
      <div className={styles.header}>All Blogs (total {data.length})</div>
      <div className={styles.bloglist}>
        {data.map((item: any, index: number) => {
          return <BlogListItem item={item} index={index} key={index} />;
        })}
      </div>
    </div>
  );
};

export default BlogListContainer;
