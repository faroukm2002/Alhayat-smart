import { ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return <div className={`card ${className ?? ""}`}>{children}</div>;
}
