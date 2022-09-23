import { FC } from "react";
import { FormState, UseFormRegister, UseFormWatch } from "react-hook-form";
import Field from "../../../Elements/Field/Field";
import { SubTitle } from "../../../SubTitle/SubTitle";
import { INewUser } from "../Authorization";
import style from "../authorization.module.scss";

interface IAuthField {
  formState: FormState<INewUser>;
  register: UseFormRegister<INewUser>;
  watch: UseFormWatch<INewUser>;
}

export const AuthField: FC<IAuthField> = ({
  formState: { errors },
  register,
  watch,
}) => {
  const currentPassword = watch("password");
  return (
    <>
      <SubTitle description="Введите свою электронную почту" />
      <div className={style.field}>
        <Field
          placeholder="Адрес электронной почты"
          errors={errors.email}
          {...register("email", {
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
      <SubTitle description="Введите пароль" />
      <div className={style.field}>
        <Field
          placeholder="Введите пароль"
          errors={errors.password}
          type="password"
          key={"password"}
          {...register("password", {
            required: "Это поле должно быть заполнено",
            minLength: {
              value: 5,
              message: "пароль должен быть длиннее 5 символов",
            },
          })}
        />
      </div>
      <SubTitle description="Повторите пароль" />
      <div className={style.field}>
        <Field
          placeholder="Повторите пароль"
          errors={errors.repeatPassword}
          type="password"
          key={"repeatPassword"}
          {...register("repeatPassword", {
            required: "Это поле должно быть заполнено",
            validate: (value) =>
              value === currentPassword || "Пароли не совпадают",
          })}
        />
      </div>
    </>
  );
};
