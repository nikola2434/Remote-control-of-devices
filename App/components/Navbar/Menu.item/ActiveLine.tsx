import { motion } from "framer-motion";
import { FC } from "react";
import style from "../Navbar.module.scss";

export const ActiveLine: FC = () => {
  return <motion.div layoutId="activeItem" className={style.line}></motion.div>;
};
