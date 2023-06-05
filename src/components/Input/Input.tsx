interface InputType {
  className?: string;
  type: string;
  required?: boolean;
  placeholder: string;
}

export default function Input({
  className,
  type,
  required,
  placeholder,
}: InputType) {
  return (
    <input
      className={`p-2 rounded-md text-black-700 ring-yellow-500 focus:outline-none focus:ring-2 focus:bg-black-50 ${className}`}
      type={type}
      placeholder={placeholder}
      required={required}
    />
  );
}
