import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode;
  apperance: 'primary' | 'ghost';
  arrow?: 'right' | 'down' | 'none'; // Вопросительный знак значит, что параметр необязательный.
}
