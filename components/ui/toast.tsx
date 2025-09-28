import { ReactNode } from "react";

export interface ToastProps {
  message: ReactNode;
  type?: "success" | "error" | "info";
  onClose?: () => void;
}

export default function Toast({ message, type = "info", onClose }: ToastProps) {
  return (
    <div className={`toast toast-${type}`}>
      {message}
      {onClose && <button onClick={onClose}>×</button>}
    </div>
  );
}
