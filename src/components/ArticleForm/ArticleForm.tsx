import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Article.module.scss";
export interface ArticleFormProps {
  title: string;
  content: string;
}
const ArticleForm = ({ title, content }: ArticleFormProps) => {
  const [formTitle, setFormTitle] = useState<string>(title);
  const [formContent, setFormContent] = useState<string>(content);
  useEffect(() => {
    setFormTitle(title);
    setFormContent(content);
  }, [title, content]);
  const navigate = useNavigate();
  const handleChangeTitle = (e: any) => {
    setFormTitle(e.target.value);
  };
  const handleChangeContent = (e: any) => {
    setFormContent(e.target.value);
  };
  const handleCancel = () => {
    navigate("/admin/blogs", { replace: true });
  };
  return (
    <form className={styles.form}>
      <input
        type="text"
        value={formTitle}
        onChange={handleChangeTitle}
        className={styles.title}
      />
      <textarea
        name=""
        id=""
        cols={30}
        rows={30}
        value={formContent}
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

export default ArticleForm;
