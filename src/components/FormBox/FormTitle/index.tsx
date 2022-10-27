import { NavLink } from "react-router-dom";
import styles from "./style.module.css";

export const FormTitle = () => {
  return (
    <div className={styles.form__title}>
      <NavLink
        to={"/login"}
        className={({ isActive }) =>
          isActive ? styles.titleActive : styles.titleNotActive
        }
      >
        <span className={styles.form__login}>Login</span>
      </NavLink>
      <NavLink
        to={"/registration"}
        className={({ isActive }) =>
          isActive ? styles.titleActive : styles.titleNotActive
        }
      >
        <span className={styles.form__registration}>Registration</span>
      </NavLink>
    </div>
  );
};
