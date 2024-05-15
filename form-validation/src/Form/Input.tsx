import { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import { twMerge } from "tailwind-merge";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export function Input({ className, ...props }: InputProps) {
  const { register } = useFormContext();

  return (
    <input
      id={props.name}
      className={twMerge(
        "h-10 px-3 bg-zinc-100 text-black rounded outline-none",
        className
      )}
      {...register(props.name)}
      {...props}
    />
  );
}
