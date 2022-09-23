import { RestartAltOutlined } from "@mui/icons-material";
import { TextField } from "@mui/material";
import { FC, forwardRef } from "react";
import { IField, IInputHTML } from "../ElementsInterface";
import style from "./Field.module.scss";

const Field = forwardRef<IInputHTML, IField>(
  ({ placeholder, errors, variant = "outlined", ...rest }, ref) => {
    return (
      <div className={style.field}>
        <TextField
          className={style.input}
          // @ts-ignore
          ref={ref}
          label={placeholder}
          variant={variant}
          error={!!errors}
          helperText={errors?.message}
          {...rest}
        />
      </div>
    );
  }
);

Field.displayName = "Field";

export default Field;
