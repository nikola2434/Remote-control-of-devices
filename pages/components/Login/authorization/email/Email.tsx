import { FC } from "react";
import { useFormContext } from "react-hook-form";
import style from "../authorization.module.scss";
import { TextField } from "@mui/material";


interface IEmailProps {
  step: number;
}
export const Email: FC<IEmailProps> = ({ step }) => {
  const methods = useFormContext();

  return (
    <div>
      <div

        className={style.container_input}
      >
        <div className={style.name_step}>Напишите свою электронную почту:</div>
        <TextField
          className={style.input}
          label="Адрес электронной почты"
          variant="outlined"
          error={!!methods.formState.errors.email?.message}
          helperText={methods.formState.errors.email?.message}
          {...methods.register("email", {
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
    </div>
  );
};
