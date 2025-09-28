import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Input({ label, ...props }: InputProps) {
  return (
    <label>
      {label && <span>{label}</span>}
      <input {...props} />
    </label>
  );
}
