import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BlogContext, BlogItem } from "../../context/BlogContextProvider";
import styles from "./EditArticleContainer.module.scss";
const EditArticleContainer = () => {
  const { data } = useContext(BlogContext);
  const { id } = useParams();
  const [currentBlogItem, setCurrentBlogItem] = useState<BlogItem>();
  const [title, setTitle] = useState<string>();
  const [content, setContent] = useState<string>();
  useEffect(() => {
    if (id) {
      const item = data.find((e: BlogItem) => e.id == parseInt(id));
      setCurrentBlogItem(item);
      setTitle(item.title);
      setContent(item.content);
    }
  }, [id]);
  const navigate = useNavigate();
  const handleChangeTitle = (e: any) => {
    setTitle(e.target.value);
  };
  const handleChangeContent = (e: any) => {
    setContent(e.target.value);
  };
  const handleCancel = () => {
    navigate("/admin/blogs", { replace: true });
  };
  return (
    <form className={styles.form}>
      <input
        type="text"
        value={title}
        onChange={handleChangeTitle}
        className={styles.title}
      />
      <textarea
        name=""
        id=""
        cols={30}
        rows={30}
        value={content}
        onChange={handleChangeContent}
        className={styles.content}
      ></textarea>
      <div>
        <button onClick={handleCancel}>Cancel</button>
        <button>Save</button>
      </div>
    </form>
  );
};

export default EditArticleContainer;
