import styles from "./style.module.css";

interface IPropsLinkToPage {
  onClickLink: () => void;
  classNameLink?: string;
  textLink: string;
  href?: string;
}

export const LinkToPage = ({
  onClickLink,
  classNameLink,
  textLink,
  href,
}: IPropsLinkToPage) => {
  return (
    <a
      className={`${classNameLink} ${styles.linkToPageStyle}`}
      href={href}
      onClick={onClickLink}
    >
      {textLink}
    </a>
  );
};
