import { useContext, useEffect, useState } from "react";
import {
  ArticleItem,
  BlogContext,
  BlogItem,
} from "../../../context/BlogContextProvider";
import BlogListItem from "../../../components/BlogListItem/BlogListItem";
import styles from "./BlogListContainer.module.scss";
import { useForm } from "react-hook-form";
import TagModal from "../../../components/TagModal/TagModal";
import Button from "../../../components/Button/Button";
import DeleteModal from "../../../components/AdminPageComponents/DeleteModal/DeleteModal";
import { ArticleService } from "../../../services/article-service";
export interface FormData {
  fromDate: string;
  toDate: string;
}
const BlogListContainer = () => {
  const { data, setData,displayData,setDisplayData, showTagModal, showDeleteModal } =
    useContext(BlogContext);
  const [showModalClass, setShowModalClass] = useState<string>("");

  // const containerClass = styles.container;
  useEffect(() => {
    if (showTagModal || showDeleteModal) {
      setShowModalClass(`${styles.disabled}`);
    } else {
      setShowModalClass("");
    }
  }, [showTagModal, showDeleteModal]);
  console.log(data);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      fromDate: "",
      toDate: "",
    },
    mode: "all",
  });

  const formSubmit = (formData: any) => {
    const filteredData = data.filter((item: ArticleItem) => {
      return (
        item.publishDate >= formData.fromDate &&
        item.publishDate <= formData.toDate
      );
    });
    setDisplayData(filteredData);
  };
  const handleClear = (e: any) => {
    e.preventDefault();
    reset();
    setDisplayData(data);
  };
  return (
    <div className={styles.container}>
      <div className={showModalClass}>
        <div className={styles.header}>
          <div className={styles.total}>All Articles (total {data.length})</div>
          <form className={styles.filter} onSubmit={handleSubmit(formSubmit)}>
            From
            <input
              type="date"
              className={styles.input}
              // value={fromDate}
              // onChange={handleChangeFromDate}
              {...register("fromDate")}
            />{" "}
            To
            <input
              type="date"
              className={styles.input}
              // value={toDate}
              // onChange={handleChangeToDate}
              {...register("toDate")}
            />
            <button className={styles.btn}>Filter</button>
            <Button content="Clear" onClick={handleClear}  />
          </form>
        </div>
        <div className={styles.bloglist}>
          {displayData.map((item: ArticleItem, index: number) => {
            return <BlogListItem item={item} index={item.id} key={index} />;
          })}
        </div>
      </div>
      {showDeleteModal && (
        <div className={styles.modal}>
          <DeleteModal />
        </div>
      )}
      {showTagModal && (
        <div className={styles.modal}>
          <TagModal />
        </div>
      )}
    </div>
  );
};

export default BlogListContainer;
