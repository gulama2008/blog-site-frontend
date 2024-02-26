import { useContext, useEffect, useRef, useState } from "react";
import styles from "./NewTag.module.scss";
import { TagService } from "../../../services/tag-services";
import { BlogContext } from "../../../context/BlogContextProvider";

const NewTag = () => {
    const { tagChange, setTagChange } = useContext(BlogContext);
    const [typeNewTag, setTypeNewTag] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>("");
    const ref = useRef<HTMLInputElement>(null);
    useEffect(() => {
      if (ref.current) {
        ref.current.focus();
      }
    }, [typeNewTag]);
  const handleClick = () => {
      setTypeNewTag(!typeNewTag);
  };
    const handleAddNewTag = () => { 
        if (inputValue == "") {
          setTypeNewTag(false);
        } else {
          const data = {
            name: inputValue,
          };
          TagService.createTag(data)
            .then(() => {
              setTagChange(tagChange + 1);
              setInputValue("");
              setTypeNewTag(false);
            })
            .catch((err) => console.log(err));
        }
    }

    const handleChange = (e:any) => { 
        setInputValue(e.target.value)
    }

    const handleEnterKeyPress = (e:any) => { 
        if (e.keyCode === 13 || e.which === 13) {
          handleAddNewTag();
        } else if (e.keyCode === 27) {
          setInputValue("");
          setTypeNewTag(false);
        }
    }

  return (
    <div className={styles.container}>
      {typeNewTag ? (
        <input
          type="text"
          className={styles.input}
                  ref={ref}
                  value={inputValue}
          onBlur={handleAddNewTag}
          onChange={handleChange}
          onKeyDown={handleEnterKeyPress}
        />
      ) : (
        <div className={styles.new} onClick={handleClick}>
          + New Tag
        </div>
      )}
    </div>
  );
};

export default NewTag;
