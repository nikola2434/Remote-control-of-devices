import { FC } from "react";
import style from "./login.module.scss";
import lock from "../../../public/images/locked.png";
import { SubmitHandler, useForm } from "react-hook-form";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

const Login: FC = (props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<Idata>();

  interface Idata {
    login: string;
    password: string;
    remember: boolean;
  }

  const submitData: SubmitHandler<Idata> = (data) => {
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
            <TextField
              className={style.input}
              label="Адрес электронной почты"
              variant="outlined"
              error={!!errors.login?.message}
              helperText={errors.login?.message}
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
            <TextField
              className={style.input}
              label="Пароль"
              type="password"
              error={!!errors.password?.message}
              helperText={errors.password?.message}
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
        <Link href="/components/Login/authorization" className={style.link}>
          <a className={style.link}>Зарегистрироваться</a>
        </Link>
      </div>
    </div>
  );
};

export default Login;
