import { FC } from "react";
import style from "./login.module.scss";
import lock from "../../../public/images/locked.png";
import { SubmitHandler, useForm } from "react-hook-form";
import { Checkbox, FormControlLabel } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import Field from "../Elements/Field/Field";

export const Auth: FC = (props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IData>();

  interface IData {
    login: string;
    password: string;
    remember: boolean;
  }

  const submitData: SubmitHandler<IData> = (data) => {
    alert(JSON.stringify(data));
    reset();
  };
  return (
    <div className={style.login}>
      <div className={style.container}>
        <Image src={lock} width={50} height={50} alt="" />

        <div className={style.name}>Войти</div>
        <form onSubmit={handleSubmit(submitData)} className={style.form}>
          <div className={style.container_input}>
            <Field
              placeholder="Адрес электронной почты"
              errors={errors.login}
              {...register("login", {
                required: "Это поле должно быть заполнено",
                minLength: {
                  value: 3,
                  message: "Адрес электронной почты введен не верно",
                },
                pattern: {
                  value: /@/,
                  message: "Адрес электронноый почты введен не верно",
                },
              })}
            />
          </div>
          <div className={style.container_input}>
            <Field
              placeholder="Пароль"
              variant="outlined"
              type="password"
              errors={errors.password}
              {...register("password", {
                required: "Это поле должно быть заполнено",
              })}
            />
          </div>
          <div className={style.check}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Запомнить меня"
              {...register("remember")}
            />
          </div>

          <button>Войти</button>
        </form>
        <Link href="/authorization" className={style.link}>
          <a className={style.link}>Зарегистрироваться</a>
        </Link>
      </div>
    </div>
  );
};
