import { useNavigate } from "react-router-dom";
import { FormText } from "../FormText";
import { ContainerForm } from "../../PageElementsBox/ContainerForm";
import { Wrapper } from "../../PageElementsBox/Wrapper";
import { FormTitle } from "../FormTitle";
import styles from "./style.module.css";
import { Button } from "../../PageElementsBox/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { IPropsForm } from "../../../types/form";
import { Svg } from "../../PageElementsBox/Svg";
import { registerUser } from "../../../api/auth";
import { useState } from "react";

export const FormRegistration = () => {
  const [errorResponse, setErrorResponse] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    watch,
  } = useForm<IPropsForm>({ mode: "onChange" });

  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/login");
  };

  const onClickRegistration: SubmitHandler<IPropsForm> = (data) => {
    console.log(`${data.name} ${data.email} ${data.password} ${data.confirm}`);
    // console.log(JSON.stringify(data));

    if (isValid) {
      console.log("отправлена");
      const promise = registerUser(data.name, data.email, `${data.password}`);
      let isOk = true;

      promise
        .then((response) => {
          if (response.ok) {
            isOk = true;
          } else {
            isOk = false;
          }
          console.log(response);
          return response.json();
        })
        .then((json) => {
          if (isOk) {
            navigate("/success");
          } else {
            if (
              json?.username?.includes(
                "A user with that username already exists."
              )
            ) {
              setErrorResponse(
                "Please try again: a user with the same name already exists."
              );
              return;
            }
            if (json?.email?.includes("user with this Email already exists.")) {
              setErrorResponse(
                "Please try again: user with this Email already exists."
              );
              return;
            }
            if (json?.email?.includes("Enter a valid email address.")) {
              setErrorResponse(
                "Please try again: enter a valid email address."
              );
              return;
            }
            if (
              json?.password?.includes(
                "This password is too short. It must contain at least 8 characters."
              )
            ) {
              setErrorResponse("Please try again: short password.");
              return;
            }
            if (json?.password?.includes("This password is too common.")) {
              setErrorResponse(
                "Please try again: this password is too common."
              );
              return;
            }
            if (
              json?.password?.includes("This password is entirely numeric.")
            ) {
              setErrorResponse(
                "Please try again: this password is entirely numeric."
              );
              return;
            }
          }
        });
    }
    reset();
  };

  const watchPassword = watch("password");

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
              className={`${styles.form__blockInput} ${styles.form__blockSvgName}`}
            >
              <p className={styles.form__text}>Name</p>
              <input
                type={"text"}
                placeholder={"Enter your name"}
                className={`${styles.inputStyle}`}
                {...register("name", {
                  required: "Please enter your name.",
                  validate: {
                    noSpace: (value) =>
                      value.includes(" ") === false ||
                      "Your name must not contain spaces!",
                    maxLength: (value) =>
                      value.length <= 10 ||
                      "Your name must be no longer than 10 characters!",
                  },
                  pattern: {
                    value: /(?=.*[a-z])(?=.*[A-Z])/g,
                    message:
                      "Your name must contain upper and lower case Latin letters.",
                  },
                  minLength: {
                    value: 2,
                    message: "Your name must contain at least 2 characters.",
                  },
                })}
              />
              {errors?.name && (
                <p className={styles.errorText}>{`${errors.name.message}`}</p>
              )}
              <div className={errors.name ? styles.svgNameNo : styles.svgName}>
                <Svg id={"name"} />
              </div>
            </div>
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
                  validate: {
                    noSpace: (value) =>
                      value.includes(" ") === false ||
                      "Your password must not contain spaces!",
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
                    value: 10,
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
            <div
              className={`${styles.form__blockInput} ${styles.form__blockSvgConfirm}`}
            >
              <p className={styles.form__text}>Password</p>
              <input
                type={"password"}
                placeholder={"Confirm a password"}
                className={`${styles.inputStyle}`}
                {...register("confirm", {
                  required: "Please confirm password.",
                  validate: {
                    noSpace: (value) =>
                      value.toString() === watchPassword.toString() ||
                      "The password is incorrect!",
                  },
                })}
              />
              {errors?.confirm && (
                <p
                  className={styles.errorText}
                >{`${errors.confirm.message}`}</p>
              )}
              <div
                className={
                  errors.confirm ? styles.svgConfirmNo : styles.svgConfirm
                }
              >
                <Svg id={"password"} />
              </div>
            </div>
            <Button
              text={"Register"}
              type={"submit"}
              typeStyles={"btnForm"}
              onClickBtn={() => {}}
              // onClickBtn={onClickForm}
              disabled={isValid ? false : true}
            />
          </form>
        </div>
        <p className={styles.errorResponseText}>{errorResponse}</p>
        <FormText
          text={"Already have an account? "}
          onClickToPage={navigateToLogin}
          textLink={"Login now"}
        />
      </ContainerForm>
    </Wrapper>
  );
};
