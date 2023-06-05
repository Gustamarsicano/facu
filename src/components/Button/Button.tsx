import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: any;
}

export default function Button({ className, children }: ButtonProps) {
  return (
    <button
    id="id-button" className={`w-full mt-4 py-2 text-xl rounded-md font-medium" ${className}`}
    >
      {children}
    </button>
  );
}
