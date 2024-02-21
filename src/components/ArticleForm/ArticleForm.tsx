import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Article.module.scss'

const ArticleForm = () => {
  const [title, setTitle] = useState<string>();
  const [content, setContent] = useState<string>();
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
}

export default ArticleForm