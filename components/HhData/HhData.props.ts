import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLParagraphElement> {
  children: ReactNode;
  color?: 'white' | 'blue';
  // Вопросительный знак значит, что параметр необязательный.
}
