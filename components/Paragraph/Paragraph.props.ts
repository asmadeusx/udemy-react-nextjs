import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ParagraphProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  children: ReactNode;
  size?: 's' | 'm' | 'l';
  // Вопросительный знак значит, что параметр необязательный.
}
