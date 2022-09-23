import { FC, useState } from "react";
import { motion } from "framer-motion";
import style from "./authorization.module.scss";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Password } from "./Password/Password";
import { Email } from "./email/Email";

interface INewUser {
  email: string;
  password1: string;
}

export const Authorization: FC = () => {
  const [step, setStep] = useState(0);
  const methods = useForm<INewUser>({ mode: "onBlur" });
  const { handleSubmit, reset } = methods;

  function handleNext(): void {
    setStep(1);
  }
  function handleBack(): void {
    setStep(0);
  }
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
        <div className={style.step}> Шаг: {step}</div>

        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {step === 0 ? <Email step={step} /> : <Password step={step} />}
            <div className={style.container_button}>
              <button onClick={handleBack} disabled={step === 0} type="button">
                Назад
              </button>
              {step === 0 ? (
                <button onClick={handleNext} type="button">
                  Далее
                </button>
              ) : (
                <button type="submit">Зарегистрироваться</button>
              )}
            </div>
          </form>
        </FormProvider>
      </motion.div>
    </motion.div>
  );
};
