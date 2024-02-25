import { useContext, useState } from "react";
import styles from "./BlogSearchBar.module.scss";
import { BlogContext } from "../../../context/BlogContextProvider";
import { ArticleService } from "../../../services/article-service";
import search from "../../../assets/search.png"
import { Utils } from "../../../services/utils";
const BlogSearchBar = () => {
  const { setData } = useContext(BlogContext);
  const [searchValue, setSearchValue] = useState<string>("");
  const handleChange = (e: any) => {
    setSearchValue(e.target.value);
  };

  const handleEnterKeyPress = (e: any) => {
    e.preventDefault();
    if (e.keyCode === 13) {
      ArticleService.getAllArticlesByKeyword(searchValue)
        .then(result => {
          console.log(result);
          
          setData(result)
        })
        .catch((e) => console.error(e));
    }
  };

  const handleSearch = (e:any) => { 
    e.preventDefault();
    ArticleService.getAllArticlesByKeyword(searchValue)
      .then((result) => {
        const sortedResult=Utils.sortArticlesByPublishDate(result)
        setData(sortedResult);
      })
      .catch((e) => console.error(e));
  }
  return (
    <form className={styles.container}>
      <input
        type="search"
        placeholder="Search for articles..."
        className={styles.search}
        value={searchValue}
        onChange={handleChange}
        // onKeyDown={handleEnterKeyPress}
      />
      <button onClick={handleSearch} className={styles.btn}><img src={search} alt="" className={ styles.icon} /></button>
    </form>
  );
};

export default BlogSearchBar;
