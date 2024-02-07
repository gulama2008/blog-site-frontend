import { useContext } from "react";
import styles from "./SideBarItem.module.scss";
import { BlogContext } from "../../context/BlogContextProvider";
import { Link } from "react-router-dom";
export interface SideBarItemProps {
  title: string;
  index: number;
  icon: any;
  route:string
}

const SideBarItem = ({ title, index,icon,route }: SideBarItemProps) => {
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
    <Link to={route}>
      <div className={containerClasses} onClick={handleClick}>
        <img src={icon} alt="" className={styles.icon} />
        <div className={styles.title}>{title}</div>
      </div>
    </Link>
  );
};

export default SideBarItem;
