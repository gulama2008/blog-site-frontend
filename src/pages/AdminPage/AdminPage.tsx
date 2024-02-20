import { useContext, useEffect, useState } from "react";
import TopBar from "../../components/TopBar/TopBar";
import MainContainer from "../../containers/MainContainer/MainContainer";
import SideBarContainer from "../../containers/SideBarContainer/SideBarContainer";
import styles from "./AdminPage.module.scss";
import { BlogContext } from "../../context/BlogContextProvider";
const AdminPage = () => {
  const { showTagModal }=useContext(BlogContext);
  // const [modalClass, setModalClass] = useState<string>("");
  // const containerClass = styles.container;
  // useEffect(() => {
  //   if (showTagModal) {
  //     setModalClass(`${containerClass} ${styles.disabled}`);
  //   } else {
  //     setModalClass(`${containerClass}`);
  //   }
  // }, [showTagModal]);
  return (
    <div className={styles.container}>
      {/* <div className={styles.top}>
        <TopBar />
      </div> */}
      {/* <div className={styles.main}> */}
        <SideBarContainer />
        <MainContainer />
      {/* </div> */}
    </div>
  );
};

export default AdminPage;
