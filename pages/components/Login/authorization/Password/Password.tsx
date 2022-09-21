import { FC } from "react";
import { useFormContext } from "react-hook-form";
import style from "../authorization.module.scss";
import { TextField } from "@mui/material";

export const Password: FC = () => {
  const methods = useFormContext();
  const password = methods.watch("password1");
  return (
    <div>
      <div className={style.container_input}>
        <div className={style.name_step}>Придумайте свой пароль</div>
        <TextField
          className={style.input}
          label="Придумайте пароль"
          type="password"
          error={!!methods.formState.errors.password1?.message}
          helperText={methods.formState.errors.password1?.message}
          {...methods.register("password1", {
            required: "Это поле должно быть заполнено",
          })}
        />

        <TextField
          className={style.input}
          label="Повторите пароль"
          type="password"
          error={!!methods.formState.errors.password2?.message}
          helperText={methods.formState.errors.password2?.message}
          {...methods.register("password2", {
            required: "Это поле должно быть заполнено",
            validate: (value) => value === password || "Пароли не совпадают",
          })}
        />
      </div>
    </div>
  );
};
