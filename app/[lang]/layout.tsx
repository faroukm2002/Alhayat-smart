import { ReactNode } from "react";
import "@/styles/globals.css";

export const metadata = {
  title: "Alhayat Smart Home",
  description: "Smart home solutions and e-commerce platform.",
};

export default function LangLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
