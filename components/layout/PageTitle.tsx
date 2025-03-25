import type React from "react";

export function PageTitle({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={
        `my-3 text-xl font-bold text-gray-700 md:text-2xl lg:text-2xl xl:text-3xl ${className}`
      }
      {...props}
    >
      {children}
    </h1>
  );
}
