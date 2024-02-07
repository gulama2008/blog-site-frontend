import { useContext } from "react";
import styles from "./SideBarItem.module.scss";
import { BlogContext } from "../../context/BlogContextProvider";
export interface SideBarItemProps {
  title: string;
  index: number;
  icon:any
}

const SideBarItem = ({ title, index,icon }: SideBarItemProps) => {
  const { activeSideBarItemIndex, setActiveSideBarItemIndex } =
    useContext(BlogContext);
  const handleClick = () => {
    setActiveSideBarItemIndex(index);
  };

  let containerClasses = styles.container;
  if (activeSideBarItemIndex === index) {
    containerClasses += ` ${styles.active}`;
  }

  return (
    <div className={containerClasses} onClick={handleClick}>
      <img src={icon} alt="" className={ styles.icon} />
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default SideBarItem;
