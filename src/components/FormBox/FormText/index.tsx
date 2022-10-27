import styles from "./style.module.css";

interface IPropsFormText {
  text: string;
  classNameText?: string;
  onClickToPage: () => void;
  textLink: string;
}

export const FormText = ({
  text,
  classNameText,
  onClickToPage,
  textLink,
}: IPropsFormText) => {
  return (
    <div className={styles.form__textBlock}>
      <p className={`${styles.form__text} ${classNameText}`}>
        {text}
        <span onClick={onClickToPage}>{textLink}</span>
      </p>
    </div>
  );
};
