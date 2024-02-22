import { useContext, useEffect, useState } from "react";
import MainContainer from "../../containers/AdminPageContainers/MainContainer/MainContainer";
import SideBarContainer from "../../containers/AdminPageContainers/SideBarContainer/SideBarContainer";
import styles from "./AdminPage.module.scss";
import { BlogContext } from "../../context/BlogContextProvider";
const AdminPage = () => {
  const { showTagModal } = useContext(BlogContext);
  return (
    <div className={styles.container}>
      <SideBarContainer />
      <MainContainer />
    </div>
  );
};

export default AdminPage;
