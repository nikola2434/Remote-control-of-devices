import { ButtonHTMLAttributes, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

interface IInputProps {
  placeholder: string;
  errors: FieldError | undefined;
  variant?: "filled" | "outlined" | "standard";
}

export type IInputHTML = InputHTMLAttributes<HTMLInputElement> & IInputProps;

export interface IField extends IInputHTML {}

type IButtonHTML = ButtonHTMLAttributes<HTMLButtonElement>;

export interface IButton extends IButtonHTML {
  typeButton: "1" | "2";
}
