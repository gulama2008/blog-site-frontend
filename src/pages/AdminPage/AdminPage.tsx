import TopBar from "../../components/TopBar/TopBar";
import MainContainer from "../../containers/MainContainer/MainContainer";
import SideBarContainer from "../../containers/SideBarContainer/SideBarContainer";
import styles from "./AdminPage.module.scss";
const AdminPage = () => {
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
