import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ContextAll } from "../../../App";
import styles from "./style.module.css";

export const MenuNavBar = () => {
  const { isThema, setIsThema, user } = useContext(ContextAll);

  const getLinkThema = () =>
    isThema ? styles.navBar__linkNight : styles.navBar__linkDay;

  return (
    <nav className={styles.navBar__menu}>
      <li className={`${getLinkThema()}`}>
        <NavLink
          end
          to={"/"}
          className={({ isActive }) =>
            isActive ? styles.navBar__linkActive : ""
          }
        >
          <span>First Page</span>
        </NavLink>
      </li>
      <li className={`${getLinkThema()} ${styles.we} `}>
        <NavLink
          to={"/page_last"}
          className={({ isActive }) =>
            isActive ? styles.navBar__linkActive : ""
          }
        >
          <span>About the project</span>
        </NavLink>
      </li>
      <li className={`${getLinkThema()}`}>
        <NavLink
          to={"/main"}
          className={({ isActive }) =>
            isActive ? styles.navBar__linkActive : ""
          }
        >
          <span>All Characters</span>
        </NavLink>
      </li>
      {user ? null : (
        <>
          <li className={`${getLinkThema()}`}>
            <NavLink
              to={"/login"}
              className={({ isActive }) =>
                isActive ? styles.navBar__linkActive : ""
              }
            >
              <span>Login</span>
            </NavLink>
          </li>
          <li className={`${getLinkThema()}`}>
            <NavLink
              to={"/registration"}
              className={({ isActive }) =>
                isActive ? styles.navBar__linkActive : ""
              }
            >
              <span>Registration</span>
            </NavLink>
          </li>
        </>
      )}
      {!user ? null : (
        <>
          <li className={`${getLinkThema()}`}>
            <NavLink
              to={"/page_my_posts"}
              className={({ isActive }) =>
                isActive ? styles.navBar__linkActive : ""
              }
            >
              <span>My Posts</span>
            </NavLink>
          </li>
        </>
      )}
    </nav>
  );
};
