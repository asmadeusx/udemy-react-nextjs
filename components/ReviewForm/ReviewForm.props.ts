import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ReviewFormProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLParagraphElement> {
  productId: string;
}
