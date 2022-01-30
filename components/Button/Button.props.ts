import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface ButtonProps extends Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 
'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag' | 'ref'
> {
  children: ReactNode;
  apperance: 'primary' | 'ghost';
  arrow?: 'right' | 'down' | 'none'; // Вопросительный знак значит, что параметр необязательный.
}
