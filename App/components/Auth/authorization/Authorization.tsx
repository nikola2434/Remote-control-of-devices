import { FC } from "react";
import { motion } from "framer-motion";
import style from "./authorization.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { AuthField } from "./AuthField/AuthField";
import { MyButton } from "../../Elements/MyButton/MyButton";

export interface INewUser {
  email: string;
  password: string;
  repeatPassword: string;
}

export const Authorization: FC = () => {
  const { register, handleSubmit, formState, watch, reset } = useForm<INewUser>(
    { mode: "onChange" }
  );

  const onSubmit: SubmitHandler<INewUser> = (data) => {
    alert(JSON.stringify(data));
    reset();
  };
  return (
    <motion.div className={style.login}>
      <motion.div
        className={style.container_auth}
        initial={{ x: "100vw" }}
        animate={{ x: "35vw" }}
      >
        <div className={style.name}>Регистрация</div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <AuthField formState={formState} register={register} watch={watch} />
          <MyButton typeButton="1"> Зарегистрироваться</MyButton>
        </form>
      </motion.div>
    </motion.div>
  );
};
