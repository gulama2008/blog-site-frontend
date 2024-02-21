import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArticleItem, BlogContext, BlogItem } from "../../context/BlogContextProvider";
import styles from "./EditArticleContainer.module.scss";
import ArticleForm from "../../components/ArticleForm/ArticleForm";
const EditArticleContainer = () => {
  const { data } = useContext(BlogContext);
  const { id } = useParams();
  const [currentArticleItem, setCurrentArticleItem] = useState<ArticleItem>();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  useEffect(() => {
    if (id) {
      const item = data.find((e: ArticleItem) => e.id == parseInt(id));
      setCurrentArticleItem(item);
      setTitle(item.title);
      setContent(item.content);
    }
  }, [id]);
  
  return (
    // <form className={styles.form}>
    //   <input
    //     type="text"
    //     value={title}
    //     onChange={handleChangeTitle}
    //     className={styles.title}
    //   />
    //   <textarea
    //     name=""
    //     id=""
    //     cols={30}
    //     rows={30}
    //     value={content}
    //     onChange={handleChangeContent}
    //     className={styles.content}
    //   ></textarea>
    //   <div>
    //     <button onClick={handleCancel}>Cancel</button>
    //     <button>Save</button>
    //   </div>
    // </form>
    <ArticleForm title={ title} content={content} />
  );
};

export default EditArticleContainer;
