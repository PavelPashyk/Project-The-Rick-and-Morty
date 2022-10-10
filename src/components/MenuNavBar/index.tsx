import styles from "./style.module.css";

export const MenuNavBar = () => {
  return (
    <nav className={styles.navBar__menu}>
      <li className={styles.navBar__linkDay}>
        <a href="#">First Page</a>
      </li>
      <li className={styles.navBar__linkDay}>
        <a href="#">Last Page</a>
      </li>
      <li className={styles.navBar__linkDay}>
        <a href="#">All Characters</a>
      </li>
      <li className={styles.navBar__linkDay}>
        <a href="#">Login</a>
      </li>
      <li className={styles.navBar__linkDay}>
        <a href="#">Registration</a>
      </li>
    </nav>
  );
};
