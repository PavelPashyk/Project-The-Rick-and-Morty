import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { getUser, login, registerUser } from "../../../api/auth";
import { ContextAll } from "../../../App";
import { IPropsForm } from "../../../types/form";
import { Button } from "../../PageElementsBox/Button";
import { ContainerForm } from "../../PageElementsBox/ContainerForm";
import { Svg } from "../../PageElementsBox/Svg";
import { Wrapper } from "../../PageElementsBox/Wrapper";
import { FormText } from "../FormText";
import { FormTitle } from "../FormTitle";
import styles from "./style.module.css";

export const FormLogin = () => {
  const [errorResponseLogin, setErrorResponseLogin] = useState("");
  const { setUser } = useContext(ContextAll);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<IPropsForm>({ mode: "onChange" });

  const navigate = useNavigate();
  const navigateToRegistration = () => {
    navigate("/main");
  };

  const onClickRegistration: SubmitHandler<IPropsForm> = (data) => {
    console.log(JSON.stringify(data));

    if (isValid) {
      console.log("отправлена");
      const promise = login(data.email, `${data.password}`);
      let isOk = true;

      promise
        .then((response) => {
          if (response.ok) {
            isOk = true;
          } else {
            isOk = false;
          }
          return response.json();
        })
        .then((json) => {
          if (isOk) {
            localStorage.setItem("access", json.access);
            localStorage.setItem("refresh", json.refresh);
            getUser()
              .then((response) => {
                return response.json();
              })
              .then((user) => {
                console.log(user);
                navigate("/main");
                setUser(user);
              });
          } else {
            console.log("не отправлено");
            if (
              json?.email?.includes(
                "No active account found with the given credentials"
              )
            ) {
              setErrorResponseLogin(
                "Please try again: no active account found with the given credentials."
              );
              return;
            }
            if (
              json?.password?.includes(
                "No active account found with the given credentials"
              )
            ) {
              setErrorResponseLogin(
                "Please try again: no active account found with the given credentials."
              );
              return;
            }
          }
        });
    }
    reset();
  };

  return (
    <Wrapper classNameWrapper={styles.form__box}>
      <ContainerForm>
        <FormTitle />
        <div className={styles.form__block}>
          <form
            className={styles.form__blockInner}
            onSubmit={handleSubmit(onClickRegistration)}
          >
            <div
              className={`${styles.form__blockInput} ${styles.form__blockSvgEmail}`}
            >
              <p className={styles.form__text}>Email</p>
              <input
                type={"email"}
                placeholder={"Enter your email"}
                className={`${styles.inputStyle}`}
                {...register("email", {
                  required: "Please enter your email.",
                  pattern: {
                    value: /(^|\s+)[\w\-.]+@([\w-]+\.)+[\w-]{2,4}($|\s+)/,
                    message: "Invalid email format.",
                  },
                })}
              />
              {errors?.email && (
                <p className={styles.errorText}>{`${errors.email.message}`}</p>
              )}
              <div
                className={errors.email ? styles.svgEmailNo : styles.svgEmail}
              >
                <Svg id={"email"} />
              </div>
            </div>
            <div
              className={`${styles.form__blockInput} ${styles.form__blockSvgPassword}`}
            >
              <p className={styles.form__text}>Password</p>
              <input
                type={"password"}
                placeholder={"Create a password"}
                className={`${styles.inputStyle}`}
                {...register("password", {
                  required: "Please enter your password.",
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{0,}$/,
                    message:
                      "The password must contain 1 number, 1 lowercase letter and 1 uppercase letter.",
                  },
                  maxLength: {
                    value: 15,
                    message:
                      "Your password must be no longer than 10 characters!",
                  },
                  minLength: {
                    value: 4,
                    message:
                      "Your password must contain at least 4 characters.",
                  },
                })}
              />
              {errors?.password && (
                <p
                  className={styles.errorText}
                >{`${errors.password.message}`}</p>
              )}
              <div
                className={
                  errors.password ? styles.svgPasswordNo : styles.svgPassword
                }
              >
                <Svg id={"password"} />
              </div>
            </div>
            <Button
              text={"Login"}
              type={"submit"}
              typeStyles={"btnForm"}
              onClickBtn={() => {}}
              disabled={isValid ? false : true}
            />
          </form>
        </div>
        <p className={styles.errorResponseText}>{errorResponseLogin}</p>
        <FormText
          text={"Don't have an account? "}
          onClickToPage={navigateToRegistration}
          textLink={"Signup now"}
        />
      </ContainerForm>
    </Wrapper>
  );
};
