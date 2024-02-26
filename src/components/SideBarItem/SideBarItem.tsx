import { useContext, useEffect } from "react";
import styles from "./SideBarItem.module.scss";
import { BlogContext } from "../../context/BlogContextProvider";
import { Link, useLocation } from "react-router-dom";
import { sideBarItemList } from "../../containers/AdminPageContainers/SideBarContainer/SideBarContainer";
export interface SideBarItemProps {
  title: string;
  index: number;
  icon: any;
  route:string
}

const SideBarItem = ({ title, index,icon,route }: SideBarItemProps) => {
  const { activeSideBarItemIndex, setActiveSideBarItemIndex } =
    useContext(BlogContext);
  const location = useLocation();
  const { pathname } = location;
  useEffect(() => {
    const pathArr = pathname.split("/");
    console.log(pathArr);
    
    const route = pathArr[pathArr.length - 1];
    console.log(route);
    
    const activeIndex = sideBarItemList.findIndex((e: any) => { 
      console.log(e);
      
      console.log(e[2]);
      
      return e[2] == route;
    })
    console.log(activeIndex);
    
    setActiveSideBarItemIndex(activeIndex);
   },[])
  
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
