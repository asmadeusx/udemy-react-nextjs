import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import up from './arrowup.svg';
import close from './closeicon.svg';
import menu from './menuicon.svg';
import glass from './glass.svg';

export const icons = {
  up,
  close,
  menu,
  glass
}

export type IconName = keyof typeof icons;

export interface ButtonIconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  apperance: 'primary' | 'white';
  icon: IconName;
}
