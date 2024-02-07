import MainContainer from "../../containers/MainContainer/MainContainer"
import SideBarContainer from "../../containers/SideBarContainer/SideBarContainer"
import styles from "./AdminPage.module.scss"
const AdminPage = () => {
  return (
    <div className={styles.container}>
      <SideBarContainer />
      <MainContainer />
    </div>
  );
}

export default AdminPage