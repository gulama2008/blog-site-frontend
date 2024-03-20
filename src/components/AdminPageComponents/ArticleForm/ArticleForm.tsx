import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./Article.module.scss";
import { ArticleService } from "../../../services/article-service";
import { BlogContext } from "../../../context/BlogContextProvider";
import { Utils } from "../../../services/utils";
import Button from "../Button/Button";
export interface ArticleFormProps {
  title: string;
  content: string;
}
const ArticleForm = ({ title, content }: ArticleFormProps) => {
  const { setDataChange, dataChange } = useContext(BlogContext);
  const [formTitle, setFormTitle] = useState<string>(title);
  const [formContent, setFormContent] = useState<string>(content);
  const { id } = useParams();
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
    navigate("/admin/articles", { replace: true });
  };

  const handleSave = (e: any) => {
    e.preventDefault();
    if (id) {
      const data = {
        title: formTitle,
        content: formContent,
      };
      ArticleService.updateArticleById(parseInt(id), data)
        .then(() => {
          let change = dataChange;
          setDataChange(change - 1);
          navigate("/admin/articles", { replace: true });
        })
        .catch((e) => console.error(e));
    } else {
      const date = Utils.getFormattedCurrentDate();
      const data = {
        title: formTitle,
        content: formContent,
        publishDate: date,
      };
      ArticleService.createArticle(data)
        .then(() => {
          let change = dataChange;
          setDataChange(change + 1);
          navigate("/admin/articles", { replace: true });
        })
        .catch((e) => console.error(e));
    }
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
      <div className={styles.btns}>
        <Button
          content="Cancel"
          onClick={handleCancel}
          backgroundColor="white"
          color="#5486e5"
        />
        <Button content="Save" onClick={handleSave} />
      </div>
    </form>
  );
};

export default ArticleForm;
